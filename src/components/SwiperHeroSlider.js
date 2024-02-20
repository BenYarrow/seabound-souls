import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from './Title';
import ButtonLink from "../components/ButtonLink"
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
        return (
          <SwiperSlide key={index} className="relative">
            <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-10rem)]">
              <img
                src={slide.image}
                srcSet={`${slide} 768w, ${slide}?resize&size=1024 1024w, ${slide}?resize&size=1600 1600w`}
                sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw, 33.3vw"
                alt={props.heading}
                className="object-cover w-full h-full -z-50 absolute"
                fetchpriority={index === 0 ? 'high' : 'low'}
                loading={index > 0 ? 'lazy' : ''}
                crossOrigin
              />
              <div className="flex flex-col justify-between items-center pb-12  z-50 h-full">

                <Title heading={props.heading} />
              
                <ButtonLink title="Read more"
                  linkTo="#content"
                  colour='blue'
                />
                
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperHeroSlider;
