import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PageHeading from './PageHeading';
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
            <div className="h-[calc(100vh-4rem)]">
              <img
                src={slide.image}
                srcSet={`${slide.image} 768w, ${slide.image}?resize&size=1024 1024w, ${slide.image}?resize&size=1600 1600w`}
                sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw, 33.3vw"
                alt={props.heading}
                className="object-cover w-full h-full -z-50 absolute"
                fetchPriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 ? false : true}
                crossOrigin
              />
              <div className="flex flex-col justify-between items-center bg-white/10 pb-12  z-50 h-full">
                
                <PageHeading heading={props.heading} />
                <a
                  href="#content"
                  className="relative px-8 py-2 bg-blue text-xl text-white uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-white after:transition-all after:duration-300"
                >
                    Read more
                  </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperHeroSlider;
