import { Link } from "gatsby";
import React from "react";

const Button = ({ text, customClass, url, name }) => {
  return (
    <div className="flex flex-col max-w-5xl mt-5 mx-5 lg:p-2 xl:mx-auto xl:min-w-[64rem]">
      <Link to={`/tours/${url}`}>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ${customClass}`}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
