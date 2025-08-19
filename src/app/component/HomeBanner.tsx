"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "@/app/globals.css";  

export default function HomeBanner(){

	const banners = [
    {
      id: 1,
      src: "/image/banner_1.jpg",
      title: "",
    },
    {
      id: 2,
      src: "/image/banner_2.jpg",
      title: "",
    },
    {
      id: 3,
      src: "/image/banner_3.jpg",
      title: "",
    },
  ];
  return (
  	 <div className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full relative"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[600px]">
              {/* Ảnh nền */}
              <Image
                src={banner.src}
                alt={banner.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={banner.id === 1}
                loading={banner.id === 1 ? "eager" : "lazy"}
              />             
            </div>
            <div className="absolute top-1/3 left-12 text-white px-8">
              <h1 className="font-bold text-4xl leading-snug drop-shadow-lg">
                GIẢI PHÁP <br /> TÀI CHÍNH <br /> THÔNG MINH <br /> CHO BẠN
              </h1>
              <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
                Tìm hiểu ngay
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   )
}