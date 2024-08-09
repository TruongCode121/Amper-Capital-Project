"use client";

import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BannerFooter, bannerFooterMobile } from "../../../../../public";

const FooterSection1 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="relative ">
      <Image
        data-aos="fade-zoom-in"
        src={BannerFooter}
        alt="BannerFooter"
        className="w-full sm:inline-block hidden"
        priority
      ></Image>
      <Image
        data-aos="fade-zoom-in"
        src={bannerFooterMobile}
        alt="BannerFooter"
        className="w-full inline-block sm:hidden"
        priority
      ></Image>
      <div className="px-[0.62rem] w-full lg:container absolute top-[7.62rem] sm:top-1/2 sm:-translate-y-1/2 lg:translate-y-0 lg:top-[10.88rem] lg:left-1/2 lg:-translate-x-1/2">
        <h3
          data-aos="fade-right"
          className="w-full sm:w-[25rem] lg:w-[42.625rem] text-[1.875rem] lg:text-[3.5rem] leading-[2.1875rem] lg:leading-[4.375rem] font-svn_gilory_bold text-white mb-[2rem] lg:mb-[3rem] pr-[1rem] sm:pr-0"
        >
          Hãy đầu tư cùng Amber Capital để đạt được mục tiêu tài chính của bạn.
        </h3>
        <Link
          data-aos="fade-right"
          href="https://ambercapital.vn/"
          target="_blank"
          className=" text-[1rem] lg:text-[1.125rem]
        py-[1rem] px-[2.88rem] lg:px-[3.38rem] rounded-[0.625rem] 
        bg-[linear-gradient(180deg,rgba(252,181,38,0.60)_-150.07%,#F4742C_100%)]
        hover:bg-[rgba(252,181,38,0.60)]
        font-svn_gilory_bold leading-[2rem] text-white"
        >
          LIÊN HỆ NGAY
        </Link>
      </div>
    </section>
  );
};

export default FooterSection1;
