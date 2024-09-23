import { Link } from "gatsby";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import PropertyCardCarousel from "./PropertyCardCarousel";

const PropertyCard = ({ property }) => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <>
      <Link to={property.urlSlug?.trim()}>
        <div className="max-w-sm min-w-[20rem] xl:max-w-xs my-5 mx-2 rounded-lg overflow-hidden shadow-lg">
          <PropertyCardCarousel
            mainImage={property?.mainImage}
            imageList={property.images}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-lg">
              <div className="truncate">{property.title}</div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center mt-2 text-gray-600">
                <FaLocationDot className="mr-2" /> {property.generalLocation}
              </div>
              <div className="flex items-center font-medium mt-2">
                {currencyFormatter.format(property.price)}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center mt-2 text-gray-600">
                <IoBedOutline className="mr-2" /> {property.bedrooms}
              </div>
              <div className="flex items-center mt-2 text-gray-600">
                <LuBath className="mr-2" /> {property.bathrooms}
              </div>
              <div className="flex items-center mt-2 text-gray-600">
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
                {property.squareFeet.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}{" "}
                Sqft
              </div>
            </div>
          </div>
          <div className="px-6 py-2 flex items-end flex-wrap">
            <span className="flex justify-center items-center h-7 min-w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {property.propertyType}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;
