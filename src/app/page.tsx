"use client"
import Carousel from "@/components/Carousel/Carousel";
import Marquee from "@/components/ui/Marquee/Marquee";
import clsx from "clsx";

export default function Home() {
  return (
    <>
    <Carousel />
    <Marquee duration={15} className={clsx([
      "bg-primary text-white", "width-full", "py-2 px-4", "text-lg", "font-bold", "mb-1"
    ])}>
      <p>Unlock your coding potential! Admissions open now.</p>
    </Marquee>
    </>
  );
}
