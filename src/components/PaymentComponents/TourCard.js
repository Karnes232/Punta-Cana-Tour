import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const TourCard = ({ tour }) => {
  const image = getImage(tour.tour?.mainImage?.gatsbyImage);
  return (
    <div className="flex justify-between my-4 gap-3">
      <GatsbyImage
        image={image}
        alt={tour.tour?.name}
        className="rounded-md w-20 h-20 object-cover"
      />
      <div className="flex flex-col mb-1 w-56">
        <h1 className="text-lg font-bold truncate lg:whitespace-normal">
          {tour.tour?.name}
        </h1>
        <div className="flex flex-1 items-center justify-between">
          <p className="text-gray-600">${tour.tour?.price}</p>
          <p className="text-gray-600">{tour.guestCount} pax</p>
          <p className="text-gray-800 font-medium ml-10">
            ${tour.tour?.price * tour.guestCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
