import React from "react";
import TourCard from "../TourCardComponent/TourCard";

const FeaturedTours = ({ tours }) => {
  let tourList = tours.splice(0, 6).sort(() => Math.random() - 0.5);
  return (
    <div className="bg-slate-100 py-10" id="featured-Tours">
      <h3 className="font-lato tracking-wider text-3xl font-semibold md:text-4xl text-center">
        Featured Tours
      </h3>

      <div className="flex flex-col">
        {tourList.map((tour, index) => (
          <TourCard tour={tour} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTours;
