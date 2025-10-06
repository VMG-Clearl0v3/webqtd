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
  // gradient theo index (các tone xanh đan xen)
  const gradients = [
    "from-[#e9f3ff] to-[#f8fbff]",
    "from-[#f0f9ff] to-[#e6f4ff]",
    "from-[#edf6ff] to-[#ffffff]",
    "from-[#e6f2ff] to-[#f2f9ff]",
  ];
  const grad = gradients[index % gradients.length];

  return (
    <Link
      href={link}
      className={`group relative flex flex-col items-center justify-center h-60 p-6 
                  bg-gradient-to-br ${grad} overflow-hidden border border-[#dce8f8]
                  transition-all duration-500 hover:shadow-[0_8px_20px_rgba(0,55,123,0.15)]
                  hover:-translate-y-1`}
    >
      {/* ánh sáng hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#00377B]/10 to-transparent" />

      {/* Icon */}
      <div className="relative z-10 w-20 h-20 flex items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={56}
          height={56}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Nội dung */}
      <div className="relative z-10 mt-4 text-center">
        <p className="text-base font-semibold text-[#00377B] group-hover:text-[#0056c9] transition-colors duration-300">
          {title}
        </p>
        <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>
      </div>

      {/* đường sáng dưới chân khi hover */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00b4ff] to-[#00377B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-8 relative">
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4">
        {services.map((item, i) => (
          <ServiceCard key={i} {...item} index={i} />
        ))}
      </div>

      {/* Mobile slider */}
      <div className="block md:hidden relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".service-next",
            prevEl: ".service-prev",
          }}
          slidesPerView={2}
          spaceBetween={1}
          loop
          className="w-full"
        >
          {services.map((item, i) => (
            <SwiperSlide key={i}>
              <ServiceCard {...item} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút điều hướng */}
        <button className="service-prev absolute top-1/2 -left-3 z-20 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-[#00377B] shadow-md hover:scale-110 transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="service-next absolute top-1/2 -right-3 z-20 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-[#00377B] shadow-md hover:scale-110 transition">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}