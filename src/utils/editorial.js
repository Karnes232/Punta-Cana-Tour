const SITE_URL = "https://puntacanatourstore.com";

// Preserve historical spelling, case and encoding: this is not a slug migration.
function blogPath(slug) {
  const value = String(slug || "")
    .replace(/[\t\r\n]/g, "")
    .trim()
    .replace(/^\/+|\/+$/g, "");
  return `/blog/${value ? `${value}/` : ""}`;
}
function canonicalUrl(path) {
  const url = new URL(path, SITE_URL);
  url.search = "";
  url.hash = "";
  if (!url.pathname.endsWith("/")) url.pathname += "/";
  return url.href;
}
function isPrivatePath(path) {
  return (
    /^\/(travelagent|cart|payment|invoice)(\/|$)/i.test(path) ||
    /^\/contact\/thankyou\/?$/i.test(path)
  );
}
function isIndexablePath(path) {
  return (
    !isPrivatePath(path) &&
    !/\[|\]|%5b|%5d/i.test(path) &&
    !/^\/(404|404.html|dev-404-page|offline-plugin-app-shell-fallback)(\/|$)/.test(
      path,
    ) &&
    !/\.[a-z0-9]+\/?$/i.test(path)
  );
}
function nodeText(node) {
  return node?.nodeType === "text"
    ? node.value
    : (node?.content || []).map(nodeText).join("");
}
function normalizeBody(document, title) {
  const sameTitle = (text) =>
    text.trim().replace(/\s+/g, " ").toLowerCase() ===
    String(title || "")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase();
  let firstTextBlock = true;
  let lastHeading = 1;
  return {
    ...document,
    content: (document.content || []).flatMap((node) => {
      const heading = /^heading-([1-6])$/.exec(node.nodeType);
      if (!heading) {
        if (nodeText(node).trim()) firstTextBlock = false;
        return [node];
      }
      const text = nodeText(node);
      if (!text.trim()) return [];
      if (firstTextBlock && sameTitle(text)) {
        firstTextBlock = false;
        return [];
      }
      firstTextBlock = false;
      const level = Math.min(Math.max(2, Number(heading[1])), lastHeading + 1);
      lastHeading = level;
      return [{ ...node, nodeType: `heading-${level}` }];
    }),
  };
}
function relatedPosts(posts, current, limit = 6) {
  const seen = new Set([blogPath(current.slug)]);
  return posts
    .filter((post) => {
      const path = blogPath(post.slug);
      if (
        !post.slug ||
        post.id === current.id ||
        post.category !== current.category ||
        seen.has(path)
      )
        return false;
      seen.add(path);
      return true;
    })
    .slice(0, limit);
}
function publicationDate(value) {
  if (!value || Number.isNaN(Date.parse(value))) return null;
  return new Date(value).toISOString();
}
function articleSchema(post, breadcrumbs) {
  const url = canonicalUrl(blogPath(post.slug));
  const date = publicationDate(post.publishedDate);
  const images = (post.backgroundImage || [])
    .map((image) => image.url)
    .filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        headline: post.title,
        description: post.description,
        ...(images.length ? { image: images } : {}),
        ...(date ? { datePublished: date } : {}),
        ...(publicationDate(post.updatedDate) ? { dateModified: publicationDate(post.updatedDate) } : {}),
        publisher: {
          "@type": "Organization",
          name: "Punta Cana Tour Store",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: canonicalUrl(item.path),
        })),
      },
    ],
  };
}
module.exports = {
  SITE_URL,
  blogPath,
  canonicalUrl,
  isPrivatePath,
  isIndexablePath,
  nodeText,
  normalizeBody,
  relatedPosts,
  publicationDate,
  articleSchema,
};
