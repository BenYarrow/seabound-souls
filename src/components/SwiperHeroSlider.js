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
  const singleImage = 'your-single-image.jpg'; // Replace with your image URL

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
                srcSet={`${slide.image} 768w, ${slide.image}?resize&size=1024 1024w, ${slide.image}?resize&size=1600 1600w`}
                sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw, 33.3vw"
                alt={props.heading}
                className="object-cover w-full h-full -z-50 absolute"
                fetchpriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 && 'lazy'}
                crossOrigin
              />
              <div className="flex flex-col justify-between items-center pb-12  z-50 h-full">
                
                <Title heading={props.heading} />

                <ButtonLink title="Join the adventure"
                  linkTo="#content"
                  colourClass='blue'
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
