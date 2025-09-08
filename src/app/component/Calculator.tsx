"use client";

import { useState, useEffect } from "react";

export default function Calculator() {
   const LAI_SUAT = [
    { term: "1 tháng", months: 1, yearRate: 1.7 },
    { term: "3 tháng", months: 3, yearRate: 2 },
    { term: "6 tháng", months: 6, yearRate: 3.5 },
    { term: "12 tháng", months: 12, yearRate: 4.6 },
    { term: "18 tháng", months: 18, yearRate: 4.6 },
    { term: "24 tháng", months: 24, yearRate: 4.6 },
    { term: "36 tháng", months: 36, yearRate: 4.6 },
  ];
  const [soTien, setSoTien] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("0"); // để hiển thị trong input
  const [selectedTerm, setSelectedTerm] = useState(LAI_SUAT[0]);
  const [ketQua, setKetQua] = useState<number | null>(null);

  useEffect(() => {
    const lai =
      soTien *
      (selectedTerm.yearRate / 100) *
      (selectedTerm.months / 12);
    setKetQua(lai);
  }, [soTien, selectedTerm]);

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
    <label className="block mb-2 text-[#00377B] font-medium">Số tiền bạn muốn gửi</label>
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          // bỏ ký tự không phải số
          const raw = e.target.value.replace(/\D/g, "");
          setSoTien(raw === "" ? 0 : Number(raw));
          setInputValue(
            raw === "" ? "" : Number(raw).toLocaleString("vi-VN")
          );
        }}
        className="w-full border rounded-xl p-3 text-lg font-semibold text-[#00377B] shadow-sm
                   focus:ring-1 focus:ring-[#00377B] focus:border-[#00377B] focus:outline-none transition"
        placeholder="Nhập số tiền..."
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00377B] font-bold">
        VND
      </span>
    </div>
  </div>

{/* Kỳ hạn */}
<div>
   <label className="block mb-2 text-[#00377B] font-medium">Kỳ hạn (tháng)</label>
  <div className="relative">
    <select
      value={selectedTerm.months}
      onChange={(e) => {
        const val = Number(e.target.value);
        const found = LAI_SUAT.find((t) => t.months === val)!;
        setSelectedTerm(found);
      }}
      className="w-full border rounded-xl p-3 pr-10 text-lg font-semibold text-[#00377B] shadow-sm
                 focus:ring-1 focus:ring-[#00377B] focus:border-[#00377B] focus:outline-none transition
                 appearance-none bg-white"
    >
      {LAI_SUAT.map((t) => (
        <option key={t.months} value={t.months}>
          {t.term}
        </option>
      ))}
    </select>
    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#00377B]">
      ▼
    </span>
  </div>
</div>
  {/* Lãi suất tự động hiển thị */}
  <div>
    <label className="block mb-2 text-[#00377B] font-medium">
      Lãi suất (%/năm)
    </label>
    <div className="relative">
      {/* ô hiển thị lãi suất */}
      <div className="w-full border rounded-xl p-3 text-lg font-semibold text-[#00377B] bg-gray-50 shadow-sm">
        {selectedTerm.yearRate.toLocaleString("vi-VN")}
      </div>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00377B] font-bold">
        %/năm
      </span>
    </div>
  </div>
  {ketQua !== null && (
  <div className="bg-blue-50 mt-8 rounded-2xl p-3 shadow-inner">
    <div className="grid gap-3">
      <div className="flex justify-between items-center">
        <span className="text-[#00377B] text-lg">Số tiền lãi:</span>
        <span className="text-green-700 text-lg font-bold">
          {Math.round(ketQua).toLocaleString("vi-VN")} VND
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[#00377B] text-lg">Tổng tiền nhận:</span>
        <span className="text-green-700 text-lg font-bold">
          {Math.round(soTien + ketQua).toLocaleString("vi-VN")} VND
        </span>
      </div>
    </div>
  </div>
)}
</div>
  </div>
</section>
  );
}