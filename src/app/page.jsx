"use client";
import BannerIndex from "./sections/home/banner/BannerIndex";
import FooterIndex from "./sections/home/footer/FooterIndex";
import Section1Index from "./sections/home/section1/Section1Index";
import Section2Index from "./sections/home/section2/Section2Index";
import Section3Index from "./sections/home/section3/Section3Index";
import Section4Index from "./sections/home/section4/Section4Index";
import "aos/dist/aos.css";
export default function Home() {
  return (
    <main className="overflow-hidden font-svn_gilory_regular">
      <BannerIndex></BannerIndex>
      <Section1Index></Section1Index>
      <Section2Index></Section2Index>
      <Section3Index></Section3Index>
      <Section4Index></Section4Index>
      <FooterIndex></FooterIndex>
    </main>
  );
}
