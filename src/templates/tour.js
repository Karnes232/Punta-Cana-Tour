import React from "react";
import Layout from "../components/layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import Button from "../components/TourPageComponents/Button";
const tour = ({ pageContext }) => {
  const { tour, logo, footerBackground, facebook, instagram, email, gImage } =
    pageContext;
  console.log(tour);
  return (
    <Layout
      logo={logo}
      footerBackground={footerBackground}
      facebook={facebook}
      instagram={instagram}
      email={email}
      gImage={gImage}
    >
      <HeroComponent
        imageUrl={tour.mainImage?.url}
        gImage={tour.mainImage?.gatsbyImage}
        heroText=""
        heroText2=""
        button={false}
      />
      <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
        <div className="max-w-6xl my-2 xl:mx-auto">
          <h4 className="font-light text-3xl md:text-4xl tracking-wide mb-2">
            {tour.name}
          </h4>
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="font-extralight my-4 text-base md:text-lg tracking-wide flex items-end flex-wrap">
            {tour.category.map((category, index) => (
              <span
                className="flex justify-center items-center h-7 min-w-fit bg-gray-200 rounded-full px-3 py-1 text-xs font-extralight text-gray-700 mr-2 mb-2"
                key={index}
              >
                {category}
              </span>
            ))}
            </p>
            <Button text="Book Now" customClass="" />
          </div>
          <div className="flex items-center">
          <h4 className="font-light text-2xl md:text-3xl tracking-wider">
            From:  
          </h4>
          <p className="inline-block pl-3 md:pl-6 font-light text-2xl text-blue-500 md:text-2xl space-x-2 md:space-x-4">
            ${tour.price}
          </p>
        </div>
        </div>
        <div className="min-h-screen"></div>
      </div>
    
    </Layout>
  );
};

export default tour;

export const Head = ({ pageContext }) => (
  <title>{pageContext.tour.name} Page</title>
);
