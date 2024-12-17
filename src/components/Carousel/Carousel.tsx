import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import { useMediaQuery } from "@/hooks/media-query-hook";
import "./override-style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import caroselImg1 from "@/assets/images/carousel_image_1.jpg";
import caroselImg2 from "@/assets/images/carousel_image_2.jpg";
import Link from "next/link";
const carouselImages = [
    { image: caroselImg1, displayText: "Welcome to PCA Learning" },
    { image: caroselImg2, displayText: "We Can Make a Difference" },
];

export default function Carousel() {
    return (
        <Swiper
            className={clsx(["w-full sm:aspect-[21/9] bg-sky-200", "aspect-[4/5]"])}
            modules={[Navigation, Autoplay, EffectFade, Pagination]}
            pagination={{ enabled: true, clickable: true }}
            navigation={{ enabled: true }}
            loop={true}
            autoplay={{
                delay: 5000,
            }}
            effect={"fade"}
            speed={1000}
        >
            {carouselImages.map((imageData, idx) => (
                <SwiperSlide key={imageData.image.src}>
                    <div className={clsx(["w-full h-full fixed", "flex justify-center items-center", "overflow-hidden"])}>
                        <Image src={imageData.image} alt={`carousel image ${idx + 1}`} className={clsx(["object-cover w-full h-full"])} />
                    </div>
                    {/* Mobile */}
                    <div className={clsx(["block sm:hidden", "fixed inset-0", "flex items-center justify-center", "bg-black bg-opacity-50"])}>
                        <div className={clsx(["w-full h-[70%]", "flex flex-col justify-around items-center", "px-4"])}>
                            <h1 className={clsx(["text-textSecondaryColor text-5xl font-bold", "text-center"])}>{imageData.displayText}</h1>
                            <Link href={"/login"} className={clsx(["bg-primary px-4 y-2 rounded", "text-textSecondaryColor text-lg", "shadow-sm"])}>
                               Log in
                            </Link>
                        </div>
                    </div>
                    {/* desktop */}
                    <div className={clsx(["hidden sm:flex", "fixed inset-0", "flex items-center justify-center", "bg-black bg-opacity-50"])}>
                        <div className={clsx(["w-4/5 h-full", "flex items-center justify-center"])}>
                            <h1 className={clsx(["text-textSecondaryColor text-7xl font-bold", "text-center"])}>{imageData.displayText}</h1>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
