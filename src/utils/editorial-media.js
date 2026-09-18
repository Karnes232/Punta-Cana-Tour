const assets = require('../data/editorial-media.json');
function withEditorialMedia(post) {
  const slug=String(post.slug||'').toLowerCase();
  const group=slug.includes('saona') ? 'saona' : slug.includes('party-boat') ? 'party' : null;
  if(!group)return post;
  const selected=assets.filter(asset=>asset.group===group);
  const existing=post.backgroundImage||[];
  return {...post,backgroundImage:[...selected,...existing.filter(image=>!selected.some(asset=>asset.url===image.url))]};
}
module.exports={withEditorialMedia};
