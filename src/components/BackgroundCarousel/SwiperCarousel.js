import React, { useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import { Autoplay, EffectFade } from "swiper/modules"

const SwiperCarousel = ({ className, photoList }) => {
  const [screenWidth, setScreenWidth] = useState(undefined)
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])
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
        className={`mySwiper mt-3 h-[35vh] md:h-[45vh] lg:h-[65vh] w-full mx-0 ${className}`}
      >
        {photoList.map((image, index) => (
          <SwiperSlide className="relative" key={index}>
            <img
              //src={screenWidth > 600 ? image.image : image.mobile}
              src={image.image}
              className=" h-[35vh] md:h-[45vh] lg:h-[65vh] object-cover w-full brightness-90"
              alt={image.title}
              // loading="lazy"
              width={screenWidth > 600 ? 1920 : 640}
              height={screenWidth > 600 ? 1280 : 427}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperCarousel
