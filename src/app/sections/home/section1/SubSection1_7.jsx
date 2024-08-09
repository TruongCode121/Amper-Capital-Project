"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import {
  QuoteIconSub7Section1,
  subSection1_7_Image,
} from "../../../../../public";

const SubSection1_7 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="relative">
      <div className="bg-[linear-gradient(180deg,rgba(252,181,38,0.60)_-150.07%,#F4742C_100%)] opacity-10 absolute top-0 left-0 w-full h-full"></div>
      <h3
        data-aos="fade-left"
        className="tracking-[0.45313rem] lg:tracking-[0.90625rem] uppercase text-[6.25rem] lg:text-[12.5rem] text-[rgba(255,255,255,0.80)] opacity-50 whitespace-nowrap 
        font-svn_gilory_extrabold absolute top-1/2 -translate-y-[67%] lg:top-auto lg:translate-y-0 lg:bottom-0 -left-[6.5rem] lg:left-[14.75rem]"
      >
        AMBER CAPITAL
      </h3>
      <div className="px-[0.62rem] lg:container relative">
        <div className="lg:flex justify-between">
          <div className="pt-[3.75rem] lg:pt-[9.19rem] relative">
            <QuoteIconSub7Section1 className="w-[4.375rem] h-[3.4375rem] lg:w-[8.125rem] lg:h-[6.3125rem] lg:-ml-[2.3rem]"></QuoteIconSub7Section1>
            <h4
              data-aos="zoom-out"
              className="w-full lg:w-[42.625rem] leading-[2.625rem] lg:leading-[4.375rem] font-svn_gilory_bold text-secondary-30 text-[2rem] lg:text-[3.5rem] pl-[1.5rem] lg:pl-0 lg:ml-[2.81rem] -mt-[1rem] lg:-mt-[4.3rem] select-none"
            >
              Mục tiêu giới thiệu về công ty sản phẩm và thu hút nhà đầu tư tiềm
              năng.
            </h4>
          </div>
          <div
            data-aos="fade-left"
            className="mt-[4.06rem] w-[25.15963rem] h-[31.5625rem] lg:w-[41.75rem] lg:h-[49.5rem] mx-auto flex-shrink-0 lg:-mb-2"
          >
            <Image
              src={subSection1_7_Image}
              alt="subSection1_7 Image"
              className="w-full h-full"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubSection1_7;
