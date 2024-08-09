"use client";

import TitleComponent from "@/app/components/Home/TitleComponent";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { bannerSub3Section1, sub3Section1_img } from "../../../../../public";

const SubSection1_3 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="px-[0.62rem] lg:px-0 mt-[3.75rem] lg:mt-[6.38rem] pb-[5.62rem] lg:pb-[9rem]">
      <TitleComponent
        title="3C Research"
        className="text-secondary-30 text-center"
      >
        <p className="w-[20.125rem] sm:w-full lg:w-[53.5rem] line-clamp-6 mx-auto">
          Amber Capital tạo sự khác biệt khi luôn đặt mình vào vị trí của khách
          hàng vì khách hàng là nguồn động lực để chúng tôi phát triển lớn mạnh
          hơn
        </p>
      </TitleComponent>
      <div data-aos="zoom-in" className="flex justify-center">
        <div className=" mx-auto  bg-black  mt-[2.94rem] w-[69.25rem] h-[36.375rem] box_shadow_custom rounded-[1rem]  lg:inline-block hidden">
          <div className="overflow-hidden w-full h-full rounded-[1rem]">
            <Image
              src={sub3Section1_img}
              alt="sub3Section1 img"
              className="w-full lg:-mt-[10rem]"
            ></Image>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="lg:hidden block p-[0.5rem] w-full bg-white box_shadow_custom rounded-[0.5rem] mt-[1.5rem]"
      >
        <div className="w-full h-full overflow-hidden rounded-[0.5rem]">
          <Image
            src={bannerSub3Section1}
            alt="sub3Section1 img"
            className="w-full lg:-mt-[10rem]"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default SubSection1_3;
