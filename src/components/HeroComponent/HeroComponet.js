import React from "react";
import BackgroundImage from "react-background-image";
import { Link } from "gatsby";
const HeroComponet = ({ image }) => {
  return (
    <>
      <div className="absolute top-0 w-full h-[50vh] lg:h-[80vh] xl:h-screen">
        {image && (
          <BackgroundImage
            placeholder={image}
            src={image}
            className="myCustomClass"
          >
            <h1 className="relative inline-block text-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-yellowtail tracking-widest text-4xl md:text-6xl">
              ThrillQuest
            </h1>
            <br />
            <h2 className="relative inline-block text-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-yellowtail tracking-wider text-3xl md:text-5xl">
              Punta Cana
            </h2>
            <br />
            <button className="relative inline-block z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 md:w-28 lg:w-32 text-sm bg-white opacity-75 hover:opacity-100 text-black py-2 px-2 md:px-3 rounded-md mt-5 md:mt-12 tracking-wider font-lato font-bold">
              <Link to="#featured-Tours">Explore!</Link>
            </button>
          </BackgroundImage>
        )}
      </div>
      <div className="h-[40vh] md:h-[35vh] lg:h-[60vh] xl:h-[90vh] 2xl:h-[85vh]"></div>
    </>
  );
};

export default HeroComponet;
