import { Link } from "gatsby";
import React from "react";

const TransferLink = ({ name }) => {
  let url = "";
  if (name === "Punta Cana") {
    url = "/transfers/punta-cana";
  }
  if (name === "Dominican Republic") {
    url = "/transfers/dominican-republic";
  }
  if (name === "Flights") {
    url = "/transfers/flights";
  }
  return (
    <div className="flex flex-col max-w-5xl mx-5 lg:p-2 xl:mx-auto xl:min-w-[64rem]">
      <p className="font-montserrat lg:text-lg text-gray-700">
        Ready to simplify your travel plans?{" "}
        <Link className="italic underline text-blue-600" to={`${url}`}>
          Book your transfer now
        </Link>{" "}
        and start your vacation stress-free. For more information and to make a
        reservation, visit our website or contact us directly.
      </p>
    </div>
  );
};

export default TransferLink;
