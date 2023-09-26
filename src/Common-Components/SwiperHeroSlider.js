import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

const SwiperHeroSlider = (props) => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      autoplay={true}
      loop={true}
      navigation={true}
      effect="fade"
    >
        {props.images.map((slide) => {
          return(
            <SwiperSlide>
                <div className={`${slide.bgImageClasses} w-screen h-[calc(100vh-4rem)]`}
                    style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundRepeat: "no-repeat"
                    }}
                    >

              </div>
            </SwiperSlide>
          )
        })}
    </Swiper>

  )
}

export default SwiperHeroSlider