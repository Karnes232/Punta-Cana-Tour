import React from "react";

import { Link } from "gatsby";

const Logo = ({ logo }) => {
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden">
        <Link to="/" className="no-underline" aria-label="Home">
          <div className="cursor-pointer flex items-center mt-2 md:mt-5 xl:mt-10 w-20 md:w-32">
            <img src={logo} className="w-20 md:w-32" alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
