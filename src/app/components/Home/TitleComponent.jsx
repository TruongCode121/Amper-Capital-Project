"use client";
import Aos from "aos";
import React, { useEffect } from "react";

const TitleComponent = ({ title, children, className = "text-white" }) => {
  useEffect(() => {
    Aos.init({
      // Cấu hình tùy chọn tại đây
      duration: 1200,
    });
  }, []);
  return (
    <section className={className}>
      <h2
        data-aos="fade-up"
        className="font-svn_gilory_bold leading-[2.25rem] lg:leading-[5.625rem] text-[1.5rem] lg:text-[3.75rem]"
      >
        {title}
      </h2>
      <div
        data-aos="fade-up"
        className="text-[0.875rem] lg:text-[1.5rem] leading-[1.3125rem] lg:leading-[2.375rem] font-svn_gilory_medium"
      >
        {children}
      </div>
    </section>
  );
};

export default TitleComponent;
