import { Link } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MaybeLikeTourCard = ({ tour }) => {
  const { name, price, mainImage, description1, url, category } = tour;
  const image = getImage(mainImage?.gatsbyImage);
  return (
    <>
      <Link to={`/tours/${url}`}>
        <div className="w-80 mx-auto my-5 rounded-lg overflow-hidden shadow-lg">
          <GatsbyImage
            image={image}
            alt=""
            className="w-full object-cover h-40"
          />
          <div className="px-6 py-4">
            <div className="font-bold h-8 text-base mb-2 flex justify-between">
              <div className="truncate mr-3">{name}</div>
              <div>${price}</div>
            </div>
            <p className="text-gray-700 h-32 text-sm">
              {description1.description1}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MaybeLikeTourCard;
