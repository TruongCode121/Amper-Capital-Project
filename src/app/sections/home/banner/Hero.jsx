"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const refH1 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      refH1.current,
      { x: -150, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5 }
    );
    // gsap.fromTo(refH1.current, { opacity: 0 }, { opacity: 1, duration: 5 });
  }, []);
  return (
    <section
      ref={refH1}
      className={`absolute w-full hero_respon top-[30%] sm:top-[15%] lg:top-[13%] text-white`}
    >
      <div>
        <h3 className="font-svn_gilory_medium text-[1rem] overflow-hidden sm:text-[0.5rem] lg:text-[1.5rem] leading-[1.5rem] lg:leading-[2.25rem] uppercase">
          Amber Capital
        </h3>
        <h1
          // ref={refH1}
          className="text-[2.25rem] sm:text-[1.5rem] lg:text-[4.6875rem] leading-[2.8125rem] sm:leading-[2rem]
         lg:leading-[5.3125rem] mt-[1rem] sm:mt-0 lg:mt-[1rem] font-svn_gilory_bold sm:font-svn_gilory_extrabold w-full sm:w-[17rem] lg:w-[50.25rem]"
        >
          AFM - Đầu tư tài chính hiệu quả cùng Amber Capital
        </h1>
      </div>
    </section>
  );
};

export default Hero;
