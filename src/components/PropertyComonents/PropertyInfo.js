import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
const PropertyInfo = ({
  title,
  propertyType,
  location,
  saleOrRent,
  price,
  bathrooms,
  bedrooms,
  sqFeet,
}) => {
  let rental = false;
  if (saleOrRent === "For Rent") {
    rental = true;
  }
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
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
        <p className="font-extralight mb-2 text-base md:text-lg flex items-center flex-wrap text-gray-600">
          <FaLocationDot className="mr-2" /> {location}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:text-lg">
        <div className="flex gap-5 mt-2">
          <div className="flex items-center text-gray-600">
            <IoBedOutline className="mr-2" /> {bedrooms}
          </div>
          <div className="flex items-center text-gray-600">
            <LuBath className="mr-2" /> {bathrooms}
          </div>
          <div className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
              />
            </svg>
            {sqFeet.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}{" "}
            Sqft
          </div>
        </div>
        <div className="flex flex-col md:items-center mt-2 text-gray-600">
          <p> {currencyFormatter.format(price)}</p>
          {rental ? <p className="text-xs">Per Month</p> : <></>}
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
