// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const BannerSlider =()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="w-4/6 h-96 opacity-80">
           <img className="w-4/6 h-96" src="https://i.ibb.co/NjXd4qX/pexels-anna-pou-8330249.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-4/6 h-96 opacity-90">
            <img className="w-4/6 h-96" src="https://i.ibb.co/NjXd4qX/pexels-anna-pou-8330249.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-4/6 h-96 opacity-90">
            <img className="w-4/6 h-96" src="https://i.ibb.co/RgCH36R/pexels-taryn-elliott-4457125.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default BannerSlider