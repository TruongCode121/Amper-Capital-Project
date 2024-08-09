"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Cấu hình Swiper để sử dụng Pagination
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Aos from "aos";
import { useEffect } from "react";
import {
  imgSlide1,
  imgSlide2,
  imgSlide3,
  imgSlide4,
} from "../../../../../public";
import Image from "next/image";
import "./customSlide.css";
const sizeItem =
  " w-[10.5625rem] sm:w-[10.0625rem] h-[21.00706rem] lg:w-[18.09106rem] lg:h-[36.97138rem]";
const SlideMobileImg = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="mt-[1.5rem] lg:mt-[4.37rem] w-full lg:pl-[2.81rem]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1.3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="select-none w-[22.5rem] sm:w-full h-[23.25rem] lg:h-auto"
        breakpoints={{
          // khi màn hình >= 640px
          240: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            // spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 61.04,
          },
        }}
      >
        <SwiperSlide>
          <div data-aos="zoom-in" className={`${sizeItem} `}>
            <Image
              src={imgSlide1}
              alt="imgSlide1"
              className="w-full h-full"
              priority
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in" className={`${sizeItem}`}>
            <Image
              src={imgSlide2}
              alt="imgSlide2"
              className="w-full h-full"
              priority
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in" className={` ${sizeItem}`}>
            <Image
              src={imgSlide3}
              alt="imgSlide3"
              className="w-full h-full"
              priority
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in" className={`${sizeItem}`}>
            <Image
              src={imgSlide4}
              alt="imgSlide4"
              className="w-full h-full"
              priority
            ></Image>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SlideMobileImg;
