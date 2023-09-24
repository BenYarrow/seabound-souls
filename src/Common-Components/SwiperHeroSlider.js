import React from 'react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

const SwiperHeroSlider = (props) => {
  return (

    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      autoplay={{
        delay: 3000,
      }}
      effect="fade"
      speed="1000"
      loop={true}
      pagination={{ clickable: true }}
    >
        {props.images.map((slide, index) => {
          return(
            <SwiperSlide>
              <div className={`${slide.bgImageClasses} w-screen h-[calc(100vh-4rem)]`}
            style={{
            backgroundImage: `url(${slide.image})`,
            backgroundRepeat: "no-repeat"
            }}
            key={index}>

              </div>
            </SwiperSlide>
          )
        })}
    </Swiper>
  )
}

export default SwiperHeroSlider