import React from "react";
import { Link } from "gatsby";
const Button = ({ text, customClass }) => {
  return (
    <Link to="/contact">
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ${customClass}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
