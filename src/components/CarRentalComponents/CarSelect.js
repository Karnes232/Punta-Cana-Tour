import React from "react";
import IndividualCar from "./IndividualCar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const CarSelect = ({ cars, formData, setFormData }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-start xl:justify-center xl:space-x-24">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        effect={"coverflow"}
        grabCursor={true}
        lazy={true}
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
        {" "}
        {cars.map((car, index) => {
          return (
            <SwiperSlide
              className="relative max-w-sm min-w-[20rem] xl:max-w-xs"
              key={index}
            >
              <IndividualCar
                car={car}
                formData={formData}
                setFormData={setFormData}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarSelect;
