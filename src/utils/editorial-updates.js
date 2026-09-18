const updates = require('../data/editorial-updates');
function text(value) { return {nodeType:'text',value,marks:[],data:{}}; }
function toDocument(blocks) {
  return {nodeType:'document',data:{},content:blocks.map(block=>({
    nodeType:block.type,data:{},content:block.content.map(part=>typeof part==='string' ? text(part) : {
      nodeType:'hyperlink',data:{uri:part.href},content:[text(part.text)],
    }),
  }))};
}
function applyEditorialUpdate(post, includeBody = true) {
  const key = String(post.slug || '').replace(/^\/+|\/+$/g,'');
  const update = updates[key];
  if (!update) return post;
  const {blocks,...metadata} = update;
  const result = {...post,...metadata};
  if (includeBody) {
    const document=toDocument(blocks);
    // Preserve existing embedded media as well as the untouched hero gallery.
    const media=[];
    const visit=node=>{if(node.nodeType==='embedded-asset-block')media.push(node);else (node.content||[]).forEach(visit);};
    if(post.body?.raw) visit(JSON.parse(post.body.raw));
    if(media.length) document.content.splice(document.content.findIndex(n=>n.nodeType==='heading-2' && n.content[0]?.value==='Sources / Official Sources'),0,...media);
    result.body={...post.body,raw:JSON.stringify(document)};
  }
  return result;
}
module.exports={applyEditorialUpdate,toDocument};
