"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// import { useMediaQuery } from "@/hooks/media-query-hook";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import clsx from "clsx";
import patternImage from "@/assets/vectors/pattern-light.png";
export default function Testemonials() {
    return (
        <div className={clsx(["Swiper-container relative w-full aspect-[4/5]", "sm:aspect-[16/9] lg:aspect-[21/9]", "flex justify-center items-center"])}>
            <Image className={clsx(["absolute w-full h-full object-cover"])} src={patternImage} alt="pattern-image" />
            <div className={clsx(["relative w-80 aspect-[5/3] bg-background rounded-md", "flex items-center justify-center", "shadow-xl"])}>
				<Swiper className={clsx(["w-full h-full"])} modules={[Navigation, Autoplay, EffectFade, Pagination]} pagination={{ enabled: true, clickable: true }} navigation={{ enabled: true }} loop={true} autoplay={{ delay: 5000 }} effect={"fade"} speed={1000}>
					<SwiperSlide>
						Test 1
					</SwiperSlide>
					<SwiperSlide>
						Test 2
					</SwiperSlide>
				</Swiper>
			</div>
        </div>
    );
}
