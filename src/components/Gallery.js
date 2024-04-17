import {useState} from 'react';
import BlockWrapper from './BlockWrapper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Autoplay, EffectFade, Thumbs, A11y} from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Gallery = ({images, autoplayState = true, thumbnailsOnlyState}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState();
    const autoplayDelay = autoplayState ? 5000 : 0
    
    return (
        <div className="bg-gray-200">
            {images && (
                <BlockWrapper>
                    {thumbnailsOnlyState ? (
                        <Swiper
                            spaceBetween={10}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {images.map((image, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={image.src}
                                            height=""
                                            width=""
                                            alt={image.alt}
                                            className='w-full'
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    ) : (
                        <div>
                            <Swiper
                                modules={[EffectFade, Navigation, Autoplay, Thumbs, A11y]}
                                spaceBetween={10}
                                slidesPerView={1}
                                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                effect="fade"
                                autoplay={{delay: autoplayDelay}}
                                className='w-full h-96 lg:h-screen relative'
                            >
                                {images.map((image, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={image.src}
                                                height="1000"
                                                width="2000"
                                                alt={image.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                spaceBetween={10}
                                slidesPerView={4.5}
                                watchSlidesProgress={true}
                                freeMode={true}
                                className='mt-4 lg:grid lg:grid-cols-1'
                            >
                                {images.map((image, index) => {
                                    return (
                                        <SwiperSlide key={index} className="w-40 aspect-square overflow-hidden relative">
                                            <img
                                                src={image.src}
                                                height="200"
                                                width="200"
                                                alt={image.alt}
                                                className=" absolute w-full h-full inset-0 object-cover cursor-pointer mx-auto shadow-lg transition duration-300 bg-blue-lightest"
                                            />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    )}
                </BlockWrapper>
            )}
        </div>
    )
}

export default Gallery