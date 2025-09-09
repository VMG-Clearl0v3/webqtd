'use client';
import { PiggyBank, Repeat, ShieldCheck  } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "@/app/globals.css";

export default function DepositProducBenefit() {
  return (
    <>
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {/* card 1 */}
        <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded">
          <PiggyBank className="w-12 h-12 mb-3 text-blue-600" />
          <p className="text-lg font-semibold">Kỳ hạn tiết kiệm phong phú</p>
          <p className="text-md">
           Kỳ hạn gửi đa dạng, phù hợp với nhiều nhu cầu gửi tiết kiệmu
          </p>
        </div>
        {/* card 2 */}
        <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-md">
          <Repeat className="w-12 h-12 mb-3 text-green-600" />
          <p className="text-lg font-semibold">Thủ tục gửi và rút dễ dàng</p>
          <p className="text-md">Gửi và rút tiền lãi, tiền gốc tại Quỹ dễ dàng, nhanh chóng</p>
        </div>
        {/* card 3 */}
        <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-md">
          <ShieldCheck  className="w-12 h-12 mb-3 text-purple-600" />
          <p className="text-lg font-semibold">Được bảo hiểm tiền gửi </p>
          <p className="text-md">
            Yên tâm gửi tiền, bảo mật thông tin, an toàn tuyệt đối
          </p>
        </div>
      </div>

      {/* Mobile slider */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          spaceBetween={16}
        >
          <SwiperSlide>
            <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-md">
              <PiggyBank className="w-12 h-12 mb-3 text-blue-600" />
                <p className="text-lg font-semibold">Kỳ hạn tiết kiệm phong phú</p>
                <p className="text-md">
                Kỳ hạn gửi đa dạng, phù hợp với nhiều nhu cầu gửi tiết kiệmu
                </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-md">
              <Repeat className="w-12 h-12 mb-3 text-green-600" />
              <p className="text-lg font-semibold">Thủ tục gửi và rút dễ dàng</p>
            <p className="text-md">Gửi và rút tiền lãi, tiền gốc tại Quỹ dễ dàng, nhanh chóng</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-md">
              <ShieldCheck  className="w-12 h-12 mb-3 text-purple-600" />
                <p className="text-lg font-semibold">Được bảo hiểm tiền gửi </p>
                <p className="text-md">
                Yên tâm gửi tiền, bảo mật thông tin, an toàn tuyệt đối
                </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}