"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    img: "/image/savings_14667460.png",
    title: "Gửi tiết kiệm",
    link: "/san-pham/tien-gui",
    description: "Lãi suất hấp dẫn, an toàn tuyệt đối",
  },
  {
    img: "/image/savings_12515229.png",
    title: "Cho vay",
    link: "/san-pham/cho-vay",
    description: "Hỗ trợ vốn nhanh chóng, uy tín",
  },
  {
    img: "/image/user_3801741.png",
    title: "Thành viên",
    link: "/thanh-vien",
    description: "Kết nối cộng đồng, quyền lợi thiết thực",
  },
  {
    img: "/image/money_14959306.png",
    title: "Chuyển tiền 24/7",
    link: "/chuyen-tien",
    description: "Nhanh chóng, tiện lợi, mọi lúc mọi nơi",
  },
];

function ServiceCard({
  img,
  title,
  link,
  description,
  index,
}: typeof services[0] & { index: number }) {
  // gradient nền thay đổi theo index
  const gradients = [
    "from-white to-[#e5f3ff]",
    "from-white to-[#fff5f5]",
    "from-white to-[#f5fff5]",
    "from-white to-[#fff9f0]",
  ];
  const grad = gradients[index % gradients.length];

  return (
    <Link
      href={link}
      className={`group relative flex flex-col items-center justify-center h-60 p-6 
                  bg-gradient-to-br ${grad} overflow-hidden 
                  transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      {/* overlay khi hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon */}
      <div className="relative z-10 w-20 h-20 flex items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={52}
          height={52}
          className="transition-transform duration-300 group-hover:scale-125"
        />
      </div>

      {/* Nội dung */}
      <div className="relative z-10 mt-4 text-center">
        <p className="text-base font-semibold text-gray-800 transition-colors duration-300 group-hover:text-[#e50019]">
          {title}
        </p>
        <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-8 relative">
      {/* Desktop dạng grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-0">
        {services.map((item, i) => (
          <ServiceCard key={i} {...item} index={i} />
        ))}
      </div>

      {/* Mobile dạng swiper */}
      <div className="block md:hidden relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".service-next",
            prevEl: ".service-prev",
          }}
          slidesPerView={2}
          spaceBetween={0}
          loop
          className="w-full"
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <ServiceCard {...item} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút prev/next */}
        <button className="service-prev absolute top-1/2 -left-3 z-20 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 text-[#00377B] shadow hover:scale-110 transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="service-next absolute top-1/2 -right-3 z-20 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 text-[#e50019] shadow hover:scale-110 transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}