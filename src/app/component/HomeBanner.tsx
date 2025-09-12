"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function HomeBanner() {
  const banners = [
    { id: 1, src: "/image/banner_1.jpg", title: "" },
    { id: 2, src: "/image/banner_2.jpg", title: "" },
    { id: 3, src: "/image/banner_3.jpg", title: "" },
  ];

  return (
    <div className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={banner.id}>
            {/* Ảnh nền */}
            <div className="relative w-full h-[600px]">
              <Image
                src={banner.src}
                alt={banner.title || "Banner"}
                fill
                sizes="100vw"
                className="object-cover"
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
              />
              {/* Lớp mờ */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
              {/* Text + Button animate */}
              <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 text-white max-w-xl">
                <motion.h1
                  key={`title-${banner.id}`}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md"
                >
                  GIẢI PHÁP <br /> TÀI CHÍNH <br /> THÔNG MINH <br /> CHO BẠN
                </motion.h1>
                <motion.button
                  key={`btn-${banner.id}`}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors w-max"
                >
                  Tìm hiểu ngay
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}