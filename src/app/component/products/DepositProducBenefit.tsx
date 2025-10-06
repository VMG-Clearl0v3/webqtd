'use client';
import { PiggyBank, Repeat, ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import "@/app/globals.css";

const benefits = [
  {
    icon: PiggyBank,
    color: "text-blue-600",
    title: "Kỳ hạn tiết kiệm phong phú",
    desc: "Kỳ hạn gửi đa dạng, phù hợp với nhiều nhu cầu gửi tiết kiệm",
    gradient: "from-[#e0f2ff] to-[#f5faff]",
  },
  {
    icon: Repeat,
    color: "text-green-600",
    title: "Thủ tục gửi và rút dễ dàng",
    desc: "Gửi và rút tiền lãi, tiền gốc tại Quỹ dễ dàng, nhanh chóng",
    gradient: "from-[#e6fff2] to-[#f9fffb]",
  },
  {
    icon: ShieldCheck,
    color: "text-purple-600",
    title: "Được bảo hiểm tiền gửi",
    desc: "Yên tâm gửi tiền, bảo mật thông tin, an toàn tuyệt đối",
    gradient: "from-[#f4e8ff] to-[#faf7ff]",
  },
];

function BenefitCard({
  icon: Icon,
  color,
  title,
  desc,
  gradient,
  index,
}: typeof benefits[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative bg-gradient-to-br ${gradient} h-60 rounded-xl 
                  shadow-sm hover:shadow-lg transition-all duration-300 
                  flex flex-col items-center justify-center text-center p-6 
                  hover:-translate-y-1 overflow-hidden`}
    >
      {/* Overlay sáng khi hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-300 rounded-xl"></div>

      <Icon
        className={`w-14 h-14 mb-3 ${color} relative z-10 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6`}
      />
      <p className="text-lg font-semibold text-gray-800 relative z-10">
        {title}
      </p>
      <p className="text-sm text-gray-600 mt-2 relative z-10">
        {desc}
      </p>
    </motion.div>
  );
}

export default function DepositProductBenefit() {
  return (
    <div className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      {/* Tiêu đề */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-3xl font-bold text-[#00377B] mb-10"
      >
        Lợi ích khi gửi tiết kiệm
      </motion.h2>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {benefits.map((item, i) => (
          <BenefitCard key={i} {...item} index={i} />
        ))}
      </div>

      {/* Mobile slider */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1.1}
          centeredSlides
          spaceBetween={20}
        >
          {benefits.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <BenefitCard {...item} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}