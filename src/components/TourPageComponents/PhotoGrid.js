import React from "react";
import PhotoAlbum from "react-photo-album";
const PhotoGrid = ({ tourPhotos }) => {
  let photoList = [];
  tourPhotos.forEach((image, key) => {
    const photoObject = {
      src: image.url,
      width: image.gatsbyImage.width,
      height: image.gatsbyImage.height,
    };
    photoList.push(photoObject);
  });
  photoList = photoList.sort(() => Math.random() - 0.5);
  return (
    <div className="min-w-[100vw]">
      <PhotoAlbum
        layout="columns"
        photos={photoList.slice(0, 6)}
        containerWidth={1920}
        padding={0}
        spacing={0}
      />
    </div>
  );
};

export default PhotoGrid;
