import React from "react";
import HeroComponent from "./HeroComponent";
import PhotoGrid from "../TourPageComponents/PhotoGrid";

const HeroImage = ({ backgroundImages }) => {
  return (
    <>
      <div className="md:hidden">
        <HeroComponent gImage={backgroundImages[0].gatsbyImage} />
      </div>
      <div className="hidden md:flex max-w-6xl mx-auto">
        <PhotoGrid tourPhotos={backgroundImages} />
      </div>
    </>
  );
};

export default HeroImage;
