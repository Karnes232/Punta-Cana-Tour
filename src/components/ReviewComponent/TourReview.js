import React, { useState } from "react";
import ReactStars from "react-stars";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const TourReview = ({ review }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const handlePhotoClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="max-w-full md:p-6 border-b">
      <div className="flex items-start space-x-4">
        <img
          src={review.photoUrl}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="">
          <div className="flex flex-col items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{review.name}</h3>
            </div>
            <div className="flex items-center gap-2">
              <ReactStars
                count={5}
                value={review.overAllRating}
                size={24}
                color2={"#ffd700"}
                edit={false}
              />
              <span className="text-sm font-medium text-gray-900">
                {review.overAllRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <h4 className="mt-4 font-bold text-gray-900">{review.title}</h4>
      {review.description.length > 200 && (
        <p className="mt-2 text-gray-700 lg:w-[40rem]">
          {readMore
            ? review.description
            : `${review.description.substring(0, 200)}...`}
          <br />
          <button
            className="text-blue-700"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      )}
      {review.description.length < 200 && (
        <p className="mt-2 text-gray-700 lg:w-[40rem]">{review.description}</p>
      )}

      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
        {review.ImagesUrl.slice(0, 3).map((image, i) => (
          <button
            key={i}
            onClick={() => handlePhotoClick(i)}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={`Review image ${i + 1}`}
              className="object-cover w-full h-full"
            />
            {i === 2 && review.ImagesUrl.length > 3 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  +{review.ImagesUrl.length - 3}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={review.ImagesUrl.map((photo) => ({
          src: photo,
        }))}
        index={currentIndex}
      />
    </div>
  );
};

export default TourReview;
