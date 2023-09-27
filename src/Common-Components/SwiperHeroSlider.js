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
      delay: 4000,
      disableOnInteraction: false
    }}
    effect="fade"
    modules={[Autoplay, Pagination, Navigation, EffectFade]}
    className="mySwiper"
  >
        {props.images.map((slide, index) => {
          return(
            <SwiperSlide key={index}>
              <div className={`${slide.bgImageClasses} h-[calc(100vh-4rem)] -z-10 flex justify-center items-end`}
                  style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundRepeat: "no-repeat"
                  }}
                >
                <div className='group mb-20 hidden md:block'>
                  <button className="px-8 py-2 bg-blue">
                    <a href='#top-section' className="relative text-xl text-white  uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-white after:transition-all after:duration-300">
                      Read more
                    </a>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
    </Swiper>

  )
}

export default SwiperHeroSlider