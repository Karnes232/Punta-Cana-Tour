import React from "react";
import useWindowWidth from "../../customHooks/useWindowWidth";
import { Link } from "gatsby";
const HeroComponent = ({ imageUrl, gImage, heroText, heroText2, button }) => {
  const windowWidth = useWindowWidth();
  let image = gImage.images.fallback.srcSet.split(",");
  const imageSrc = [];

  image.forEach((element) => {
    const image = element.split(" ");
    const imageObject = { imageSrc: image[0], imageWidth: image[1] };
    imageSrc.push(imageObject);
  });
  let HeroStyles = {};
  if (windowWidth < 1500) {
    HeroStyles = {
      backgroundImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.53), rgba(245, 246, 252, 0.52)), url(" +
        imageSrc[1].imageSrc +
        ")",
    };
  } else {
    HeroStyles = {
      backgroundImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.53), rgba(245, 246, 252, 0.52)), url(" +
        imageSrc[2].imageSrc +
        ")",
    };
  }
  return (
    <>
      <div className="absolute top-0 w-full h-[50vh] lg:h-[80vh] xl:h-screen">
        <div
          className={`h-full bg-center bg-no-repeat bg-cover`}
          style={HeroStyles}
        >
          <h1 className="relative inline-block text-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-yellowtail tracking-widest text-4xl md:text-6xl">
            {heroText}
          </h1>
          <br />
          <h2 className="relative inline-block text-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-yellowtail tracking-wider text-3xl md:text-5xl">
            {heroText2}
          </h2>
          <br />
          {button && (
            <button className="relative inline-block z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 md:w-28 lg:w-32 text-sm bg-white opacity-75 hover:opacity-100 text-black py-2 px-2 md:px-3 rounded-md mt-5 md:mt-12 tracking-wider font-lato font-bold">
              <Link to="#featured-Tours">Explore!</Link>
            </button>
          )}
        </div>
      </div>
      <div className="h-[40vh] md:h-[35vh] lg:h-[60vh] xl:h-[80vh]"></div>
    </>
  );
};

export default HeroComponent;
