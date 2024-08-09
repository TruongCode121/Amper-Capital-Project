"use client";

import TitleComponent from "@/app/components/Home/TitleComponent";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { imgLeftSub4Section1 } from "../../../../../public";

const SubSection1_4 = () => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className="relative py-[3.75rem] lg:py-[7.44rem]">
      <div className="bg-[linear-gradient(180deg,rgba(252,181,38,0.60)_-150.07%,#F4742C_100%)] opacity-15 w-full h-full absolute top-0 left-0"></div>
      <div className="px-[0.62rem] lg:container relative">
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <div
            data-aos="fade-right"
            className="lg:w-[46.625rem] lg:h-[38.3125rem] lg:order-1 order-2 mt-[1.5rem] lg:mt-0"
          >
            <Image
              src={imgLeftSub4Section1}
              alt="imgLeftSub4 Section1"
              className="w-full h-full"
            ></Image>
          </div>
          <TitleComponent
            title="Vị trí thương hiệu"
            className="text-secondary-30 order-1 lg:order-2"
          >
            <p className="lg:w-[35.0625rem] mt-[0.5rem] lg:mt-0">
              Amber Capital là một trong những công ty quản lý quỹ đầu tư hàng
              đầu, với danh tiếng mạnh mẽ và uy tín trong cộng đồng đầu tư. Các
              hoạt động đầu tư của Amber Capital tập trung vào các cơ hội đầu tư
              giá trị và tăng trưởng trong các lĩnh vực khác nhau, được thực
              hiện bởi đội ngũ chuyên gia tận tâm và chuyên nghiệp.
            </p>
          </TitleComponent>
        </div>
      </div>
    </section>
  );
};

export default SubSection1_4;
