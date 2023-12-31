import React from "react";

import { Link } from "gatsby";

const LinksRight = ({ color }) => {
  return (
    <div className="hidden lg:flex lg:w-[28rem] xl:w-[35rem] lg:justify-between">
      <Link to="/" className="no-underline">
        <button className={`navLinks text-${color}`}>Home</button>
      </Link>
      <Link to="/tours" className="no-underline">
        <button className={`navLinks text-${color}`}>Tours</button>
      </Link>
      <Link to="/transfers" className="no-underline">
        <button className={`navLinks text-${color}`}>Transfers</button>
      </Link>
      <Link to="/about" className="no-underline">
        <button className={`navLinks text-${color}`}>About</button>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className={`navLinks text-${color}`}>Contact</button>
      </Link>
    </div>
  );
};

export default LinksRight;
