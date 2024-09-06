import { Link } from "gatsby";
import React from "react";

const CarRentalLink = ({ name }) => {
  let url = "/carrental";
  return (
    <div className="flex flex-col max-w-5xl mx-5 lg:p-2 xl:mx-auto xl:min-w-[64rem]">
      <p className="font-montserrat lg:text-lg text-gray-700">
        Ready to hit the road?{" "}
        <Link className="italic underline text-blue-600" to={`${url}`}>
          Book your rental car now
        </Link>{" "}
        and start planning your perfect Punta Cana adventure. For more details
        and to make a reservation, visit our website or contact us directly.
      </p>
    </div>
  );
};

export default CarRentalLink;
