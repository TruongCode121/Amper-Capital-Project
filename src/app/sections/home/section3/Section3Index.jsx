"use client";

import Image from "next/image";
import {
  imgRightSection3_Mobile,
  imgRightSection3_PC,
  Section3_bannerIMG,
  Section3_bannerMobile,
} from "../../../../../public";
import { useMediaQuery } from "react-responsive";
import LineChart from "./LineChart";
import { useEffect } from "react";
import Aos from "aos";
const Section3Index = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <section className=" relative">
      <div className="w-full h-full  absolute top-0 left-0">
        <Image
          src={isMobile ? Section3_bannerMobile : Section3_bannerIMG}
          alt="secion3 banner"
          className="w-full h-full"
        ></Image>
      </div>
      <div className="px-[0.62rem] w-full lg:container relative pb-[4.88rem] lg:pb-[8rem] lg:pt-[6.69rem] ">
        <div className="lg:flex  lg:space-x-[4.63rem] lg:items-end ">
          <div className="flex flex-col">
            <PictureFrames className="lg:order-1 order-2 mt-[1rem] lg:mt-0">
              <div
                data-aos="fade-up"
                className="w-full h-full bg-white p-[0.5rem]"
              >
                <LineChart></LineChart>
              </div>
            </PictureFrames>
            <div className="text-white lg:order-2 order-1">
              <h3
                data-aos="fade-up"
                className="text-[1.5rem] leading-[2rem] lg:text-[2.8125rem] lg:leading-[5rem] font-svn_gilory_medium mt-[3.13rem] lg:mt-[3.81rem]"
              >
                Tích hợp <span className="font-svn_gilory_bold">BIỂU ĐỒ</span>
              </h3>
              <p
                data-aos="fade-up"
                className="text-[0.875rem] lg:text-[1.5rem] leading-[1.3125rem] lg:leading-[2.125rem] font-svn_gilory_medium lg:w-[40.4375rem] 
              mt-[0.62rem] lg:mt-[0.5rem]"
              >
                Các biểu đồ được tích hợp nhằm giúp khách hàng có cái nhìn tổng
                quan và dễ hiểu hơn về tình hình tài chính và hoạt động đầu tư
                của công ty
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 mt-[1rem] lg:mt-0">
            <PictureFrames>
              <Image
                data-aos="fade-left"
                src={isMobile ? imgRightSection3_Mobile : imgRightSection3_PC}
                alt="imgRightSection3 PC"
                className="w-full h-full"
              ></Image>
            </PictureFrames>
          </div>
        </div>
      </div>
    </section>
  );
};
export function PictureFrames({ children, className }) {
  return (
    <section
      className={`${className} w-full lg:w-[50.9375rem] h-[13.8125rem] sm:h-[20rem] lg:h-[37.625rem] bg-white/80 p-[0.5rem] lg:p-[1rem] rounded-[0.5rem] lg:rounded-[1.5rem]`}
    >
      <div className="overflow-hidden h-full w-full  rounded-lg lg:rounded-[1rem]">
        {children}
      </div>
    </section>
  );
}
export default Section3Index;
