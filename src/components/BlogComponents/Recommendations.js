import React from "react";
import YouMayLikeSwiper from "./YouMayLikeSwiper";

const Recommendations = ({ list }) => {
  return (
    <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto xl:min-w-[65rem]">
      <h5 className="font-bold text-lg">You Might Also Like</h5>
      <YouMayLikeSwiper list={list} />
    </div>
  );
};

export default Recommendations;
