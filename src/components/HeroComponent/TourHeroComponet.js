import React from "react";
import BackgroundImage from "react-background-image";
import { Link } from "gatsby";
const TourHeroComponent = ({ image, heroText, heroText2 }) => {

  return (
    <>
      <div className="absolute top-0 w-full h-[50vh] lg:h-[80vh] xl:h-screen">
        {image && (
          <BackgroundImage
            placeholder={image}
            src={image}
            className="myCustomClass"
          >
            
          </BackgroundImage>
        )}
      </div>
      <div className="h-[40vh] md:h-[35vh] lg:h-[60vh] xl:h-[90vh] 2xl:h-[85vh]"></div>
    </>
  );
};

export default TourHeroComponent;