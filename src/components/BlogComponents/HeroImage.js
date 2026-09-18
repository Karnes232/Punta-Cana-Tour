import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const HeroImage = ({ backgroundImages = [] }) => {
  const images = (backgroundImages || [])
    .map((item) => ({ item, image: getImage(item?.gatsbyImage) }))
    .filter(({ image }) => image);
  if (!images.length) return null;
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {images.map(({ item, image }, index) => (
          <GatsbyImage
            key={item.id || index}
            image={image}
            alt={item.title || ""}
            loading={index === 0 ? "eager" : "lazy"}
            className={`w-full max-h-[60vh] ${index === 0 ? "md:col-span-2" : ""}`}
            objectFit="cover"
          />
        ))}
      </div>
    </div>
  );
};
export default HeroImage;
