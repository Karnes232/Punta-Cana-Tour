const slugs = require('../data/retired-proposal-blogs.json');
const destination = 'https://sertuinevents.com/proposal/';
const retired = new Set(slugs);
function isRetiredProposalBlog(slug) {
  return retired.has(String(slug || '').replace(/[\t\r\n]/g, '').trim().replace(/^\/+|\/+$/g, ''));
}
function proposalRedirectFor(href) {
  try {
    const url = new URL(href, 'https://puntacanatourstore.com');
    if (!['puntacanatourstore.com', 'www.puntacanatourstore.com'].includes(url.hostname)) return null;
    if (!url.pathname.startsWith('/blog/')) return null;
    return isRetiredProposalBlog(url.pathname.slice('/blog/'.length)) ? destination : null;
  } catch {
    return null;
  }
}
module.exports = { slugs, destination, isRetiredProposalBlog, proposalRedirectFor };
