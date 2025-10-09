"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { motion } from "framer-motion";

export default function HomeBanner() {
  const banners = [
    {
      id: 1,
      title: "Gửi tiết kiệm an toàn",
      desc: "Lãi suất hấp dẫn, linh hoạt kỳ hạn. Đồng hành cùng bạn xây dựng tương lai bền vững.",
      img: "/image/banner1.svg",
      btn: "Tìm hiểu thêm",
      url: "/san-pham/tien-gui",
    },
    {
      id: 2,
      title: "Vay vốn linh hoạt",
      desc: "Hỗ trợ tài chính kịp thời, thủ tục nhanh chóng và thuận tiện cho mọi nhu cầu.",
      img: "/image/banner2.svg",
      btn: "Tìm hiểu thêm",
      url: "/san-pham/cho-vay",
    },
    {
      id: 3,
      title: "Chuyển tiền 24/7",
      desc: "Nhanh chóng – Bảo mật – Tiện lợi. Tham gia thành viên chuyển tiền miễn phí.",
      img: "/image/banner3.svg",
      btn: "Tìm hiểu thêm",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay, Parallax]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        parallax={true}
        speed={1000}
        loop
        className="w-full h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[550px] lg:h-[650px] overflow-hidden">
              {/* Background Image with parallax */}
              <div
                className="absolute inset-0"
                data-swiper-parallax="-20%"
              >
                <Image
                  src={banner.img}
                  alt={banner.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Gradient Overlay (mỏng & tinh tế) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/50 via-[#334155]/10 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center px-6 lg:px-16">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-white"
                  data-swiper-parallax="-100"
                >
                  <h1 className="text-2xl sm:text-5xl font-semibold leading-tight">
                    {banner.title}
                  </h1>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-100">
                    {banner.desc}
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                  href={banner.url}
                  className="inline-flex self-start px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#FF0000] text-white font-semibold text-sm sm:text-base shadow-lg hover:scale-105 transition"
                  >
                  {banner.btn}
                  </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}