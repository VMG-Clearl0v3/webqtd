'use client';
import { Banknote, Percent, CreditCard } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "@/app/globals.css";

export default function LoanProductBenefit() {
  return (
    <>
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {/* card 1 */}
        <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded">
          <Banknote className="w-12 h-12 mb-3 text-blue-600" />
          <p className="text-lg font-semibold">Giải ngân nhanh chóng</p>
          <p className="text-md">
            Thủ tục đơn giản, phê duyệt và giải ngân nhanh chóng, đáp ứng mọi nhu cầu chi tiêu
          </p>
        </div>
        {/* card 2 */}
        <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-md">
          <Percent className="w-12 h-12 mb-3 text-green-600" />
          <p className="text-lg font-semibold">Lãi suất hấp dẫn</p>
          <p className="text-md">Lãi suất cạnh tranh với nhiều ưu đãi hấp dẫn</p>
        </div>
        {/* card 3 */}
        <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-md">
          <CreditCard className="w-12 h-12 mb-3 text-purple-600" />
          <p className="text-lg font-semibold">Phương thức trả thuận</p>
          <p className="text-md">
            Phương thức trả nợ linh hoạt, đơn giản tại quầy hoặc qua Tài khoản
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
              <Banknote className="w-12 h-12 mb-3 text-blue-600" />
              <p className="text-lg font-semibold">Giải ngân nhanh chóng</p>
              <p className="text-md">
                Thủ tục đơn giản, phê duyệt và giải ngân nhanh chóng, đáp ứng mọi nhu cầu chi tiêu
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-md">
              <Percent className="w-12 h-12 mb-3 text-green-600" />
              <p className="text-lg font-semibold">Lãi suất hấp dẫn</p>
              <p className="text-md">Lãi suất cạnh tranh với nhiều ưu đãi hấp dẫn</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gray-100 h-60 flex flex-col items-center justify-center text-center p-4 shadow-md rounded-md">
              <CreditCard className="w-12 h-12 mb-3 text-purple-600" />
              <p className="text-lg font-semibold">Phương thức trả thuận</p>
              <p className="text-md">
                Phương thức trả nợ linh hoạt, đơn giản tại quầy hoặc qua Tài khoản
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}