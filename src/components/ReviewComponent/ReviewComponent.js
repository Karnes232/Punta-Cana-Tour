import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import OverallRatingComponent from "./OverallRatingComponent";
const ReviewComponent = ({ tour }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-2xl font-medium">Reviews of {tour.name}</h4>

      <div className="flex w-fit p-4 items-center gap-3 rounded-lg shadow mt-5 bg-white text-sm">
        <CiCircleInfo className="text-6xl md:text-4xl lg:text-2xl text-secondary-color" />{" "}
        We're all about trust. Our community relies on honest reviews to help
        you make those big decisions with ease.
      </div>
      <OverallRatingComponent tour={tour} />
    </div>
  );
};

export default ReviewComponent;
