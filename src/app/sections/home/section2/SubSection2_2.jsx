"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  BannerSection2_2,
  img1_sub2Section2,
  imgLeft2Section2_2,
  imgRightLastSection2_2,
} from "../../../../../public";
import { ArrowRight } from "lucide-react";
import PieChartRespon from "./PieChartRespon";
import TitleComponent from "@/app/components/Home/TitleComponent";
import PictureFramesComponent from "@/app/components/Home/PictureFramesComponent";
import Aos from "aos";

const contentData = [
  {
    name: "Ông Hoang D.Quan",
    position: "Chủ tịch HĐ Đầu tư và sáng lập Quỹ Trái phiếu An toàn Amber.",
  },
  {
    name: " Ông Nghiêm Khắc Đạt",
    position: "Thành viên Độc lập Ban đại diện Quỹ",
  },
  {
    name: "Ông Nguyễn Trung Hiếu",
    position: "Thành viên Độc lập Ban đại diện Quỹ",
  },
  {
    name: "Bà Trương Thị Tiểu Ấn",
    position: "Thành viên Độc lập Ban đại diện Quỹ",
  },
];

const SubSection2_2 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="w-full h-full relative pb-[5rem]">
      <div className="bg-[linear-gradient(180deg,rgba(252,181,38,0.60)_-150.07%,#F4742C_100%)] absolute top-0 w-full h-full opacity-10"></div>
      <div className="w-full h-[8.5rem] sm:h-[11rem] lg:h-[23rem] bg-white relative"></div>
      <div className="px-[0.62rem] lg:container relative">
        <div
          className="w-full lg:w-[69.25rem] h-[12.8125rem]
         sm:h-[20rem] lg:h-[37.8125rem] rounded-[0.5rem] lg:rounded-t-[1.5rem] bg-white 
       p-[0.5rem] lg:p-[1rem] ml-auto -mt-[6.5rem] sm:-mt-[10rem] lg:-mt-[20rem]"
        >
          <div
            data-aos="zoom-in"
            className="overflow-hidden w-full h-full rounded-[0.5rem] lg:rounded-t-[1rem] bg-black"
          >
            <Image
              src={BannerSection2_2}
              alt="BannerSection2"
              className="w-full h-full"
            ></Image>
          </div>
        </div>
        <div className="lg:mt-[5.13rem] lg:flex justify-between items-start">
          <div>
            <div className="flex flex-col">
              <PictureFramesComponent className="mt-[2.13rem] lg:mt-0 order-2 lg:order-1">
                <Image
                  data-aos="zoom-in"
                  src={img1_sub2Section2}
                  alt="Menu"
                  className="w-full "
                ></Image>
              </PictureFramesComponent>
              <div className="lg:order-2 order-1">
                <h3
                  data-aos="fade-up"
                  className="lg:w-[31.6875rem] leading-[1.6875rem] lg:leading-[3.3125rem] text-[1.5rem] lg:text-[2.5rem] text-secondary-30 font-svn_gilory_bold mt-[2.5rem]"
                >
                  Đầu tư{" "}
                  <span className="uppercase text-Loan-Afm-111">hiệu quả</span>{" "}
                  cùng Amber Capital
                </h3>
                <TitleComponent>
                  <p className="lg:w-[42.6875rem] text-secondary-30 mt-[1rem]">
                    So sánh đầu tư vào quỹ ASBF & gửi tiết kiệm Ngân hàng (Vui
                    lòng nhập số tiền và kỳ hạn bất kỳ mà bạn dự định đầu tư/
                    gửi tiết kiệm)
                  </p>
                </TitleComponent>
              </div>
            </div>
            <PictureFramesComponent className="mt-[2.03rem] lg:mt-[4.38rem]">
              <Image
                data-aos="zoom-in"
                src={imgLeft2Section2_2}
                alt="imgLeft2Section2_2"
                className="w-full h-full"
              ></Image>
            </PictureFramesComponent>
            <TitleComponent>
              <p className="lg:w-[41.5625rem] text-secondary-30 mt-[1rem] lg:mt-[2.5rem]">
                Đầu tư siêu an toàn - tương tự tiết kiệm tiền gửi tại các ngân
                hàng, tỷ suất sinh lời hấp dẫn mà không yêu cầu thời hạn cam
                kết.
              </p>
            </TitleComponent>
          </div>
          <div>
            <div className="flex flex-col">
              <div
                className="w-full lg:w-[43.1875rem] bg-white p-[0.5rem] lg:p-[1rem]
               rounded-[1rem] lg:rounded-[1.5rem] lg:order-1 order-2 mt-[1rem] lg:mt-0"
              >
                <div className="box_shadow_custom w-full h-full  rounded-[0.5rem,] lg:rounded-[1rem]  pb-[2rem]">
                  <div className="relative">
                    <div data-aos="fade-left" className="">
                      {/* <PieChart></PieChart> */}
                      <PieChartRespon></PieChartRespon>
                    </div>
                  </div>
                  <div className="px-[0.62rem] lg:px-[2.5rem] mt-[2.5rem] sm:mt-[3rem] lg:mt-[4rem]">
                    <div className="w-full bg-secondary-30 px-[1rem] pt-[1rem] lg:pt-[1.5rem] pb-[0.5rem] rounded text-white">
                      <p
                        data-aos="fade-up"
                        className="text-[0.6rem] font-svn_gilory_regular text-Loan-Afm-111"
                      >
                        Tối ưu thời gian và lợi nhuận
                      </p>
                      <h2
                        data-aos="fade-up"
                        className="font-svn_gilory_semibold tracking-wide mt-[0.62rem] mb-[1rem] lg:mb-[2rem]"
                      >
                        BAN ĐẠI DIỆN QUỸ
                      </h2>
                      {contentData.map((item, idx) => (
                        <div
                          data-aos="fade-up"
                          key={idx}
                          className="text-[0.45rem] flex justify-between border-b-[1px] border-white border-opacity-10  mb-[0.5rem] lg:mb-[1.5rem] pb-[0.5rem]"
                        >
                          <div className="flex">
                            <p className="font-svn_gilory_semibold w-[6rem] lg:w-[8rem]">
                              {item.name}
                            </p>
                            <p className="font-svn_gilory_thin w-[45%] sm:w-auto">
                              {item.position}
                            </p>
                          </div>
                          <div className="text-Loan-Afm-111 flex items-center cursor-pointer animate-pulse flex-shrink-0">
                            Chi tiết
                            <div className="size-3 bg-Loan-Afm-111 rounded-full flex items-center justify-center ml-1">
                              <ArrowRight size={12} color="white"></ArrowRight>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <h2
                      data-aos="fade-up"
                      className="font-svn_gilory_semibold tracking-wide mt-[2rem] lg:mt-[3rem] mb-[1rem] lg:mb-[1.5rem] uppercase text-secondary-30 "
                    >
                      Biểu phí giao dịch
                    </h2>
                    <div
                      data-aos="fade-left"
                      className="text-[0.4rem] sm:text-[0.45rem] select-none"
                    >
                      <div className="w-full flex">
                        <GridItem
                          header="Quỹ ASBF"
                          roudedHeader="rounded-tl"
                          roudedContent="rounded-bl"
                          className="w-[24%]"
                        ></GridItem>
                        <GridItem header="Chi phí quản lý" className="w-[16%]">
                          0,85% NAV/năm
                        </GridItem>
                        <GridItem header="Phi phát hành" className="w-[20%]">
                          Miễn phí
                        </GridItem>
                        <GridItem header="Phi mua" className="w-[20%]">
                          Miễn phí
                        </GridItem>
                        <GridItem
                          header="Phi bán"
                          roudedHeader="rounded-tr"
                          roudedContent="rounded-br border-r-[1px]"
                          className="w-[20%]"
                        >
                          Miễn phí
                        </GridItem>
                      </div>
                    </div>
                    <p className="text-[0.45rem] mt-[0.8rem] italic text-secondary-30">
                      Lợi nhuận mục tiêu lên tới 6.2%/năm của Quỹ ASBF đã là lợi
                      nhuận sau khi đã trừ phi quản lý trên đây: (không bao gồm
                      phi chuyển khoản của ngân hàng)
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="mt-[2rem] lg:mt-[2.5rem] text-[1.5rem] lg:text-[2.5rem] leading-[2.25rem] lg:leading-[3.3125rem] font-svn_gilory_bold text-secondary-30">
                  Danh mục quỹ đầu tư
                </h3>
                <TitleComponent>
                  <p className="lg:w-[41.5625rem] text-secondary-30 mt-[0.5rem] lg:mt-[1rem]">
                    Đầu tư siêu an toàn - tương tự tiết kiệm tiền gửi tại các
                    ngân hàng, tỷ suất sinh lời hấp dẫn mà không
                  </p>
                </TitleComponent>
              </div>
            </div>
            <div className="flex flex-col">
              <PictureFramesComponent className="lg:order-1 order-2 mt-[1rem] lg:mt-[4.38rem]">
                <Image
                  data-aos="zoom-in"
                  src={imgRightLastSection2_2}
                  alt="imgRightLastSection2_2"
                  className="w-full h-full lg:block hidden"
                ></Image>
                <Image
                  data-aos="zoom-in"
                  src={img1_sub2Section2}
                  alt="Menu"
                  className="w-full block lg:hidden"
                ></Image>
              </PictureFramesComponent>
              <h3 className="order-1 lg:order-2 mt-[2rem] lg:mt-[2.5rem] text-[1.5rem] lg:text-[2.5rem] leading-[3.3125rem] font-svn_gilory_bold text-secondary-30">
                Tải app trải nghiệm ngay
              </h3>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export function GridItem({
  roudedHeader,
  roudedContent,
  header,
  children,
  className,
}) {
  return (
    <section className={`${className} text-white font-svn_gilory_semibold `}>
      <h4
        className={`bg-Loan-Afm-111 h-[1rem] flex items-center pl-[0.2rem] lg:pl-[0.5rem] ${roudedHeader}`}
      >
        {header}
      </h4>
      <p
        className={`text-secondary-30 border-l-[1px] border-b-[1px] border-t-0 border-Loan-Afm-111 h-[2rem]
         flex items-center pl-[0.2rem] lg:pl-[0.5rem] font-svn_gilory_thin ${roudedContent}`}
      >
        {children}
      </p>
    </section>
  );
}

export default SubSection2_2;
