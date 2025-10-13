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
    <section>
    <div className="max-w-6xl mx-auto px-6 md:px-4 pb-20 relative">
      <h2 className="text-2xl md:text-4xl text-center py-10 font-semibold text-[#00377B] tracking-wide">
        Đối tác của chúng tôi
      </h2>
      <div className="relative">
        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={5}
          spaceBetween={20}
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
            <div className="w-[100px] h-[60px] flex justify-center items-center">
              <Image
                src={logo}
                alt={`partner-${i}`}
                width={100}
                height={60}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút điều hướng - chỉ hiện trên desktop */}
        <button className="partner-prev hidden md:flex absolute -left-1 top-1/2 -translate-y-1/2 
        w-10 h-10 items-center justify-center rounded-full 
        bg-white/90 backdrop-blur shadow-md 
        text-[#00377B] hover:bg-[#ff0000] hover:text-white transition z-10">
        <ChevronLeft size={20} />
        </button>

        <button className="partner-next hidden md:flex absolute -right-1 top-1/2 -translate-y-1/2 
        w-10 h-10 items-center justify-center rounded-full 
        bg-white/90 backdrop-blur shadow-md 
        text-[#00377B] hover:bg-[#ff0000] hover:text-white transition z-10">
        <ChevronRight size={20} />
        </button>      
      </div>
    </div>
  </section>
  );
}