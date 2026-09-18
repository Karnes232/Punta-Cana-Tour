import React from "react";
import PhotoAlbum from "react-photo-album";
const PhotoGrid = ({ tourPhotos, stable = false }) => {
  let photoList = [];
  (tourPhotos || []).filter(image => image?.gatsbyImage?.width && image?.gatsbyImage?.height).forEach((image) => {
    const fallback = image.gatsbyImage.images?.fallback;
    const ratio = image.gatsbyImage.height / image.gatsbyImage.width;
    const srcSet = [...(fallback?.srcSet || '').matchAll(/(.+?)\s+(\d+)w(?:,\s*|$)/g)]
      .map(([,src,width])=>({src:src.trim(),width:Number(width),height:Math.round(Number(width)*ratio)}));
    const photoObject = {
      src: fallback?.src || image.url,
      width: image.gatsbyImage.width,
      height: image.gatsbyImage.height,
      alt: image.title,
      ...(srcSet.length ? {srcSet} : {}),
    };
    photoList.push(photoObject);
  });
  if (!stable) photoList = photoList.sort(() => Math.random() - 0.5);
  return (
    <div className={stable ? "max-w-6xl w-full" : "max-w-6xl min-w-[1080px] w-max"}>
      <PhotoAlbum
        layout="columns"
        photos={stable ? photoList : photoList.slice(0, 6)}
        containerWidth={1152}
        columns={3}
        padding={0}
        spacing={2}
      />
    </div>
  );
};

export default PhotoGrid;
