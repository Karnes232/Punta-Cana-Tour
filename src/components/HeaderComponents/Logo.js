import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Logo = ({ logo }) => {
  const image = getImage(logo);
  console.log(image)
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden">
        <Link to="/" className="no-underline" aria-label="Home">
          <div className="cursor-pointer flex items-center w-20 md:w-32">
            <GatsbyImage image={image} alt="" className="w-20 md:w-32" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
