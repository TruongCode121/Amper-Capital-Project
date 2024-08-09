"use client";

import TitleComponent from "@/app/components/Home/TitleComponent";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import {
  bgImgSubSec1_2,
  ImgItemRightSubSec1_2,
  ImgItemRightSubSec1_2_mobile,
} from "../../../../../public";

const SubSection1_2 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="relative ">
      <Image
        src={bgImgSubSec1_2}
        alt="bgImgSubSec1 2"
        className="w-[43.5rem] h-[20.4375rem] absolute bottom-0"
      ></Image>
      <div className="bg_gradient_subSection1_2 absolute top-0 w-full h-full"></div>
      <div className="w-full lg:container relative">
        <div className="lg:flex items-center lg:space-x-[2.19rem]">
          <div
            data-aos="fade-right"
            className="text-white lg:-mt-[7rem] px-[0.62rem] lg:px-0 pt-[3.75rem] pb-[2rem] lg:pt-0 lg:pb-0"
          >
            <TitleComponent title="Bối cảnh">
              <p className="lg:w-[35.0625rem] line-clamp-6 font-svn_gilory_regular lg:font-svn_gilory_medium">
                Với định hướng chiến lược đầu tư vào những doanh nghiệp đầu
                ngành, có nhiều tiềm năng và cơ hội phát triển trên thị trường
                trong nước, Amber Capital mở ra nhiều cơ hội thuận lợi trong
                việc đầu tư tại thị trường Việt Nam cho các nhà đầu tư cá nhân,
                tổ chức trong và ngoài nước.
              </p>
            </TitleComponent>
          </div>
          <div data-aos="zoom-in" className="flex-shrink-0">
            <div className="lg:w-[56.5rem] lg:h-[50.9375rem]">
              <Image
                src={ImgItemRightSubSec1_2}
                alt="dash board"
                className="w-full h-full hidden sm:inline-block"
              ></Image>
              <Image
                src={ImgItemRightSubSec1_2_mobile}
                alt="dash board"
                className="w-full h-full sm:hidden inline-block"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubSection1_2;
