import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface SwiperHeroSliderProps {
  images: {
    sm: string
    md: string
    lg: string
  }[] 
  title: string
  subtitle: string
}

const SwiperHeroSlider = ({images, title, subtitle}: SwiperHeroSliderProps) => {

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      effect="fade"
      className="mySwiper"
    >
      {images.map((slide, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className="relative h-[calc(100vh-4rem)] lg:h-[calc(100vh-10rem)] bg-blue-lighter">
              <div className='absolute inset-0'>
                <picture>
                  <source media="(max-width: 640px)" srcSet={slide.sm} />
                  <source media="(min-width: 641px) and (max-width: 1024px)" srcSet={slide.md} />
                  <source media="(min-width: 1025px)" srcSet={slide.lg} />
                  <img src={slide.sm} alt="Ben and Rachel windsurfing" 
                    className='object-cover w-full h-full' 
                    fetchPriority={index === 0 ? 'high' : 'low'}
                    loading={index !== 0 ? 'lazy' : 'eager'}
                    crossOrigin="anonymous"
                  />
                </picture>
              </div>

                {title && (
                  <div className="absolute w-full h-full flex justify-center items-center z-10 overflow-visible radial-background">
                      <div className="flex flex-col gap-y-4 text-white uppercase ">
                          <h1 className="text-4xl md:text-5xl text-center  max-w-3xl font-bold">
                              {title}
                          </h1>
                          {subtitle && (
                              <p className="text-center whitespace-nowrap text-lg md:text-xl lg:text-2xl">
                                  {subtitle}
                              </p>
                          )}
                      </div>
                  </div>
                )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperHeroSlider;
