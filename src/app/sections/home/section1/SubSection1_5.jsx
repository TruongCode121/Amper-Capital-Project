"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { subSection1_5_Image } from "../../../../../public";

const memberData = [
  { title: "Quỹ mở ASBF" },
  { title: "Quỹ thành viên ANE" },
  { title: "Quỹ thành viên AFMF" },
  { title: "Quỹ thành viên ATF" },
];
const SubSection1_5 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="relative">
      <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%)] w-full h-full absolute top-0 left-0 lg:inline-block hidden"></div>
      <div className="bg-[linear-gradient(180deg,rgba(252,181,38,0.57)_-150.07%,rgba(244,116,44,0.95)_100%)] w-full h-full absolute top-0 left-0"></div>

      <div className="w-full h-full lg:inline-block hidden">
        <Image
          src={subSection1_5_Image}
          alt="subSection1_5 Image"
          className="w-full h-full"
        ></Image>
      </div>
      <div className="relative lg:absolute top-0 left-1/2 -translate-x-1/2">
        <div className="px-[0.62rem] lg:container w-full mx-auto pt-[3.75rem] lg:pt-[6.88rem] ">
          <p
            data-aos="fade-right"
            className="font-svn_gilory_bold text-white leading-[2.25rem] lg:leading-[3.625rem] w-full lg:w-[37.25rem] text-[1.5rem] lg:text-[2.5rem] font-normal "
          >
            “ Amber Capital cạnh tranh với các đối thủ lớn như Blackstone, KKR
            và Bridgewater trong lĩnh vực quản lý quỹ đầu tư. “
          </p>
          <div className="relative">
            <div className="lg:absolute top-[9.19rem] mt-[2.5rem] lg:mt-0">
              <h3
                data-aos="fade-right"
                className="text-[rgba(255,255,255,0.50)] leading-[2.25rem] lg:leading-[3.625rem] text-[1.5rem] lg:text-[2.5rem] backdrop-blur-[2px] font-svn_gilory_bold "
              >
                Các loại quỹ
              </h3>
            </div>
            <div className="flex flex-col items-center lg:items-end lg:order-2 order-3 mt-[1.06rem] lg:mt-0">
              <div className="w-full lg:w-auto lg:order-1 order-2">
                <div
                  data-aos="fade-left"
                  className="bg-[#1F2251] py-[2.5rem] w-full text-center lg:py-[5.62rem] sm:px-[5.5rem] inline-block text-white backdrop-blur-[2px] text-[1.5rem] font-svn_gilory_bold lg:text-[2.25rem]"
                >
                  Nghành nghề kinh doanh
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 lg:order-2 order-1">
                <MemberItem bgOpacity="bg-[rgba(255,255,255,0.1)]">
                  Quỹ mở ASBF
                </MemberItem>
                <MemberItem bgOpacity="bg-[rgba(255,255,255,0.3)]">
                  Quỹ thành viên ANE
                </MemberItem>
                <MemberItem>Quỹ thành viên AFMF</MemberItem>
                <MemberItem bgOpacity="bg-[rgba(255,255,255,0.65)]">
                  Quỹ thành viên ATF
                </MemberItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export function MemberItem({
  bgOpacity = "bg-[rgba(255,255,255,0.5)]",
  children,
}) {
  return (
    <div
      className={`${bgOpacity} hover:scale-105 transition-all duration-300 select-none lg:w-full h-[11.125rem] flex items-center justify-center text-center text-[1.25rem] lg:text-[1.875rem] font-svn_gilory_bold leading-[2.1875rem] backdrop-blur-[2px] text-white px-[1.9rem] lg:px-[4rem]`}
    >
      {children}
    </div>
  );
}
export default SubSection1_5;
