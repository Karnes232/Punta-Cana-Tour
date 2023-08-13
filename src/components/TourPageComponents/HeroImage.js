import React from "react";
import BackgroundImage from "react-background-image";

const HeroImage = ({ image }) => {
  return (
    <>
      <div className="absolute top-0 w-full h-[50vh] lg:h-[80vh] xl:h-screen">
        <BackgroundImage
          placeholder={image}
          src={image}
          className="myCustomClass"
        ></BackgroundImage>
      </div>
      <div className="h-[40vh] md:h-[35vh] lg:h-[60vh] xl:h-[80vh]"></div>
    </>
  );
};

export default HeroImage;
