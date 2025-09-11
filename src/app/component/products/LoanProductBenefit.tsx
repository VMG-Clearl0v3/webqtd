'use client';

import { HandCoins , Percent, CreditCard } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "@/app/globals.css";

const benefits = [
  {
    icon: HandCoins,
    color: "text-blue-600",
    title: "Giải ngân nhanh chóng",
    desc: "Thủ tục đơn giản, phê duyệt và giải ngân nhanh chóng, đáp ứng mọi nhu cầu chi tiêu",
  },
  {
    icon: Percent,
    color: "text-green-600",
    title: "Lãi suất hấp dẫn",
    desc: "Lãi suất cạnh tranh với nhiều ưu đãi hấp dẫn",
  },
  {
    icon: CreditCard,
    color: "text-purple-600",
    title: "Phương thức trả nợ linh hoạt",
    desc: "Phương thức trả nợ linh hoạt, đơn giản tại quầy hoặc qua tài khoản",
  },
];

function BenefitCard({ icon: Icon, color, title, desc }: typeof benefits[0]) {
  return (
    <div className="group bg-gray-100 h-60 flex flex-col items-center justify-center text-center text-black p-4 shadow-md rounded-md">
      <Icon className={`w-12 h-12 mb-3 ${color} transform transition-transform duration-300 group-hover:scale-125`} />
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-md">{desc}</p>
    </div>
  );
}

export default function LoanProductBenefit() {
  return (
    <>
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {benefits.map((item, i) => (
          <BenefitCard key={i} {...item} />
        ))}
      </div>

      {/* Mobile slider */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
          spaceBetween={16}
        >
          {benefits.map((item, i) => (
            <SwiperSlide key={i}>
              <BenefitCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}