import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import PageHeading from './PageHeading';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

const SwiperHeroSlider = (props) => {

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      effect="fade"
      className="mySwiper"
    >
        {props.images.map((slide, index) => {
          return(
            <SwiperSlide key={index} className="relative">
              <div className='bg-cover bg-center h-[calc(100vh-4rem)] -z-10 flex flex-col justify-between items-center bg-white py-20'
                  style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundRepeat: "no-repeat"
                  }}
                >
                <PageHeading heading={props.heading} />
                  <button className="px-8 py-2 bg-blue">
                    <a href='#content' className="relative text-xl text-white uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-white after:transition-all after:duration-300">
                      Read more
                    </a>
                  </button>
              </div>
            </SwiperSlide>
          )
        })}
    </Swiper>

  )
}

export default SwiperHeroSlider