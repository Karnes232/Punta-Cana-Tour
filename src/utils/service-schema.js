const { canonicalUrl } = require('./editorial');
const { home } = require('../data/travel-services');

function absoluteImage(src) {
  if (!src) return undefined;
  try { const url = new URL(src, canonicalUrl('/')); return /^https?:$/.test(url.protocol) ? url.href : undefined; } catch { return undefined; }
}

function homeSchema(layout = {}) {
  const url = canonicalUrl('/');
  return { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': url + '#organization', name: 'Punta Cana Tour Store', url,
      ...(layout.email && { email: layout.email }),
      ...(layout.logo?.url && { logo: absoluteImage(layout.logo.url) }),
      sameAs: [layout.facebook, layout.instagram].filter(value => /^https?:\/\//.test(value || '')) },
    { '@type': 'WebSite', '@id': url + '#website', url, name: 'Punta Cana Tour Store', inLanguage: 'en', publisher: { '@id': url + '#organization' } },
    { '@type': 'WebPage', '@id': url + '#webpage', url, name: home.title, description: home.description, inLanguage: 'en', isPartOf: { '@id': url + '#website' } },
  ] };
}

function tourSchema(tour) {
  const url = canonicalUrl('/tours/' + (tour.url || '').trim());
  const price = Number(tour.price);
  return { '@context': 'https://schema.org', '@type': 'Product', name: tour.name, url,
    description: tour.description1?.description1,
    image: absoluteImage(tour.mainImage?.url || tour.mainImage?.gatsbyImage?.images?.fallback?.src),
    ...(Number.isFinite(price) && price > 0 && { offers: { '@type': 'Offer', url, priceCurrency: 'USD', price } }),
  };
}

module.exports = { absoluteImage, homeSchema, tourSchema };
