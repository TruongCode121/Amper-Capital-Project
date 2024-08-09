"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { IconSubSec1_1, img_subSec1_1 } from "../../../../../public";

const dataItem = [
  { title: "Hơn 14 năm kinh nghiệm trong lĩnh vực quản lý quỹ" },
  { title: "Lợi nhuận lên tới 15% hằng năm" },
  { title: "70 tỷ vốn điều lệ" },
  { title: "100 % miễn hoàn toàn phí giao dịch" },
];

const SubSection1_1 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="px-[0.62rem] lg:container">
      <div className="flex lg:flex-row flex-col lg:space-x-[4.13rem]">
        <div
          data-aos="fade-right"
          className="lg:h-[39.25rem] lg:w-[32rem] lg:order-1 order-2"
        >
          <Image
            src={img_subSec1_1}
            alt="women human"
            className="w-full h-full"
          ></Image>
        </div>
        <div
          data-aos="fade-left"
          className="lg:pt-[7.12rem] lg:order-2 order-1"
        >
          <h3 className="font-svn_gilory_bold leading-[2rem] lg:leading-[3rem] [&_span]:text-Loan-Afm-111 text-[1.5rem] lg:text-[2.375rem] lg:w-[45.75rem]">
            AFM tập trung tìm kiếm cơ hội đầu tư tại châu Âu và quyết định đầu
            tư dựa trên <span>sự chuyên môn</span> và{" "}
            <span>hiểu biết sâu sắc.</span>
          </h3>
          <div className="mt-[1.5rem] lg:mt-[2.5rem]">
            <h5 className="font-svn_gilory_bold text-[1.25rem] tracking-[0.00625rem] leading-[1.625rem] text-[#1F2251]">
              Thành tựu và giải thưởng
            </h5>
            <div className="bg_line mt-[0.5rem] mb-[1rem] lg:my-[1rem]"></div>
            {dataItem.map((item, index) => (
              <div
                key={index}
                className="flex mb-[0.62rem] lg:mb-[1rem] space-x-[0.5rem]"
              >
                <IconSubSec1_1 className="pt-1"></IconSubSec1_1>
                <p className="text-[0.875rem] lg:text-[1.125rem] tracking-[0.00563rem] leading-[1.6875rem] font-svn_gilory_medium text-secondary-30">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubSection1_1;
