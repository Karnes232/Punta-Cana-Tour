const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { transformSync } = require("@babel/core");
const e = require("../src/utils/editorial");
const linking = require("../src/utils/interlinking");
const { applyEditorialUpdate } = require('../src/utils/editorial-updates');
const updates = require('../src/data/editorial-updates');
const {
  breadcrumbsFor,
  categories,
  index,
} = require("../src/data/blog-categories");

// Render actual components without loading Gatsby's browser runtime.
const cache = new Map();
function load(relative) {
  const filename = path.resolve(__dirname, "..", relative);
  if (cache.has(filename)) return cache.get(filename);
  const mod = new Module(filename, module);
  mod.filename = filename;
  mod.paths = Module._nodeModulePaths(path.dirname(filename));
  const nativeRequire = mod.require.bind(mod);
  mod.require = (name) => {
    if (name === "gatsby")
      return {
        Link: ({ to, children, ...props }) =>
          React.createElement("a", { ...props, href: to }, children),
        graphql: () => "",
        useStaticQuery: () => ({
          site: { siteMetadata: { title: "Punta Cana Tour Store" } },
        }),
      };
    if (name === "gatsby-plugin-image")
      return { getImage: (x) => x, GatsbyImage: () => null };
    if (name.includes("react-syntax-highlighter"))
      return { __esModule: true, default: () => null, monokai: {} };
    if (name.startsWith(".")) {
      let resolved = require.resolve(
        path.resolve(path.dirname(filename), name),
      );
      if (resolved.includes(path.sep + "src" + path.sep))
        return load(path.relative(path.resolve(__dirname, ".."), resolved));
    }
    return nativeRequire(name);
  };
  const result = transformSync(fs.readFileSync(filename, "utf8"), {
    filename,
    configFile: false,
    babelrc: false,
    presets: ["@babel/preset-react"],
    plugins: ["@babel/plugin-transform-modules-commonjs"],
  });
  mod._compile(result.code, filename);
  cache.set(filename, mod.exports);
  return mod.exports;
}
const block = (type, value) => ({
  nodeType: type,
  data: {},
  content: [{ nodeType: "text", value, marks: [], data: {} }],
});
const post = {
  id: "one",
  slug: "Saona%20Island",
  title: "Saona Island",
  category: "Tours",
  description: "Travel advice",
  publishedDate: "2025-02-27T04:00:00Z",
  backgroundImage: [],
};

