import React from "react";

import { FaLocationDot } from "react-icons/fa6";
const HotelInfo = ({ title, propertyType, location, price }) => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let rental = false;
  return (
    <div className="xl:w-[72rem]">
      <h4 className="font-light text-3xl md:text-4xl tracking-wide mb-1">
        {title}
      </h4>
      <div className="flex flex-col">
        <p className="font-extralight my-2 text-base md:text-lg tracking-wide flex items-end flex-wrap">
          <span className="flex justify-center items-center h-7 min-w-fit bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-light text-gray-700 mr-2">
            {propertyType}
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:text-lg">
        <p className="font-extralight text-base md:text-lg flex items-center flex-wrap text-gray-600">
          <FaLocationDot className="mr-2" /> {location}
        </p>
        <div className="flex flex-col md:items-center mt-2 lg:mt-0 text-gray-600">
          <p> {currencyFormatter.format(price)}</p>
          <p className="text-xs">Per Night</p>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;