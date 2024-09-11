import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const PropertyCardCarousel = ({ mainImage, imageList }) => {
  let photoListEdited = [];
  imageList.push(mainImage);
  imageList?.forEach((e) => {
    let image = {
      title: e.title,
      image: getImage(e.gatsbyImage),
    };
    photoListEdited.push(image);
  });

  return (
    <div>
      <Swiper
        effect={"fade"}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className={``}
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
    </div>
  );
};

export default PropertyCardCarousel;
