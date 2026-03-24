"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "../Gallery/override-style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const galleryImages = [
    "/GALLERY%20PIC/gallery1.jpeg",
    "/GALLERY%20PIC/gallery2.jpeg",
    "/GALLERY%20PIC/gallery3.jpeg",
    "/GALLERY%20PIC/gallery4.jpeg",
    "/GALLERY%20PIC/gallery5.jpeg",
    "/GALLERY%20PIC/gallery6.jpeg",
    "/GALLERY%20PIC/gallery7.jpeg",
    "/GALLERY%20PIC/gallery8.jpeg",
];

export default function Gallery() {
    return (
        <section className="w-full py-16 bg-gray-200">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-md py-6 mb-10 text-center rounded-sm">
                    <h2 className="text-4xl font-bold text-primary underline decoration-blue-300 decoration-[4px] underline-offset-[8px]">
                        Gallery
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        pagination={{ enabled: true, clickable: true }}
                        navigation={{ enabled: true }}
                        loop={true}
                        autoplay={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="w-full rounded-md shadow-2xl border-4 border-primary overflow-hidden bg-white"
                        style={
                            {
                                "--swiper-navigation-color": "#1a56db",
                                "--swiper-pagination-color": "#1a56db",
                            } as React.CSSProperties
                        }
                    >
                        {galleryImages.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative w-full aspect-[16/9] flex justify-center items-center bg-gray-100">
                                    <Image
                                        src={src}
                                        alt={`Gallery Image ${idx + 1}`}
                                        fill
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
