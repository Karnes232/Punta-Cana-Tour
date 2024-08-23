import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const CharterPhotoCarousel = ({ mainImage, imageList }) => {
  let photoListEdited = [];
  imageList?.forEach((e) => {
    let image = {
      title: e.title,
      image: getImage(e.gatsbyImage),
    };
    photoListEdited.push(image);
  });
  let newImage = {
    title: mainImage.title,
    image: getImage(mainImage.gatsbyImage),
  };
  photoListEdited.push(newImage);
  return (
    <>
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className={`w-full object-cover h-64 lg:h-60`}
      >
        {photoListEdited.map((image, index) => {
          return (
            <SwiperSlide className="relative" key={index}>
              <GatsbyImage
                image={image.image}
                alt={image.title}
                className="w-full object-cover h-64 lg:h-60"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CharterPhotoCarousel;
