"use client";

import gsap from "gsap";
import { useRef, useEffect } from "react";
const ListContent = () => {
  const refGridItem1 = useRef(null);
  const refGridItem2 = useRef(null);
  const refGridItem3 = useRef(null);
  const refGridItem4 = useRef(null);
  const handleGridAnimationItem = (ref, timeDelay) => {
    gsap.fromTo(
      ref,
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: timeDelay }
    );
  };
  useEffect(() => {
    handleGridAnimationItem(refGridItem1.current, 0.5);
    handleGridAnimationItem(refGridItem2.current, 1);
    handleGridAnimationItem(refGridItem3.current, 1.5);
    handleGridAnimationItem(refGridItem4.current, 2);
    // gsap.fromTo(refH1.current, { opacity: 0 }, { opacity: 1, duration: 5 });
  }, []);
  return (
    <section className="absolute bottom-[10%]">
      <div
        className={`grid grid-cols-2 w-full gap-y-[0.88rem] sm:gap-y-0 sm:gap-x-0 sm:w-auto sm:flex sm:space-x-[2rem] lg:space-x-[5.9rem]`}
      >
        <div ref={refGridItem1} className="">
          <TilteItem>Khách hàng</TilteItem>
          <ContentItem className="lg:w-full">
            <span className="lg:inline-block hidden">
              Công ty Amber Capital
            </span>
            <span className="inline-block  lg:hidden leading-4 whitespace-normal sm:w-[5rem] lg:w-full">
              Công ty cổ phần Quản lý quỹ Amber
            </span>
          </ContentItem>
        </div>
        <div ref={refGridItem2}>
          <TilteItem>dịch vụ</TilteItem>
          <ContentItem>UI/UX Design</ContentItem>
          <ContentItem>Development</ContentItem>
        </div>
        <div ref={refGridItem3}>
          <TilteItem>thành viên</TilteItem>
          <ContentItem>Hồ Nhân</ContentItem>
          <ContentItem>Tiến Dũng</ContentItem>
        </div>
        <div ref={refGridItem4}>
          <TilteItem>thời gian</TilteItem>
          <ContentItem>19/10/2022</ContentItem>
        </div>
      </div>
    </section>
  );
};
export function TilteItem({ children }) {
  return (
    <>
      <h3 className="text-[0.875rem] sm:text-[0.5rem] lg:text-[0.875rem]  leading-[1.375rem] sm:leading-4 lg:leading-[1.375rem] font-svn_gilory_medium uppercase text-[rgba(255,255,255,0.65)]">
        {children}
      </h3>
    </>
  );
}
export function ContentItem({ children, className }) {
  return (
    <>
      <h3
        className={`${className} lg:my-[0.5rem] text-[0.875rem] sm:text-[0.5rem] lg:text-[1.25rem]  leading-[1.3125rem] sm:leading-4 lg:leading-[1.65625rem] font-svn_gilory_medium text-[rgb(255,255,255)]`}
      >
        {children}
      </h3>
    </>
  );
}
export default ListContent;
