import React from "react";
import TourCard from "../TourCardComponent/TourCard";
import { Link } from "gatsby";
import { RiArrowRightSLine } from "react-icons/ri";

const FeaturedTours = ({ tours }) => {
  let tourList = tours.splice(0, 6).sort(() => Math.random() - 0.5);
  return (
    <div className="bg-slate-100 py-10" id="featured-Tours">
      <h3 className="font-lato tracking-wider text-3xl font-semibold md:text-4xl text-center">
        Featured Tours
      </h3>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly max-w-5xl xl:max-w-6xl mx-auto">
        {tourList.map((tour, index) => (
          <TourCard tour={tour} key={index} featured />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center max-w-5xl xl:max-w-6xl mx-auto">
        <Link to="/tours/" className="flex items-center justify-between no-underline text-2xl font-medium bg-primary-color text-secondary-color px-4 py-2 my-3 rounded-xl hover:opacity-70">
          More Tours <RiArrowRightSLine className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedTours;
