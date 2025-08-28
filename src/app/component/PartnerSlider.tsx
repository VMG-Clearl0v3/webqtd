"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icon đẹp

const partners = [
  "/image/partner1.png",
  "/image/partner2.png",
  "/image/partner3.png",
  "/image/partner4.png",
  "/image/partner5.png",
  "/image/partner6.png",
];

export default function PartnerSlider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 relative">
      <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
        Đối tác của chúng tôi
      </h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".partner-prev",
            nextEl: ".partner-next",
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          className="px-6"
        >
          {partners.map((logo, i) => (
            <SwiperSlide key={i} className="!flex !justify-center !items-center">
            <div className="w-[120px] h-[60px] flex justify-center items-center">
              <Image
                src={logo}
                alt={`partner-${i}`}
                width={120}
                height={60}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút điều hướng - chỉ hiện trên desktop */}
        <button className="partner-prev hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft size={24} className="text-[#00377B]" />
        </button>
        <button className="partner-next hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100">
          <ChevronRight size={24} className="text-[#00377B]" />
        </button>
      </div>
    </div>
  );
}