import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import ProgressBars from "./ProgressBars";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import ReviewPhotoGrid from "./ReviewPhotoGrid";

const OverallRatingComponent = ({ tour }) => {
  const [reviews, setReviews] = useState([]);
  const [imageArray, setImageArray] = useState([]);

  let reviewCollectionName = `reviews-${tour.url}`;
  const findReviews = async () => {
    const querySnapshot = await getDocs(collection(db, reviewCollectionName));
    querySnapshot.forEach((doc) => {
      setReviews((prevReviews) => [...prevReviews, doc.data()]);
      const data = doc.data();
      data.ImagesUrl.forEach((image) => {
        setImageArray((prevImages) => [...prevImages, { url: image }]);
      });
    });
  };
  useEffect(() => {
    findReviews();
  }, []);

  let qualityOfServiceTotal = reviews.reduce(function (prev, current) {
    return prev + +current.qualityOfService;
  }, 0);
  let qualityOfServiceAvg = qualityOfServiceTotal / reviews.length;

  let responsivenessTotal = reviews.reduce(function (prev, current) {
    return prev + +current.responsiveness;
  }, 0);
  let responsivenessAvg = responsivenessTotal / reviews.length;

  let professionalismTotal = reviews.reduce(function (prev, current) {
    return prev + +current.professionalism;
  }, 0);
  let professionalismAvg = professionalismTotal / reviews.length;

  let valueTotal = reviews.reduce(function (prev, current) {
    return prev + +current.value;
  }, 0);
  let valueAvg = valueTotal / reviews.length;

  let flexibilityTotal = reviews.reduce(function (prev, current) {
    return prev + +current.flexibility;
  }, 0);
  let flexibilityAvg = flexibilityTotal / reviews.length;

  let overAllRating =
    (qualityOfServiceAvg +
      responsivenessAvg +
      professionalismAvg +
      valueAvg +
      flexibilityAvg) /
    5;

  console.log(imageArray);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 my-5 md:justify-between lg:max-w-2xl">
        <StarRating tour={tour} overAllRating={overAllRating} />
        <ProgressBars
          qualityOfServiceAvg={qualityOfServiceAvg}
          responsivenessAvg={responsivenessAvg}
          professionalismAvg={professionalismAvg}
          valueAvg={valueAvg}
          flexibilityAvg={flexibilityAvg}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 my-5 md:justify-between lg:max-w-7xl">
        <ReviewPhotoGrid photos={imageArray} />
      </div>
    </>
  );
};

export default OverallRatingComponent;
