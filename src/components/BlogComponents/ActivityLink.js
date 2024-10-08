import { Link } from "gatsby";
import React from "react";

const ActivityLink = ({ name, url, page }) => {
  return (
    <>
      {page === undefined ? (
        <></>
      ) : (
        <div className="flex flex-col max-w-5xl mx-5 lg:p-2 xl:mx-auto xl:min-w-[64rem]">
          <p className="font-montserrat lg:text-lg text-gray-700">
            Visit our website for more information on the{" "}
            <Link className="italic underline text-blue-600" to={`/tours`}>
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
            Ready to explore{" "}
            <Link className="italic underline text-blue-600" to={`${url}`}>
              {name}
            </Link>
            ? Visit our{" "}
            <Link className="italic underline text-blue-600" to={`/tours`}>
              Tour Page
            </Link>{" "}
            to book your excursions and embark on a magical journey.
          </p>
        </div>
      )}
    </>
  );
};

export default ActivityLink;
