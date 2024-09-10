import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import PropertyCardCarousel from "../PropertyComonents/PropertyCardCarousel";

const HotelCard = ({ hotel }) => {
  const image = getImage(hotel?.mainImage?.gatsbyImage);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  console.log(hotel);
  return (
    <>
      <Link to={hotel.urlSlug}>
        <div className="max-w-sm min-w-[20rem] xl:max-w-xs my-5 rounded-lg overflow-hidden shadow-lg">
          <PropertyCardCarousel
            mainImage={hotel?.mainImage}
            imageList={hotel.images}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-lg">
              <div className="truncate">{hotel.title}</div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center mt-2 text-gray-600">
                <FaLocationDot className="mr-2" /> {hotel.generalLocation}
              </div>
              <div className="flex items-center font-medium mt-2">
                {currencyFormatter.format(hotel.price)}
              </div>
            </div>
          </div>
          <div className="px-6 py-2 flex items-end flex-wrap">
            <span className="flex justify-center items-center h-7 min-w-fit bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {hotel.hotelType}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HotelCard;
