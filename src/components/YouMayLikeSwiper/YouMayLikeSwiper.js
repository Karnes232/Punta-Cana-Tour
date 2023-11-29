import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import MaybeLikeTourCard from "../TourCardComponent/MaybeLikeTourCard";
import useWindowWidth from "../../customHooks/useWindowWidth";

const YouMayLikeSwiper = ({ tourList }) => {
  const windowSize = useWindowWidth();
  let slidesPerView = 1;
  if (windowSize > 400) {
    slidesPerView = 2;
  }
  if (windowSize > 1400) {
    slidesPerView = 3;
  }
  return (
    <>
      <Swiper
        effect={"fade"}
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={`w-full max-w-7xl 2xl:max-w-6xl mx-0`}
      >
        {tourList.map((tour, index) => {
          return (
            <SwiperSlide className="relative" key={index}>
              <MaybeLikeTourCard tour={tour} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default YouMayLikeSwiper;
