import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const SwiperCarousel = ({ className, photoList }) => {
  const [screenWidth, setScreenWidth] = useState(undefined);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  let photoListEdited = [];
  photoList?.forEach((e) => {
    let image = {
      title: e.title,
      image: getImage(e.gatsbyImage),
    };
    photoListEdited.push(image);
  });
  return (
    <>
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className={`mySwiper mt-3 h-[35vh] md:h-[45vh] lg:h-[65vh] w-full max-w-6xl 2xl:max-w-6xl mx-0 ${className}`}
      >
        {photoListEdited.map((image, index) => {
          return (
            <SwiperSlide className="relative" key={index}>
              <GatsbyImage
                image={image.image}
                alt={image.title || "Tours"}
                className="h-[35vh] md:h-[45vh] lg:h-[65vh] object-cover w-full brightness-90"
                width={screenWidth > 600 ? 1920 : 640}
                height={screenWidth > 600 ? 1280 : 427}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
