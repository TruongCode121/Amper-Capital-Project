"use client";

import Aos from "aos";
import { useEffect } from "react";

const SubSection1_9 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="bg-[#2A2960]">
      <div className="px-[0.62rem] lg:container text-white pt-[4.37rem] pb-[4.41rem] lg:pt-[5.31rem] lg:pb-[11.06rem]">
        <div className="lg:flex justify-between">
          <div data-aos="fade-right" className="w-full lg:w-[42.8125rem]">
            <H3Item>Typography</H3Item>
            <h2 className="mt-[2rem] lg:mt-[6.19rem] lg:mb-[0.61rem] leading-[5.15625rem] lg:leading-[9.375rem] uppercase text-[3.4375rem] lg:text-[7.5rem] font-svn_gilory_extrabold backdrop-blur-[2px] whitespace-nowrap">
              SVN Gilroy
            </h2>
            <H3Item className="leading-[3.45rem]">
              Bold/ Semibold/ Medium/ Regular
            </H3Item>
            <p className="text-[0.875rem] lg:text-[1.5rem] leading-[1.3125rem] lg:leading-[2.25rem] mt-[1rem] lg:mt-[2rem]">
              Font SVN Gilroy là một font chữ hiện đại, phổ biến trong thiết kế
              đồ họa và trang web. Nó được thiết kế để đem lại sự tươi mới và
              độc đáo, với những đường nét sắc sảo và các kí tự đơn giản, dễ
              đọc.
            </p>
          </div>
          <div data-aos="fade-left" className="mt-[3.12rem] lg:mt-0">
            <div className="[&_p]:text-[0.875rem] [&_p]:lg:text-[1.25rem] [&_p]:leading-[1.3125rem] [&_p]:lg:leading-[1.875rem] [&_p]:w-full [&_p]:lg:w-[35.5rem] [&_span]:font-svn_gilory_bold">
              <H3Item>Color</H3Item>
              <p className="mt-[1.5rem] lg:mt-[1.87rem] mb-[0.62rem] lg:mb-[1.75rem]">
                <span> Màu xanh:</span> đậm hay màu đen thường được sử dụng để
                thể hiện sự uy tín, sự độc lập và quyền lực.
              </p>
              <p>
                <span>Màu da cam:</span> thể thể hiện sự quyết đoán, sự tự tin
                và niềm đam mê, tương ứng với tầm nhìn và nỗ lực của công ty
                trong lĩnh vực quản lý quỹ đầu tư.
              </p>
            </div>
            <H4Item className="mt-[1.31rem]">Bộ màu Gradient</H4Item>
            <div className="flex mt-[1rem]">
              <SquareItem></SquareItem>
              <SquareItem className="bg-[linear-gradient(180deg,rgba(252,181,38,0.60)_-150.07%,#F4742C_100%)]"></SquareItem>
              <SquareItem className="bg-Loan-Afm-111"></SquareItem>
              <SquareItem className="bg-Loan-Afm-111 opacity-60"></SquareItem>
            </div>
            <H4Item className="mt-[2rem] lg:mt-[3.5rem]">
              Bộ màu Gradient
            </H4Item>
            <div className="w-full sm:w-[27.9375rem] grid grid-cols-4 mt-[1rem]">
              <RectangleItem></RectangleItem>
              <RectangleItem className="bg_RectangleItem"></RectangleItem>
              <RectangleItem className="bg-white"></RectangleItem>
              <RectangleItem className="bg-[#D9D9D9]"></RectangleItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export function SquareItem({ className = "bg-[#1F2251]" }) {
  return (
    <section
      className={`w-[6.9375rem] h-[5.17375rem] lg:h-[6.5rem] ${className}`}
    ></section>
  );
}
export function RectangleItem({ className = "bg-[#2F77AE]" }) {
  return <section className={`w-full h-[1.5rem] ${className}`}></section>;
}
export function H4Item({ className, children }) {
  return (
    <h4
      className={`${className} text-[1.75rem] leading-[3rem] font-svn_gilory_semibold `}
    >
      {children}
    </h4>
  );
}
export function H3Item({ className = "leading-[3rem]", children }) {
  return (
    <h3
      className={`${className} text-[1.5rem] lg:text-[2rem]  font-svn_gilory_bold backdrop-blur-[2px]`}
    >
      {children}
    </h3>
  );
}
export default SubSection1_9;
