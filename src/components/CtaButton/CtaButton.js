import { Link } from "gatsby";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const CtaButton = ({ text, link }) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl xl:max-w-6xl mx-auto">
      <Link
        to={link}
        className="flex items-center justify-between no-underline md:text-2xl w-[9.15rem] md:w-[12.5rem] font-medium bg-primary-color text-secondary-color px-4 py-2 md:py-3 my-3 rounded-xl hover:opacity-70"
      >
        {text} <RiArrowRightSLine className="ml-2" />
      </Link>
    </div>
  );
};

export default CtaButton;
