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
          <SwiperSlide key={index}>
            <div className="relative h-[calc(100vh-4rem)] lg:h-[calc(100vh-10rem)] bg-blue-lighter">
              <div className='absolute inset-0'>
                <picture>
                  <source media="(max-width: 640px)" srcSet={slide.sm} />
                  <source media="(min-width: 641px) and (max-width: 1024px)" srcSet={slide.md} />
                  <source media="(min-width: 1025px)" srcSet={slide.lg} />
                  <img src={slide.mobile} alt="Ben and Rachel windsurfing" 
                    className='object-cover w-full h-full' fetchpriority={index === 0 ? 'high' : 'low'}
                    loading={index > 0 ? 'lazy' : ''}
                    crossOrigin
                  />
                </picture>
              </div>

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
