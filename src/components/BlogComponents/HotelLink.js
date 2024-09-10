import { Link } from "gatsby";
import React from "react";

const HotelLink = ({ name, url, page }) => {
  console.log(url);
  return (
    <>
      {page === undefined ? (
        <></>
      ) : (
        <div className="flex flex-col max-w-5xl mx-5 lg:p-2 xl:mx-auto xl:min-w-[64rem]">
          <p className="font-montserrat lg:text-lg text-gray-700 lg:px-2">
            Visit our website for more information on the{" "}
            <Link className="italic underline text-blue-600" to={`/hotels`}>
              {page}!
            </Link>{" "}
          </p>
        </div>
      )}
      {name === undefined ? (
        <></>
      ) : (
        <div className="flex flex-col max-w-5xl mx-5 lg:p-2 xl:mx-auto xl:min-w-[64rem]">
          <p className="font-montserrat lg:text-lg text-gray-700 lg:px-2">
            So, what are you waiting for? Pack your bags and get ready to
            experience the true spirit of Punta Cana at the{" "}
            <Link
              className="italic underline text-blue-600"
              to={`/hotels/${url}`}
            >
              {name}
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default HotelLink;
