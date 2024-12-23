"use client"
import Carousel from "@/components/Carousel/Carousel";
import Courses from "@/components/Courses/Courses";
import OurStory from "@/components/OurStory/OurStory";
import Marquee from "@/components/ui/Marquee/Marquee";
import clsx from "clsx";

export default function Home() {
  return (
    <>
    <Carousel />
    <Marquee duration={15} className={clsx([
      "bg-primary text-textSecondaryColor", "width-full", "py-2 px-4", "text-lg", "font-bold", "mb-1"
    ])}>
      <p>Unlock your coding potential! Admissions open now.</p>
    </Marquee>
    <OurStory/>
    <Courses />
    </>
  );
}
