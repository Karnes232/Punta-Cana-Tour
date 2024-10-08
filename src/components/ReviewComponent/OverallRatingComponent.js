import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import ProgressBars from "./ProgressBars";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import ReviewPhotoGrid from "./ReviewPhotoGrid";
import ReviewSection from "./ReviewSection";

const OverallRatingComponent = ({ tour }) => {
  const [reviews, setReviews] = useState([]);
  const [imageArray, setImageArray] = useState([]);
  // const [lastVisible, setLastVisible] = useState(null); // To track the last document for pagination
  // const [loading, setLoading] = useState(false);

  let reviewCollectionName = `reviews-${tour.url}`;
  let reviewCollectionImages = `reviews-${tour.url}-Images`;
  const findReviews = async (loadMore = false) => {
    const reviewRef = collection(db, reviewCollectionName);
    let reviewsQuery = query(reviewRef, orderBy("overAllRating", "desc"), limit(3));
    // if (loadMore && lastVisible) {
    //   reviewsQuery = query(reviewsQuery, startAfter(lastVisible));
    // }
    const reviewsSnapshot = await getDocs(reviewsQuery);
    // const querySnapshot = await getDocs(collection(db, reviewCollectionName));
    reviewsSnapshot.forEach((doc) => {
      setReviews((prevReviews) => [...prevReviews, doc.data()]);
      // const data = doc.data();
      // data.ImagesUrl.forEach((image) => {
      //   setImageArray((prevImages) => [...prevImages, { url: image }]);
      // });
    });
    // setLastVisible(reviewsSnapshot.docs[reviewsSnapshot.docs.length - 1]);
    // }
  };

  const findImages = async () => {
    const reviewRef = collection(db, reviewCollectionImages);
    let reviewsQuery = query(reviewRef, orderBy("createdAt", "desc"));
    const reviewsSnapshot = await getDocs(reviewsQuery);
    reviewsSnapshot.forEach((doc) => {
      const data = doc.data();
      data.ImagesUrl.forEach((image) => {
        setImageArray((prevImages) => [...prevImages, { url: image }]);
      });
    });
  };

  useEffect(() => {
    findReviews();
    findImages();
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
        {imageArray.length > 0 && <ReviewPhotoGrid photos={imageArray} />}
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 my-5 md:justify-between lg:max-w-7xl">
        {reviews.length > 0 && <ReviewSection reviews={reviews} />}
      </div>
    </>
  );
};

export default OverallRatingComponent;
