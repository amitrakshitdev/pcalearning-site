"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useMediaQuery } from "@/hooks/media-query-hook";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import clsx from "clsx";
import patternImage from "@/assets/vectors/pattern-light.png";

const testimonials = [
    {
        name: "Person One",
        image: "https://via.placeholder.com/100",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aut cupiditate recusandae quam amet enim.",
    },
    {
        name: "Person Two",
        image: "https://via.placeholder.com/100",
        text: "Adipisci vero fugiat aliquid explicabo quas eius! Voluptates alias accusantium sapiente.",
    },
    {
        name: "Person Three",
        image: "https://via.placeholder.com/100",
        text: "This is a testimonial text example to demonstrate the swiper-based design.",
    },
    {
        name: "Person Four",
        image: "https://via.placeholder.com/100",
        text: "This is a testimonial text example to demonstrate the swiper-based design.",
    },
];

export default function Testemonials() {
	const isMobile = useMediaQuery("(max-width: 640px)");
    return (
        <section className={clsx(["Swiper-container relative w-full h-auto", "aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]", "flex justify-center items-center"])}>
            <Image className={clsx(["absolute w-full h-full object-cover"])} src={patternImage} alt="pattern-image" />
            <div className={clsx(["relative max-w-[1000px] w-full aspect-[5/3] rounded-lg overflow-hidden", "flex items-center justify-center", "md:w-[90%] md:h-[60%] md:aspect-auto"])}>
                <Swiper
                    className={clsx(["swiper-test relative w-full h-full", 
						"md:px-20"])}
                    modules={[ Autoplay, EffectCoverflow, Pagination, Navigation ]}
                    pagination={{ enabled: true, clickable: true }}
                    navigation={{ enabled: true }}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    speed={1000}
                    effect="coverflow"
                    centeredSlides={true}
                    grabCursor={true}
                    slidesPerView={isMobile ? 2 : 3}
                    spaceBetween={10}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                >
                    {testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx} className={clsx([""])}>
                            <div className={clsx(["w-full h-full flex flex-col items-center justify-center", "px-4", "bg-sky-900 bg-opacity-60 backdrop-blur-sm",
								"rounded-md", "shadow-md",
								"border border-white"
							])}>
                                <h1 className={clsx(["text-textSecondaryColor text-base font-bold", "text-center"])}>{testimonial.name}</h1>
                                <p className={clsx(["text-textSecondaryColor text-sm font-light", "text-left mt-4"])}>{testimonial.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
