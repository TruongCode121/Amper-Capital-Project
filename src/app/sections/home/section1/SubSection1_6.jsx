"use client";

import TitleComponent from "@/app/components/Home/TitleComponent";
import Aos from "aos";
import { useEffect } from "react";

const SubSection1_6 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section>
      <div className="px-[0.62rem] lg:px-0 lg:container pt-[3.75rem] pb-[4.37rem] lg:py-[10rem]">
        <div className="lg:flex justify-between items-center">
          <TitleComponent title="Khách hàng AFM" className="text-secondary-30">
            <p className="lg:w-[42.8125rem]">
              Khách hàng của Amber Capital bao gồm các tổ chức tài chính, quỹ
              đầu tư tư nhân, các nhà đầu tư lớn, các công ty tài chính và các
              nhà đầu tư cá nhân.
            </p>
          </TitleComponent>
          <div className="mt-[2rem] lg:mt-0 sm:flex lg:block">
            <CardTitle className="bg-[#353862] backdrop-blur-[2px]">
              <p className="w-[14.75rem] sm:w-full lg:w-[28.3125rem] py-[3rem] sm:px-[1rem] lg:px-0 lg:py-[4rem] ml-[1.5rem] sm:mx-auto leading-[1.625rem] lg:leading-[3.425rem] line-clamp-2">
                Tổ chức, các nhà đầu tư nhân và đầu tư tư lớn
              </p>
            </CardTitle>
            <CardTitle className="bg-Loan-Afm-444 backdrop-blur-[2px]">
              <p className="w-[12.75rem] sm:w-full lg:w-[24.8125rem] py-[3rem] sm:px-[1rem] lg:px-0 lg:py-[3.81rem] ml-[1.5rem] sm:mx-auto leading-[1.625rem] lg:leading-[3.625rem] line-clamp-2">
                Công ty và các nhà đầu tư cá nhân
              </p>
            </CardTitle>
          </div>
        </div>
      </div>
    </section>
  );
};
export function CardTitle({ children, className }) {
  return (
    <section
      data-aos="fade-left"
      className={`${className} w-full lg:w-[37.25rem] text-[1.25rem] lg:text-[2.25rem] font-svn_gilory_bold text-white text-left sm:text-center`}
    >
      {children}
    </section>
  );
}
export default SubSection1_6;
