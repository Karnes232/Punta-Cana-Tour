import React from "react";
import TourCard from "../TourCardComponent/TourCard";

import CtaButton from "../CtaButton/CtaButton";

const FeaturedTours = ({ tours, link }) => {
  let tourList = tours.splice(0, 6).sort(() => Math.random() - 0.5);
  return (
    <div className="bg-slate-100 py-10" id="featured-Tours">
      <h2 className="font-lato tracking-wider text-3xl font-semibold md:text-4xl text-center">
        Featured Tours
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly max-w-5xl xl:max-w-6xl mx-auto">
        {tourList.map((tour, index) => (
          <TourCard tour={tour} key={index} featured />
        ))}
      </div>
      <CtaButton text="More Tours" link={link} />
    </div>
  );
};

export default FeaturedTours;
