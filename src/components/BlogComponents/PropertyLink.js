import { Link } from "gatsby";
import React from "react";

const PropertyLink = ({ name, url, page }) => {
  return (
    <>
      {page === undefined ? (
        <></>
      ) : (
        <div className="flex flex-col max-w-5xl mx-5 lg:p-2 xl:mx-auto xl:min-w-[64rem]">
          <p className="font-montserrat lg:text-lg text-gray-700">
            Visit our website for more information on the{" "}
            <Link className="italic underline text-blue-600" to={`/properties`}>
              {page}!
            </Link>{" "}
          </p>
        </div>
      )}
      {name === undefined ? (
        <></>
      ) : (
        <div className="flex flex-col max-w-5xl mx-5 lg:p-2 xl:mx-auto xl:min-w-[64rem]">
          <p className="font-montserrat lg:text-lg text-gray-700">
            Visit our website for more information on{" "}
            <Link
              className="italic underline text-blue-600"
              to={`/properties/${url}`}
            >
              {name}!
            </Link>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default PropertyLink;
