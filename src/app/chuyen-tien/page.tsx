"use client";

import Image from "next/image";
import { Copy, ShieldCheck, Phone, Check } from "lucide-react";
import { useState } from "react";
import Breadcrumb from "@/app/component/Breadcrumb";

export default function MoneyTranferPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("3700000000929012");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      {/* 🧭 Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Chuyển tiền", href: "/chuyen-tien" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-6 space-y-12 mb-20">
        {/* 1️⃣ Giới thiệu */}
        <section>
          <h1 className="text-2xl md:text-4xl font-semibold text-[#00377B] py-6 leading-snug">
            Dịch vụ chuyển tiền trong nước
          </h1>
          <p className="text-gray-700 leading-relaxed text-justify">
            Quỹ tín dụng nhân dân Trung Sơn cung cấp dịch vụ chuyển tiền nhanh
            chóng, an toàn và tiện lợi đến tất cả ngân hàng trong nước. Khách
            hàng có thể thực hiện giao dịch trực tiếp tại quầy, hoặc thông qua
            mã QR ngân hàng của Quỹ để tiết kiệm thời gian và đảm bảo độ chính
            xác.
          </p>
        </section>

        {/* 2️⃣ Biểu phí dịch vụ */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00377B] mb-4 border-l-4 border-[#00377B] pl-3">
            Biểu phí dịch vụ
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm md:text-base text-left text-gray-700">
              <thead className="bg-[#00377B] text-white">
                <tr>
                  <th className="px-6 py-3 font-medium">Loại giao dịch</th>
                  <th className="px-6 py-3 font-medium">Mức phí</th>
                  <th className="px-6 py-3 font-medium">Thời gian xử lý</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3">Chuyển tiền cùng hệ thống</td>
                  <td className="px-6 py-3">Miễn phí</td>
                  <td className="px-6 py-3">Ngay lập tức</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3">Chuyển tiền khác ngân hàng</td>
                  <td className="px-6 py-3">5.000 – 10.000đ/lần</td>
                  <td className="px-6 py-3">Trong vòng 24 giờ</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3">Chuyển tiền nhanh Napas 247</td>
                  <td className="px-6 py-3">Theo biểu phí Napas</td>
                  <td className="px-6 py-3">Tức thời</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3️⃣ Thông tin tài khoản & QR */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00377B] mb-4 border-l-4 border-[#00377B] pl-3">
            Thông tin chuyển khoản
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Thông tin tài khoản */}
            <div className="rounded-xl border border-blue-100 bg-white shadow-md p-6">
              <h3 className="text-lg font-bold text-[#00377B] mb-3">
                Quỹ tín dụng nhân dân Trung Sơn
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Ngân hàng:</strong> Hợp tác xã Việt Nam (Co-opBank)
                </li>
                <li>
                  <strong>Tên tài khoản:</strong> QTDND TRUNG SON
                </li>
                <li className="flex items-center gap-2 flex-wrap">
                  <strong>Số tài khoản:</strong>
                  <span className="font-medium text-[#00377B]">
                    3700000000929012
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-[#00377B] hover:text-[#1E90FF] transition-transform hover:scale-110 active:scale-95"
                    title="Sao chép số tài khoản"
                  >
                    {copied ? (
                      <Check
                        size={18}
                        className="text-green-600 transition-all duration-300"
                      />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </li>
              </ul>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center justify-center rounded-xl border border-blue-100 bg-white shadow-md p-6">
              <div className="relative inline-block">
                <Image
                  src="/image/qr.png"
                  alt="QR chuyển tiền QTD Trung Sơn"
                  width={180}
                  height={180}
                  className="rounded-lg border border-gray-100 shadow-md"
                />
                {/* Hiệu ứng quét QR */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-[#00BFFF]/70 to-transparent animate-scan-slow"></div>
                </div>
              </div>
              <p className="mt-3 text-gray-600 text-sm">
                Quét mã để chuyển nhanh
              </p>
            </div>
          </div>
        </section>

        {/* 4️⃣ Hướng dẫn & bảo mật */}
        <section className="mt-8 bg-white shadow-md border border-blue-100 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg sm:text-2xl font-bold text-[#00377B] mb-4 flex items-center gap-2">
            <ShieldCheck className="text-[#00377B]" size={22} />
            Hướng dẫn & lưu ý khi chuyển tiền
          </h2>

          <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
            <li>
              Kiểm tra chính xác <strong>số tài khoản</strong> và{" "}
              <strong>tên người nhận</strong> trước khi xác nhận giao dịch.
            </li>
            <li>
              Không chia sẻ <strong>mã OTP</strong> hoặc thông tin tài khoản với
              bất kỳ ai.
            </li>
            <li>
              Giao dịch trong <strong>giờ hành chính</strong> để được hỗ trợ
              nhanh nhất.
            </li>
            <li>Liên hệ hotline nếu gặp sự cố khi chuyển tiền.</li>
          </ul>

          {/* Hotline */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[#FF0000] font-semibold text-base sm:text-lg">
              <div className="flex items-center gap-2">
                <Phone size={18} className="animate-pulse" />
                <span>Hotline:</span>
                <span className="text-black">02293 864 329</span>
              </div>
              <div className="text-gray-600 font-medium flex items-center gap-1">
                <span>| Mr Khánh:</span>
                <span>0928 349 924</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ✅ Toast thông báo copy */}
      {copied && (
        <div className="fixed bottom-6 right-6 bg-[#00377B] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg animate-fade-in-out flex items-center gap-2 z-50">
          <Check size={16} className="text-white" />
          <span>Đã sao chép số tài khoản!</span>
        </div>
      )}
    </>
  );
}
