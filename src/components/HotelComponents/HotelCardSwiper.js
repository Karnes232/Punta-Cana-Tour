import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import HotelRoomCard from "./HotelRoomCard";

const HotelCardSwiper = ({ hotelList, formData, setFormData }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      effect={"coverflow"}
      grabCursor={true}
      lazy="true"
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      className="max-w-sm min-w-[20rem] lg:max-w-5xl"
    >
      {hotelList.map((hotelRoom, index) => {
        return (
          <SwiperSlide
            className="relative max-w-sm min-w-[20rem] xl:max-w-xs"
            key={index}
          >
            <HotelRoomCard
              hotelRoom={hotelRoom}
              formData={formData}
              setFormData={setFormData}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HotelCardSwiper;
