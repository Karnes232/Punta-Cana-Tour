const { blogPath, canonicalUrl } = require('./editorial');
const { categoryFor } = require('../data/blog-categories');

// Match editorial intent in titles/tags, not incidental mentions in boilerplate.
const topics = [
  ['saona', /\bsaona\b/],
  ['catalina', /\bcatalina\b/],
  ['samana', /\bsamana\b|\bwhale\b|\blimon\b/],
  ['adventure', /\bbugg(?:y|ies)\b|\batv\b|\bzipline\b|\bzip line\b/],
  ['beaches', /\bbeach(?:es)?\b|\bsargassum\b|\bsnorkel(?:ing)?\b/],
  ['arrival', /\bairport\b|\btransfer(?:s)?\b|\bflight(?:s)?\b|\be ticket\b|\bentry requirements\b/],
  ['driving', /\bcar rental\b|\brent(?:ing)? a car\b|\bdriv(?:e|ing)\b|\broad trip\b/],
  ['hotels', /\bhotel(?:s)?\b|\bresort(?:s)?\b|\bwhere to stay\b/],
  ['proposal', /\bmarriage proposal(?:s)?\b|\bpropos(?:e|ing)\b|\bproposal packages?\b/],
  ['wedding', /\bwedding(?:s)?\b|\belopement\b|\bvow renewal\b/],
  ['photography', /\bphoto(?:s|graphy|grapher|shoots?)?\b|\bphotoshoots?\b/],
  ['corporate', /\bcorporate\b|\bconference(?:s)?\b|\bconvention(?:s)?\b|\bincentive travel\b/],
];
function topicIds(post) {
  const text = [post.title, ...(Array.isArray(post.tags) ? post.tags : [])]
    .join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[-_]/g, ' ');
  return topics.filter(([, pattern]) => pattern.test(text)).map(([id]) => id);
}
const routeKey = post => canonicalUrl(blogPath(post.slug));
function tieRank(current, candidate) {
  // Stable per-source tie-breaking distributes equal-relevance links across the cluster.
  let hash = 2166136261;
  for (const character of `${routeKey(current)}|${routeKey(candidate)}`) {
    hash = Math.imul(hash ^ character.charCodeAt(0), 16777619) >>> 0;
  }
  return hash;
}
function isCommercialOverlap(post) {
  return /\bproposal packages?\b|\bwedding planner\b|\b(?:wedding|family|couples|vacation|punta cana) photographer\b/i.test(post.title || '');
}
function relatedGuides(posts, current, limit = 6) {
  const own = topicIds(current), seen = new Set([routeKey(current)]);
  if (Array.isArray(current.relatedSlugs)) {
    return current.relatedSlugs.map(slug => posts.find(post => routeKey(post) === routeKey({slug})))
      .filter(post => {
        if (!post?.title || seen.has(routeKey(post))) return false;
        seen.add(routeKey(post)); return true;
      }).slice(0, limit);
  }
  return posts.map(post => {
    const shared = topicIds(post).filter(id => own.includes(id));
    const score = shared.reduce((total, id) => total + (['saona','catalina','samana'].includes(id) ? 10 : 4), 0);
    return { post, score: score || (!own.length && post.category === current.category ? 1 : 0) };
  }).filter(({post, score}) => score > 0 && post.slug && post.title && post.id !== current.id && !isCommercialOverlap(post))
    .sort((a,b) => b.score-a.score || tieRank(current,a.post)-tieRank(current,b.post) || routeKey(a.post).localeCompare(routeKey(b.post), 'en'))
    .filter(({post}) => {const key=routeKey(post); if(seen.has(key)) return false; seen.add(key); return true;})
    .slice(0, limit).map(({post}) => post);
}
function serviceLinks(post) {
  const ids = topicIds(post), links = [];
  const add = (href, label, description) => {
    if (!links.some(link => link.href === href)) links.push({href,label,description});
  };
  const ref = post.reference;
  // CMS references are the editor's explicit choice and take priority.
  if (ref?.url?.trim()) add(`/tours/${ref.url.trim().replace(/^\/+|\/+$/g,'')}/`, ref.name || 'View this excursion', 'Explore the excursion referenced in this guide.');
  if (ref?.urlSlug?.trim() && ['Hotel','Property'].includes(post.category)) add(`/${post.category==='Hotel'?'hotels':'properties'}/${ref.urlSlug.trim().replace(/^\/+|\/+$/g,'')}/`,ref.title || 'View accommodation','Explore the accommodation referenced in this guide.');
  if (ids.includes('arrival') || ['Transfer','Flights','Hotel'].includes(post.category)) add('/transfers/punta-cana/','Punta Cana airport transfers','Plan transportation between the airport and your accommodation.');
  if (ids.includes('driving') || post.category==='Car Rental') add('/carrental/','Car rental in Punta Cana','Explore rental options for independent travel.');
  if (['saona','catalina','samana','adventure','beaches'].some(id=>ids.includes(id)) || ['Tours','Attractions'].includes(post.category)) add('/tours/','Explore Punta Cana excursions','Compare activities for your trip.');
  const internal = links.slice(0,2);
  // A single specialist destination avoids blanket cross-site linking.
  if (ids.includes('corporate')) internal.push({href:'https://puntacanavenuecollection.com/',label:'Corporate event services — Punta Cana Venue Collection',description:'Discuss business events and destination operations with the specialist team.'});
  else if (ids.includes('proposal')) internal.push({href:'https://sertuinevents.com/proposal/',label:'Proposal planning — Sertuin Events',description:'Explore planning services for a marriage proposal.'});
  else if (ids.includes('wedding')) internal.push({href:'https://sertuinevents.com/puntacana-wedding-planner/',label:'Wedding planning — Sertuin Events',description:'Explore professional wedding planning and coordination.'});
  else if (ids.includes('photography')) internal.push({href:'https://puntacanaphotoedition.com/photoshoots',label:'Vacation photoshoots — Punta Cana Photo Edition',description:'Explore professional photography sessions for your vacation.'});
  return internal;
}
function guideHub(post) {
  const category = categoryFor(post.category);
  return {href:blogPath(category.slug),label:category.title};
}
module.exports = {topicIds,relatedGuides,serviceLinks,guideHub,isCommercialOverlap};
