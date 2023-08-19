import React from "react";

const Price = ({ price, duration }) => {
  return (
    <div className="flex flex-col">
    <div className="flex items-center">
      <h4 className="font-light text-2xl md:text-3xl tracking-wider">From:</h4>
      <p className="inline-block pl-3 md:pl-6 font-light text-2xl text-blue-500 md:text-2xl space-x-2 md:space-x-4">
        ${price}
      </p>
    </div>
    <div className="flex items-center">
      <h4 className="font-light text-lg md:text-3xl tracking-wider">Duration:</h4>
      <p className="inline-block pl-3 md:pl-6 font-light text-base md:text-2xl space-x-2 md:space-x-4">
        {duration}
      </p>
    </div>
    </div>
  );
};

export default Price;
