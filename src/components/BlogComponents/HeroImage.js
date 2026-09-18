import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PhotoGrid from "../TourPageComponents/PhotoGrid";
const HeroImage = ({ backgroundImages = [] }) => {
  const images = (backgroundImages || [])
    .map((item) => ({ item, image: getImage(item?.gatsbyImage) }))
    .filter(({ image }) => image);
  if (!images.length) return null;
  return (
    <>
      <div className="md:hidden">
        <GatsbyImage image={images[0].image} alt={images[0].item.title || ''} loading="eager" className="w-full h-[50vh]" objectFit="cover" />
      </div>
      <div className="hidden md:flex max-w-6xl w-full mx-auto">
        <PhotoGrid tourPhotos={images.map(({item})=>item)} stable />
      </div>
      {images.filter(({item})=>item.caption).map(({item})=><p key={item.id} className="max-w-6xl mx-5 xl:mx-auto mt-2 text-sm text-gray-700">{item.caption}</p>)}
    </>
  );
};
export default HeroImage;
