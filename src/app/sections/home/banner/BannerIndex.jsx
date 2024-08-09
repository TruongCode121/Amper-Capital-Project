"use client";

import {
  Banner,
  BannerMobile1,
  BannerMobile2,
  BannerSlide1,
  BannerSlideMobile,
  Logo,
  Web_PC_Tieng_Viet,
} from "../../../../../public";
import Hero from "./Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Cấu hình Swiper để sử dụng Pagination
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import ListContent from "./ListContent";
import Image from "next/image";
const BannerIndex = () => {
  return (
    <section className="relative w-full h-auto lg:h-[100vh] ">
      <Swiper
        modules={[Pagination, Autoplay]}
        // pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="select-none sm:h-[19.25rem] lg:h-[100vh] "
      >
        <SwiperSlide>
          <Image
            src={Banner}
            alt="Banner Slide"
            className="w-full lg:h-[calc(100vh_-_4.5rem)] hidden sm:inline-block"
            priority
          ></Image>
          <Image
            src={BannerSlideMobile}
            alt="Banner Slide"
            className="w-full h-[100vh] sm:hidden"
            priority
          ></Image>

          <div className="h-full lg:h-[calc(100vh_+_4.5rem)] w-full over_bg_banner bottom-0 absolute"></div>
          <div className="px-[0.62rem] sm:pl-[1.5rem] lg:pl-0 w-full lg:container ">
            <Hero></Hero>
            <ListContent></ListContent>
          </div>
          <Logo className="absolute right-[1rem] bottom-[1.54rem] lg:bottom-[4.29rem] lg:right-[3.84rem] w-[3.90325rem] h-[4.21244rem] lg:w-[6.97269rem] lg:h-[7.52494rem]"></Logo>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={BannerSlide1}
            alt="Banner Slide"
            className="w-full h-full sm:inline-block hidden"
            priority
          ></Image>
          <Image
            src={BannerMobile1}
            alt="Banner Slide"
            className="w-full  h-[100vh] inline-block sm:hidden"
            priority
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Web_PC_Tieng_Viet}
            alt="Banner Slide"
            className="w-full h-full sm:inline-block hidden"
            priority
          ></Image>
          <Image
            src={BannerMobile2}
            alt="Banner Slide"
            className="w-full h-[100vh] inline-block sm:hidden"
            priority
          ></Image>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerIndex;
