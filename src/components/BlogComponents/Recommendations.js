import React from "react";
import YouMayLikeSwiper from "./YouMayLikeSwiper";

const Recommendations = ({ list, title }) => {
  if (!list?.length) return null;
  return (
    <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto xl:min-w-[65rem]">
      <h2 className="font-bold text-lg">{title}</h2>
      <YouMayLikeSwiper list={list} />
    </div>
  );
};

export default Recommendations;
