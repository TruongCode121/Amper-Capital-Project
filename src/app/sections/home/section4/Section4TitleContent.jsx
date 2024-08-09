"use client";

import TitleComponent from "@/app/components/Home/TitleComponent";

const Section4TitleContent = () => {
  return (
    <section className="lg:flex items-start lg:space-x-[7.19rem]">
      <TitleComponent
        title="Responsive"
        className="text-secondary-30"
      ></TitleComponent>
      <TitleComponent className="text-secondary-30">
        <p className="leading-[1.3125rem] lg:leading-[2rem] lg:w-[32.875rem]">
          Với thiết kế UI responsive, người xem sẽ có một trải nghiệm tương đồng
          trên điện thoại và các môi trường khác
        </p>
      </TitleComponent>
    </section>
  );
};

export default Section4TitleContent;
