'use client';
import { PiggyBank, Repeat, ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "@/app/globals.css";

const benefits = [
  {
    icon: PiggyBank,
    color: "text-blue-600",
    title: "Kỳ hạn tiết kiệm phong phú",
    desc: "Kỳ hạn gửi đa dạng, phù hợp với nhiều nhu cầu gửi tiết kiệm",
  },
  {
    icon: Repeat,
    color: "text-green-600",
    title: "Thủ tục gửi và rút dễ dàng",
    desc: "Gửi và rút tiền lãi, tiền gốc tại Quỹ dễ dàng, nhanh chóng",
  },
  {
    icon: ShieldCheck,
    color: "text-purple-600",
    title: "Được bảo hiểm tiền gửi",
    desc: "Yên tâm gửi tiền, bảo mật thông tin, an toàn tuyệt đối",
  },
];

function BenefitCard({ icon: Icon, color, title, desc }: typeof benefits[0]) {
  return (
    <div className="group bg-gray-50 h-60 flex flex-col items-center justify-center text-center text-black p-4">
      <Icon className={`w-12 h-12 mb-3 ${color} transform transition-transform duration-300 group-hover:scale-125` } />
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-md">{desc}</p>
    </div>
  );
}

export default function DepositProductBenefit() {
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