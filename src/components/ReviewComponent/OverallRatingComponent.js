import React from "react";
import StarRating from "./StarRating";
import ProgressBars from "./ProgressBars";

const OverallRatingComponent = ({ tour }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 my-5 md:justify-between lg:max-w-2xl">
      <StarRating tour={tour} />
      <ProgressBars />
    </div>
  );
};

export default OverallRatingComponent;
