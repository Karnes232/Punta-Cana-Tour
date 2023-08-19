import React from "react";

const Price = ({ price }) => {
  return (
    <div className="flex items-center">
      <h4 className="font-light text-2xl md:text-3xl tracking-wider">From:</h4>
      <p className="inline-block pl-3 md:pl-6 font-light text-2xl text-blue-500 md:text-2xl space-x-2 md:space-x-4">
        ${price}
      </p>
    </div>
  );
};

export default Price;
