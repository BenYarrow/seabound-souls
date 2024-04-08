import {useState} from 'react';
import BlockWrapper from './BlockWrapper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Autoplay, EffectFade, Thumbs} from "swiper/modules"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const Gallery = ({images, autoplayState, thumbnailsOnlyState}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState();
    const autoplayDelay = autoplayState ? 3000 : 0
    
    return (
        <div className="bg-gray-200">
            {images && (
                <BlockWrapper options={{fill: true}}>
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
                                            src={image}
                                            height='200'
                                            width='200'
                                            alt=''
                                            className='w-full aspect-square'
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    ) : (
                        <div>
                            <Swiper
                                modules={[EffectFade, Navigation, Autoplay, Thumbs]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation={true}
                                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                effect="fade"
                                autoplay={autoplayState ? {delay: autoplayDelay} : false}
                                id="gallery-swiper"
                            >
                                {images.map((image, index) => {
                                    return (
                                        <SwiperSlide key={index} className='relative aspect-square'>
                                            <img
                                                src={image}
                                                height='200'
                                                width='200'
                                                alt=''
                                                className='w-full absolute inset-0 left-0 top-0 object-cover'
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
                                breakpoints={{
                                    768: {
                                        slidesPerView: 6.5,
                                    },
                                }}
                                watchSlidesProgress={true}
                                freeMode={true}
                                className='mt-2.5'
                            >
                                {images.map((image, index) => {
                                    return (
                                        <SwiperSlide key={index} className='relative aspect-square'>
                                            <img src={image}
                                                height='480'
                                                width='480'
                                                alt=''
                                                className="cursor-pointer absolute inset-0 left-0 top-0 object-cover shadow-lg transition duration-300 overflow-hidden bg-gray-200 aspect-square"
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