import { Link } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const TourCard = ({ tour }) => {
  const { name, price, mainImage, description1, url } = tour.node;
  const image = getImage(mainImage.gatsbyImage);

  return (
    <>
      <Link to={`tours/${url}`}>
        <div className="max-w-sm my-5 mx-2 rounded-lg overflow-hidden shadow-lg">
          <GatsbyImage
            image={image}
            alt=""
            className="w-full object-cover h-64"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-between">
              <div>{name}</div>
              <div>${price}</div>
            </div>
            <p className="text-gray-700 text-base">
              {description1.description1}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TourCard;
