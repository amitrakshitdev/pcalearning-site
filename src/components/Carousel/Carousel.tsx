import { Swiper, SwiperSlide } from "swiper/react";
import "./override-style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import clsx from "clsx";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import caroselImg1 from "@/assets/images/carousel_image_1.jpg";
import caroselImg2 from "@/assets/images/carousel_image_2.jpg";
const carouselImages = [caroselImg1, caroselImg2];
export default function Carousel() {
    return (
        <Swiper
            className={clsx(["w-full sm:aspect-[21/9] bg-sky-200", "aspect-[4/5]"])}
            modules={[Pagination, Navigation]}
            pagination={{ enabled: true, clickable: true }}
            navigation={{ enabled: true }}
            loop={true}
            autoplay={true}
        >
            {carouselImages.map((image, idx) => (
                <SwiperSlide key={image.src}>
                    <div className={clsx(["w-full h-full fixed", "flex justify-center items-center", "overflow-hidden"])}>
                        <Image src={image} alt={`carousel image ${idx + 1}`} className={clsx(["object-cover w-full h-full"])} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
