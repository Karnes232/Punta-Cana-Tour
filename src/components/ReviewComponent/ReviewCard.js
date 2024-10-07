import React from "react";
import ReactStars from "react-stars";
import IndividualReviewPopup from "./IndividualReviewPopup";
const ReviewCard = ({ review }) => {
  console.log(review);
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg h-full flex flex-col max-w-xs">
      <div className="flex items-center mb-4">
        {review.photoUrl ? (
          <img
            src={review.photoUrl}
            alt={review.name}
            className="w-12 h-12 rounded-full mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <span className="text-xl text-gray-600">{review.name}</span>
          </div>
        )}
        <div>
          <h3 className="font-semibold">{review.name}</h3>
          {/*   <p className="text-gray-500 text-sm">Sent on {review.date}</p> */}
        </div>
      </div>

      <div className="flex items-center mb-2">
        <ReactStars
          count={5}
          value={review.overAllRating}
          size={24}
          color2={"#ffd700"}
          edit={false}
        />
        <span className="ml-2 font-semibold">
          {review.overAllRating.toFixed(1)}
        </span>
      </div>

      <h4 className="font-semibold mb-2">{review.title}</h4>
      <p className="text-gray-700 mb-4 line-clamp-6">{review.description}</p>
      <div className="flex-grow flex flex-col justify-end">
        {review.ImagesUrl && review.ImagesUrl.length > 0 && (
          <div className="flex space-x-2 mb-4">
            {review.ImagesUrl.slice(0, 2).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Review photo ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
            ))}
            {review.ImagesUrl.length > 2 && (
              <div className="relative">
                <img
                  src={review.ImagesUrl[2]}
                  alt="More photos"
                  className="w-20 h-20 object-cover rounded-lg brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  +{review.ImagesUrl.length - 2}
                </div>
              </div>
            )}
          </div>
        )}
        <IndividualReviewPopup review={review} />
      </div>
    </div>
  );
};

export default ReviewCard;
