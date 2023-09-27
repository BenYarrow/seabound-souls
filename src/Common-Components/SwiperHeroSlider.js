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
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false
    }}
    pagination={{
      clickable: true
    }}
    loop
    effect="fade"
    modules={[Autoplay, Pagination, Navigation, EffectFade]}
    className="mySwiper"
  >
        {props.images.map((slide, index) => {
          return(
            <SwiperSlide key={index}>
                <div className={`${slide.bgImageClasses} h-[calc(100vh-4rem)]`}
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