import React from "react";
import ReactStars from "react-stars";
import WriteReview from "./WriteReview";
const StarRating = ({ tour, overAllRating }) => {
  let rating = 0;

  if (isNaN(overAllRating)) {
    rating = 4.8;
  } else {
    rating = overAllRating;
  }

  let ratingWord = "";
  if (rating > 4.5) {
    ratingWord = "Excellent";
  } else if (rating > 4) {
    ratingWord = "Very Good";
  } else if (rating > 3.5) {
    ratingWord = "Above Average";
  } else if (rating > 2.5) {
    ratingWord = "Average";
  } else if (rating > 1.5) {
    ratingWord = "Needs Improvement";
  } else {
    ratingWord = "Disappointing";
  }

  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-center font-medium">
        <span className="text-3xl font-bold">{rating}</span> {ratingWord}
      </div>
      <div>
        <ReactStars
          count={5}
          value={rating}
          size={30}
          color2={"#ffd700"}
          edit={false}
        />
      </div>
      <WriteReview tour={tour} />
    </div>
  );
};

export default StarRating;
