"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import {
  subSection1_8_GridMobile1,
  subSection1_8_GridMobile2,
  subSection1_8_GridPc1,
  subSection1_8_GridPc2,
} from "../../../../../public";

const SubSection1_8 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section>
      <div className="px-[0.62rem] lg:container pt-[3.13rem] lg:pt-[8.75rem]">
        {/* flex section 1 */}
        <div className="sm:flex sm:flex-col lg:flex-row  items-center lg:space-x-[8.75rem]">
          <div
            data-aos="zoom-in"
            className="relative w-full lg:w-[57.6875rem] lg:h-[38.125rem] order-2 lg:order-1 sm:inline-block hidden sm:mt-[4rem]"
          >
            <div className="sm:w-[24.9rem] lg:w-[44.55rem] h-[3.3125rem] absolute -top-[3.3125rem] left-1/2 -translate-x-[calc(50%_+_0.1rem)]">
              <div className="relative w-full h-full">
                <StraightItem></StraightItem>
                <HorizontalItem className="top-1/2 -translate-y-1/2"></HorizontalItem>
                <StraightItem className="h-[3.3125rem] right-0"></StraightItem>
                <NumberItem className="top-2 left-1/2 -translate-x-1/2">
                  1290px
                </NumberItem>
                <WrapLineItem></WrapLineItem>
                <WrapLineItem
                  widthWrap="w-[0.7rem] lg:w-[1.25rem]"
                  leftWrap="left-[10rem] lg:left-[17.9rem]"
                >
                  32
                </WrapLineItem>
              </div>
            </div>
            <Image
              src={subSection1_8_GridPc1}
              alt="subSection1_8_GridPc1"
              className="w-full h-full"
            ></Image>
          </div>
          {/* content */}
          <ContentItem>
            <p className=" font-svn_gilory_medium lg:pb-[2.5rem]">1600 x 850</p>
            <p>
              <span>12 colum</span>
            </p>
            <p>
              Type: <span>Center</span>
            </p>
            <p>
              Gutter width: <span>32px</span>
            </p>
            <p>
              Colum width: <span>107.5 px</span>
            </p>
          </ContentItem>
          {/* mobie */}
          <div className="inline-block sm:hidden w-full h-full mt-[0.44rem]">
            <Image
              src={subSection1_8_GridMobile1}
              alt="subSection1_8_GridMobile1"
              className="w-full h-full"
            ></Image>
          </div>
        </div>
        {/* flex section 2 */}
        <div className="sm:flex sm:flex-col lg:flex-row lg:justify-between pt-[0.5rem] lg:pt-0 items-start lg:space-x-[8.75rem] mt-[0.5rem] lg:mt-[9.19rem] lg:pr-[6rem]">
          {/* content */}
          <ContentItem titleHeader="Mobile" className="lg:ml-[6.1rem]">
            <p className=" font-svn_gilory_medium lg:pb-[2.5rem]">375 x 812</p>
            <p>
              <span>2 colum</span>
            </p>
            <p>
              Type: <span>Center</span>
            </p>
            <p>
              Gutter width: <span>16px</span>
            </p>
            <p>
              Colum width: <span>171.5 px</span>
            </p>
          </ContentItem>
          <div
            data-aos="fade-up"
            className="inline-block sm:hidden w-full h-full mt-[3.7rem]"
          >
            <div className="relative">
              <Image
                src={subSection1_8_GridMobile2}
                alt="subSection1_8_GridMobile2"
                className="w-full h-full -mb-[0.3rem]"
              ></Image>
              <NumberItem className="-top-[2.3rem] left-1/2 -translate-x-1/2">
                343px
              </NumberItem>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-full mt-[5rem] lg:mt-0 lg:w-[41.99906rem] sm:inline-block hidden"
          >
            <div className="relative w-full">
              <Image
                src={subSection1_8_GridPc2}
                alt="subSection1_8_GridPc2"
                className="w-full h-full"
              ></Image>
              <div className="absolute sm:w-[23.5rem] lg:w-[30.625rem] h-[2rem] lg:h-[3.3125rem] -top-[2rem] lg:-top-[3.3125rem] left-1/2 -translate-x-1/2">
                <div className="relative w-full h-full">
                  <StraightItem></StraightItem>
                  <HorizontalItem className="top-1/2"></HorizontalItem>
                  <StraightItem className=" h-full right-0"></StraightItem>

                  <NumberItem className="top-1 left-1/2 -translate-x-1/2">
                    343px
                  </NumberItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export function WrapLineItem({
  widthWrap = "w-[1.6rem] lg:w-[2.825rem]",
  leftWrap = "left-[6.4rem] lg:left-[11.32rem]",
  children = 107.5,
}) {
  return (
    <section
      className={`${widthWrap} ${leftWrap}  h-[1.5rem] absolute  top-[50%]`}
    >
      <div className="relative w-full h-full">
        <StraightItem className="bottom-0 h-[1rem] lg:h-[1.5rem] "></StraightItem>
        <HorizontalItem
          className="top-1/2 border-[1px] border-dashed"
          bgColor="bg-none"
        ></HorizontalItem>
        <StraightItem className="bottom-0 h-[1rem] lg:h-[1.5rem] right-0"></StraightItem>
        <NumberItem className="top-[1px] lg:top-[0.8rem] left-1/2 -translate-x-1/2">
          {children}
        </NumberItem>
      </div>
    </section>
  );
}
export function ContentItem({
  titleHeader = "Desktop",
  children,
  className = "order-1 lg:order-2 ",
}) {
  return (
    <section data-aos="fade-up" className={`w-full lg:w-auto ${className}`}>
      <h2 className="font-svn_gilory_bold leading-[2.25rem] lg:leading-[5.625rem] text-[1.5rem] lg:text-[3.75rem] text-secondary-30">
        {titleHeader}
      </h2>
      <div className="flex justify-end mr-[1.7rem]">
        <div className="[&_span]:text-Loan-Afm-111 leading-[1.3125rem] lg:leading-[2.375rem]  text-[0.875rem] lg:text-[1.5rem] font-svn_gilory_semibold [&_p]:mt-[0.5rem] [&_p]:lg:mt-[1rem]">
          {children}
        </div>
      </div>
    </section>
  );
}
export function StraightItem({ className = "h-full" }) {
  return (
    <section
      className={`w-[0.0625rem] ${className} bg-[rgba(37,36,37,0.20)] absolute`}
    ></section>
  );
}
export function HorizontalItem({
  className,
  bgColor = " bg-[rgba(37,36,37,0.20)]",
}) {
  return (
    <section
      className={`w-full h-[0.0625rem] ${className} ${bgColor} absolute`}
    ></section>
  );
}
export function NumberItem({ className, children }) {
  return (
    <section
      className={` ${className} text-trinh-Gumac-textden absolute text-[0.5rem] lg:text-[0.625rem]`}
    >
      {children}
    </section>
  );
}
export default SubSection1_8;
