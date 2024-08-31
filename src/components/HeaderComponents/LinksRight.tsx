import React from "react";
import { Link } from "gatsby";
import DropDownMenu from "./DropDownMenu";
const LinksRight = ({ color }) => {
  return (
    <div className="hidden lg:flex lg:w-[50rem] xl:w-[55rem] lg:justify-between">
      <Link to="/" className="no-underline">
        <button className={`navLinks text-${color}`} translate="no">Home</button>
      </Link>
      <Link to="/tours" className="no-underline">
        <button className={`navLinks text-${color}`} translate="no">Tours</button>
      </Link>
      <DropDownMenu
        name="Transfers"
        subItems={[
          { name: "Punta Cana", url: "/transfers/punta-cana" },
          { name: "Other Cities", url: "/transfers/dominican-republic" },
          { name: "Charter Flights", url: "/transfers/flights" },
        ]}
        useHover
      />
      <Link to="/carrental" className="no-underline">
        <button className={`navLinks text-${color}`} translate="no">Car Rental</button>
      </Link>
      <DropDownMenu
        name="Recommendations"
        subItems={[
          { name: "Attractions", url: "/recommendations/attractions" },
          { name: "Places", url: "/recommendations/places" },
          { name: "Restaurants", url: "/recommendations/restaurants" },
        ]}
        useHover
      />

      <Link to="/contact" className="no-underline">
        <button className={`navLinks text-${color}`} translate="no">Contact</button>
      </Link>
    </div>
  );
};

export default LinksRight;
