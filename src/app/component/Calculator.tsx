"use client";

import { useState } from "react";

export default function Calculator() {
  const [soTien, setSoTien] = useState<number>(0);
  const [laiSuat, setLaiSuat] = useState<number>(0.0); // %/năm mặc định
  const [kyHan, setKyHan] = useState<number>(0); // tháng
  const [ketQua, setKetQua] = useState<number | null>(null);

  const tinhLai = () => {
    const lai = soTien * (laiSuat / 100) * (kyHan / 12);
    setKetQua(lai);
  };

  return (
  <section>
  <div className="bg-white shadow-2xl rounded-2xl w-full max-w-[1000px] border border-gray-100 overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-[#00377B] to-[#0074D9] px-6 py-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white">Công cụ tính lãi</h2>
    </div>

    {/* Form */}
  <div className="p-6 space-y-6">
  {/* Số tiền gửi */}
  <div>
    <label className="block mb-2 text-[#00377B] font-medium">Số tiền gửi (VND)</label>
    <input
      type="range"
      min={1000000}
      max={1000000000}
      step={1000000}
      value={soTien}
      onChange={(e) => setSoTien(Number(e.target.value))}
      className="w-full accent-[#0074D9]"
    />
    <div className="flex justify-between text-sm text-gray-500 mt-1">
      <span>1 triệu</span>
      <span>1 tỷ</span>
    </div>
    <p className="mt-1 text-lg font-semibold text-green-600">
      {soTien.toLocaleString("vi-VN")} VND
    </p>
  </div>

  {/* Kỳ hạn */}
  <div>
    <label className="block mb-2 text-[#00377B] font-medium">Kỳ hạn (tháng)</label>
    <input
      type="range"
      min={1}
      max={36}
      step={1}
      value={kyHan}
      onChange={(e) => setKyHan(Number(e.target.value))}
      className="w-full accent-[#0074D9]"
    />
    <div className="flex justify-between text-sm text-gray-500 mt-1">
      <span>1</span>
      <span>36</span>
    </div>
    <p className="mt-1 text-lg font-semibold text-blue-600">
      {kyHan} tháng
    </p>
  </div>

  {/* Lãi suất */}
  <div>
    <label className="block mb-2 text-[#00377B] font-medium">
      Lãi suất (%/năm)
    </label>
    <div className="relative">
      <input
        type="number"
        value={laiSuat}
        onChange={(e) => setLaiSuat(Number(e.target.value))}
        className="w-full border rounded-xl p-3 pr-12 text-lg font-semibold text-blue-700 shadow-sm
                   focus:ring-2 focus:ring-[#00377B] focus:border-[#00377B] focus:outline-none transition"
        placeholder="Nhập lãi suất..."
      />
      {/* Đơn vị % hiển thị bên phải */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00377B] font-bold">
        %
      </span>
    </div>
  </div>
  {/* Button */}
  <button
    onClick={tinhLai}
    className="w-50 justify-cent bg-gradient-to-r from-[#00377B] to-[#0074D9] text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition"
  >
    Tính lãi ngay
  </button>

  {/* Kết quả */}
  {ketQua !== null && (
    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-inner animate-fadeIn">
      <p className="text-[#00377B] text-lg font-semibold mb-2">
        ✅ Tiền lãi sau {kyHan} tháng:{" "}
        <span className="text-green-600">
          {ketQua.toLocaleString("vi-VN")} VND
        </span>
      </p>
      <p className="text-[#00377B]">
        💰 Tổng nhận:{" "}
        <span className="font-bold text-green-700">
          {(soTien + ketQua).toLocaleString("vi-VN")} VND
        </span>
      </p>
    </div>
  )}
</div>
  </div>
</section>
  );
}