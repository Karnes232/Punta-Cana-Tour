import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Logo = ({ logo, url }) => {
  const image = getImage(logo);
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden">
        <Link to={url} className="no-underline" aria-label="Home">
          <div className="cursor-pointer flex items-center w-20 md:w-32">
            <GatsbyImage
              image={image}
              alt="Punta Cana Tour Store"
              className="w-20 md:w-32"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
