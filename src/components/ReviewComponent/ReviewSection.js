import React from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReviewCard from "./ReviewCard";
const ReviewSection = ({ reviews }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="max-w-7xl mx-auto px-4">
      {isMobile ? (
        <Swiper spaceBetween={20} slidesPerView={1}>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          See all reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
