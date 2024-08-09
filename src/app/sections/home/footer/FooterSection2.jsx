"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { ImageFooter, QuoteIcon } from "../../../../../public";

const FooterSection2 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="">
      <div className="flex lg:flex-row flex-col ">
        <div className="h-full lg:order-1 order-2">
          <div className="lg:w-[56.5rem] lg:h-[50.9375rem]">
            <Image
              data-aos="fade-zoom-in"
              src={ImageFooter}
              alt="Image Footer"
              className="w-full h-full"
            ></Image>
          </div>
        </div>
        <div className="w-full bg-[linear-gradient(180deg,rgba(252,181,38,0.60)_-150.07%,#F4742C_100%)] lg:order-2 order-1">
          <div className="mt-[4.44rem] lg:mt-[11.88rem] lg:ml-[3.63rem] px-[0.62rem] lg:px-0 pb-[2.94rem] lg:pb-0">
            <QuoteIcon className="w-[2.4375rem] h-[1.88869rem] lg:w-[3.3125rem] lg:h-[2.56669rem]"></QuoteIcon>
            <div
              data-aos="fade-zoom-in"
              className="lg:ml-[2.81rem] text-white lg:mt-0 mt-[1rem]"
            >
              <p className="text-[1rem] lg:text-[2rem] leading-[1.5rem] lg:leading-[3rem] font-svn_gilory_medium  lg:w-[33.75rem] ">
                Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OkHub.
                Amber Capital thực sự ấn tượng với thiết kế đẹp mắt và tính năng
                dễ sử dụng mà OkHub mang lại cho chúng tôi.{" "}
              </p>
              <p className="font-svn_gilory_bold text-[1.125rem] lg:text-[1.5rem] leading-[1.875rem] mt-[1.5rem] lg:mt-[1.94rem]">
                Mrs. Ngọc Anh
              </p>
              <p className="text-[1rem] lg:text-[1.25rem] leading-[1.5rem]">
                Trưởng phòng Marketing AFM
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[10rem] lg:h-[38.88rem]"></div> */}
    </section>
  );
};

export default FooterSection2;
