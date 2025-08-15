"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="/images/service1.png" alt="Gửi tiền" className="rounded mb-2 w-full h-40 object-cover" />
          <h3 className="font-semibold">Gửi tiền tiết kiệm</h3>
          <p className="text-sm text-gray-600">Lãi suất hấp dẫn, kỳ hạn linh hoạt.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="/images/service2.png" alt="Cho vay" className="rounded mb-2 w-full h-40 object-cover" />
          <h3 className="font-semibold">Cho vay</h3>
          <p className="text-sm text-gray-600">Thủ tục nhanh chóng, hỗ trợ tối đa.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-white p-4 rounded-lg shadow">
          <img src="/images/service3.png" alt="Chuyển tiền" className="rounded mb-2 w-full h-40 object-cover" />
          <h3 className="font-semibold">Chuyển tiền</h3>
          <p className="text-sm text-gray-600">Nhanh chóng, an toàn, tiện lợi.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
