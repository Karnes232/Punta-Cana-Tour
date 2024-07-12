import { Link } from "gatsby";
import React from "react";

const ActivityLink = ({ name, url }) => {
  return (
    <div className="flex flex-col max-w-5xl mx-5 lg:p-2 xl:mx-auto xl:min-w-[64rem]">
      <p className="font-montserrat lg:text-lg text-gray-700">
        Ready to explore{" "}
        <Link className="italic underline text-blue-600" to={`/tours/${url}`}>
          {name}
        </Link>
        ? Visit our{" "}
        <Link className="italic underline text-blue-600" to={`/tours/${url}`}>
          Tour Page
        </Link>{" "}
        to book your excursion and embark on a magical journey.
      </p>
    </div>
  );
};

export default ActivityLink;
