import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// IMG

import img1 from '../../../../assets/ProfileImg.jpg';

// import img2 from '../../../../assets/AImg2.jpg';
// import img3 from '../../../../assets/AImg3.jpg';
// import img4 from '../../../../assets/AImg4.jpg';






import { EffectCube, Pagination } from 'swiper/modules';

export default function ImgSwaper() {

    return (
        <>
            <Swiper

                effect={'cube'}
                grabCursor={true}

                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}

                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
                    <img src={img1} alt='img' />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='img' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