test('reviewed content preserves historical URLs, publication dates and media while updating every visible field', () => {
  const asset={nodeType:'embedded-asset-block',data:{target:{sys:{id:'original-photo'}}},content:[]};
  const old={...post,slug:'punta-cana-seaweed-season',body:{raw:JSON.stringify({nodeType:'document',content:[asset]}),references:[{contentful_id:'original-photo'}]}};
  const rewritten=applyEditorialUpdate(old);
  assert.equal(rewritten.slug,old.slug);
  assert.equal(rewritten.publishedDate,old.publishedDate);
  assert.equal(rewritten.backgroundImage,old.backgroundImage);
  assert.deepEqual(rewritten.body.references,old.body.references);
  assert.ok(JSON.parse(rewritten.body.raw).content.some(n=>n.nodeType==='embedded-asset-block'));
  assert.equal(JSON.parse(old.body.raw).content.length,1);
  assert.equal(e.articleSchema(rewritten,breadcrumbsFor(rewritten))['@graph'][0].dateModified,'2026-09-18T00:00:00.000Z');
  const Header=load('src/components/BlogComponents/ArticleHeader.js').default;
  const Card=load('src/components/BlogComponents/RecommendationCard.js').default;
  assert.match(renderToStaticMarkup(React.createElement(Header,{post:rewritten})),/Last verified/);
  assert.ok(renderToStaticMarkup(React.createElement(Card,{blog:old})).includes(rewritten.title));
});
test('all four existing-page rewrites render one H1 and visible primary-source links', () => {
  const Header=load('src/components/BlogComponents/ArticleHeader.js').default;
  const Body=load('src/components/BlogComponents/BlogBody.js').default;
  for(const slug of Object.keys(updates)) {
    const updated=applyEditorialUpdate({...post,slug});
    const html=renderToStaticMarkup(React.createElement(React.Fragment,null,React.createElement(Header,{post:updated}),React.createElement(Body,{title:updated.title,context:updated.body})));
    assert.equal((html.match(/<h1\b/g)||[]).length,1);
    assert.match(html,/Sources \/ Official Sources/);
    assert.match(html,/href="https:\/\//);
    assert.doesNotMatch(html,/href="(?:undefined|#)"/);
  }
  const eticket=applyEditorialUpdate({...post,slug:'dominicanrepubliceticket'});
  assert.equal(linking.serviceLinks(eticket)[0].href,'/transfers/punta-cana/');
});

test('reviewed recommendations only resolve existing targets and exclude missing/self/duplicate routes', () => {
  const current={...post,relatedSlugs:['missing',post.slug,'target','target']};
  const target={...post,id:'target-id',slug:'target',title:'Relevant guide'};
  assert.deepEqual(linking.relatedGuides([post,target],current),[target]);
});

test('topical links cross categories, rank destination first, and remain stable without duplicates', () => {
  const current = {...post, title:'Saona Island photography spots'};
  const candidates = [
    {...post,id:'photo',slug:'photo',category:'Local Business',title:'What to wear for vacation photos'},
    {...post,id:'saona',slug:'saona-guide',category:'Famous Places',title:'Saona Island travel tips'},
    {...post,id:'unrelated',slug:'cars',title:'Car rental tips'},
    {...post,id:'commercial',slug:'packages',title:'Saona Island proposal packages'},
  ];
  assert.deepEqual(linking.relatedGuides(candidates,current).map(p=>p.id),['saona','photo']);
  assert.deepEqual(linking.relatedGuides([...candidates].reverse(),current),linking.relatedGuides(candidates,current));
  assert.equal(linking.relatedGuides([...candidates,candidates[0]],current).length,2);
  assert.equal(linking.relatedGuides([current],current).length,0);
});
test('service links respect specialist ownership, explicit CMS references and empty references', () => {
  assert.equal(linking.serviceLinks({...post,title:'Where to propose in Punta Cana'}).at(-1).href,'https://sertuinevents.com/proposal/');
  assert.equal(linking.serviceLinks({...post,title:'What to wear for vacation photos'}).at(-1).href,'https://puntacanaphotoedition.com/photoshoots');
  assert.equal(linking.serviceLinks({...post,title:'Corporate conference planning'}).at(-1).href,'https://puntacanavenuecollection.com/');
  const links=linking.serviceLinks({...post,reference:{url:' saona/ ',name:'Saona excursion'}});
  assert.equal(links[0].href,'/tours/saona/');
  assert.ok(links.every(link=>link.href&&!link.href.includes('undefined')));
  assert.equal(linking.serviceLinks({...post,title:'Airport arrival guide',category:'Flights',reference:{}})[0].href,'/transfers/punta-cana/');
});
test('interlinking renders crawlable links within and after the article without changing authored text', () => {
  const Body=load('src/components/BlogComponents/BlogBody.js').default;
  const Links=load('src/components/BlogComponents/EditorialLinks.js').default;
  const guides=[{...post,id:'two',slug:'saona-guide',title:'Saona travel tips'}];
  const html=renderToStaticMarkup(React.createElement(React.Fragment,null,
    React.createElement(Body,{title:post.title,context:{raw:JSON.stringify({nodeType:'document',data:{},content:[block('paragraph','Original introduction'),block('heading-2','What to pack')]})},relatedGuides:guides}),
    React.createElement(Links,{post,guides:[]})));
  assert.match(html,/href="\/blog\/saona-guide\/"/);
  assert.ok(html.indexOf('Original introduction')<html.indexOf('Related reading'));
  assert.ok(html.indexOf('Related reading')<html.indexOf('What to pack'));
  assert.match(html,/href="\/tours\/"/);
  assert.match(html,/href="\/blog\/tours\/"/);
});

test("one visible H1, no empty headings, preserved paragraphs and no skipped heading levels", () => {
  const body = {
    nodeType: "document",
    data: {},
    content: [
      block("heading-1", post.title),
      block("paragraph", "Introduction"),
      block("heading-3", "Planning"),
      block("heading-6", "Details"),
      block("heading-1", "Another topic"),
      block("heading-1", ""),
    ],
  };
  const original = JSON.stringify(body);
  const Header = load("src/components/BlogComponents/ArticleHeader.js").default;
  const Body = load("src/components/BlogComponents/BlogBody.js").default;
  const html = renderToStaticMarkup(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Header, { post }),
      React.createElement(Body, {
        title: post.title,
        context: { raw: JSON.stringify(body), references: [] },
      }),
    ),
  );
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(html, /<h[1-6][^>]*>\s*<\/h[1-6]>/);
  assert.match(html, /<p[^>]*>Introduction<\/p>/);
  assert.match(html, /<h2[^>]*>Planning<\/h2>/);
  assert.match(html, /<h3[^>]*>Details<\/h3>/);
  assert.doesNotMatch(html, /opacity:0/);
  assert.equal(JSON.stringify(body), original);
  assert.match(html, /aria-label="Breadcrumb"/);
});
test("body with no CMS H1 still has exactly one title; missing assets do not crash", () => {
  const Body = load("src/components/BlogComponents/BlogBody.js").default;
  const html = renderToStaticMarkup(
    React.createElement(Body, {
      title: post.title,
      context: {
        raw: JSON.stringify({
          nodeType: "document",
          data: {},
          content: [
            block("paragraph", "Useful answer"),
            {
              nodeType: "embedded-asset-block",
              data: { target: { sys: { id: "missing" } } },
              content: [],
            },
          ],
        }),
        references: [],
      },
    }),
  );
  assert.match(html, /Useful answer/);
  assert.doesNotMatch(html, /<h1/);
});
test("URLs preserve historical case and encoding and remove the CMS control-character defect", () => {
  assert.equal(e.blogPath(" Saona%20Island "), "/blog/Saona%20Island/");
  assert.equal(
    e.blogPath("17.\tSaona Island photography spots"),
    "/blog/17.Saona Island photography spots/",
  );
  assert.equal(
    e.canonicalUrl(e.blogPath("17.\tSaona Island photography spots")),
    "https://puntacanatourstore.com/blog/17.Saona%20Island%20photography%20spots/",
  );
  assert.equal(
    e.canonicalUrl("/blog/Foo/?a=b#x"),
    "https://puntacanatourstore.com/blog/Foo/",
  );
});
test("sitemap excludes operational and placeholder URLs, retains products and editorial", () => {
  for (const p of [
    "/travelagent/",
    "/travelagent/tours/saona/",
    "/cart/",
    "/payment/thankyou/",
    "/invoice/tour/",
    "/contact/thankyou/",
    "/x/[id]/",
    "/x/%5Bid%5D/",
    "/404/",
    "/404.html",
    "/verification.txt",
  ])
    assert.equal(e.isIndexablePath(p), false, p);
  for (const p of [
    "/",
    "/blog/",
    "/blog/Saona-Island/",
    "/tours/saona/",
    "/carrental/",
    "/transfers/punta-cana/",
  ])
    assert.equal(e.isIndexablePath(p), true, p);
});
test("recommendations exclude self, duplicates and other categories, with a maximum of six", () => {
  const list = [
    post,
    { ...post, id: "duplicate" },
    ...Array.from({ length: 9 }, (_, i) => ({
      ...post,
      id: String(i),
      slug: "guide-" + i,
    })),
    { ...post, id: "hotel", slug: "hotel", category: "Hotel" },
  ];
  const result = e.relatedPosts(list, post);
  assert.equal(result.length, 6);
  assert.ok(
    result.every(
      (p) =>
        p.id !== post.id &&
        p.slug !== post.slug &&
        p.category === post.category,
    ),
  );
});
test("schema agrees with visible breadcrumbs and publication date; does not invent authors or freshness", () => {
  const breadcrumbs = breadcrumbsFor(post),
    graph = e.articleSchema(post, breadcrumbs)["@graph"];
  assert.equal(graph[0].datePublished, "2025-02-27T04:00:00.000Z");
  assert.equal(graph[0].dateModified, undefined);
  assert.equal(graph[0].author, undefined);
  assert.equal(graph[1].itemListElement.length, breadcrumbs.length);
  assert.equal(graph[1].itemListElement.at(-1).item, graph[0].mainEntityOfPage);
  assert.equal(
    e.articleSchema({ ...post, publishedDate: null }, breadcrumbs)["@graph"][0]
      .datePublished,
    undefined,
  );
});
test("JSON-LD is parseable and escapes script closing sequences; social metadata uses article title", () => {
  const Seo = load("src/components/seo.js").default;
  const graph = e.articleSchema(
    { ...post, title: "Example </script><script>alert(1)</script>" },
    breadcrumbsFor(post),
  );
  const html = renderToStaticMarkup(
    React.createElement(Seo, {
      title: post.title,
      type: "article",
      schemaMarkup: graph,
    }),
  );
  const json = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  )[1];
  assert.deepEqual(JSON.parse(json), graph);
  assert.doesNotMatch(json, /<\/script>/);
  assert.match(html, /property="og:title" content="Saona Island"/);
  assert.match(html, /property="og:type" content="article"/);
});
test("category titles and descriptions are unique", () => {
  const all = [index, ...Object.values(categories)];
  assert.equal(new Set(all.map((x) => x.title)).size, 11);
  assert.equal(new Set(all.map((x) => x.description)).size, 11);
});
test("SSR marks only operational pages noindex", () => {
  const { onRenderBody } = require("../gatsby-ssr");
  for (const pathname of [
    "/travelagent/",
    "/payment/thankyou/",
    "/blog/",
    "/transfers/",
  ]) {
    const nodes = [];
    onRenderBody({
      pathname,
      setHtmlAttributes: () => {},
      setHeadComponents: (n) => nodes.push(...n),
    });
    assert.equal(nodes.length, e.isPrivatePath(pathname) ? 1 : 0);
    if (nodes.length) assert.equal(nodes[0].props.content, "noindex, follow");
  }
});

test("Gatsby page generation rejects collisions and only embeds relevant recommendations", async () => {
  const { createPages } = require("../gatsby-node");
  const fixture = (posts) => ({ data: {
    allContentfulTours: { nodes: [] }, allContentfulHotelsOrHostel: { nodes: [] },
    allContentfulProperty: { nodes: [] }, allContentfulBlogPost: { nodes: posts },
    allContentfulLayout: { edges: [{ node: {} }] },
  } });
  const pages = [];
  await createPages({ graphql: async () => fixture([post, { ...post, id: "two", slug: "second" }]),
    actions: { createPage: page => pages.push(page) } });
  assert.equal(pages[0].path, "/blog/Saona%20Island/");
  assert.equal(pages[0].context.blogList.length, 1);
  assert.equal(pages[0].context.blogList[0].id, "two");
  await assert.rejects(createPages({ graphql: async () => fixture([post, { ...post, id: "two" }]),
    actions: { createPage: () => {} } }), /Duplicate blog route/);
  await assert.rejects(createPages({ graphql: async () => ({ errors: [{ message: "Missing CMS" }] }),
    actions: { createPage: () => {} } }), /Contentful page query failed/);
});
