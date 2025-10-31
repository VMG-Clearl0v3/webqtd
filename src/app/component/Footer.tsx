"use client";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#00377B] to-[#0074D9] text-white">
      {/* Nội dung chính */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Cột 1 - Logo */}
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="/image/logofooter.png"
            alt="Quỹ tín dụng nhân dân Trung Sơn"
            width={200}
            height={150}
            className="object-contain mb-4"
            priority
          />
          <p className="text-sm opacity-80 max-w-xs">
            Quỹ của mọi nhà - hài hòa lợi ích
          </p>
        </div>

        {/* Cột 2 - Sản phẩm & dịch vụ */}
        <div>
          <h4 className="font-bold text-lg mb-3">SẢN PHẨM & DỊCH VỤ</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/san-pham/tien-gui" className="hover:text-blue-200">
                Gửi tiết kiệm
              </Link>
            </li>
            <li>
              <Link href="/san-pham/cho-vay" className="hover:text-blue-200">
                Cho vay
              </Link>
            </li>
            <li className="hover:text-blue-200 cursor-pointer">Mở tài khoản</li>
            <li className="hover:text-blue-200 cursor-pointer">Chuyển tiền trong nước</li>
          </ul>
        </div>

        {/* Cột 3 - Kết nối mạng xã hội */}
        <div>
          <h4 className="font-bold text-lg mb-3">KẾT NỐI</h4>
          <div className="flex justify-center sm:justify-start gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/QTDTrungSon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fanpage Facebook Quỹ tín dụng Trung Sơn"
              className="w-12 h-12 rounded-full overflow-hidden transform transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1"
            >
              <div className="w-full h-full flex items-center justify-center rounded-full shadow-md hover:shadow-[0_0_15px_5px_rgba(24,119,242,0.4)] hover:bg-blue-50/20 transition-all duration-200 ease-out">
                <Image
                  src="/image/iconfb.png"
                  alt="Facebook"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </a>

            {/* Zalo */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full overflow-hidden transform transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1"
            >
              <div className="w-full h-full flex items-center justify-center rounded-full shadow-md hover:shadow-[0_0_15px_5px_rgba(0,116,217,0.4)] hover:bg-blue-50/20 transition-all duration-200 ease-out">
                <Image
                  src="/image/iconzalo.png"
                  alt="Zalo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>

         {/* QR Scan */}
      <div className="flex flex-col items-center sm:items-start">
        <h4 className="font-bold text-lg mb-3">QUÉT MÃ QR</h4>

        <div className="relative inline-block">
          {/* QR code */}
          <Image
            src="/image/qr.png"
            alt="QR website Quỹ tín dụng Trung Sơn"
            width={150}
            height={150}
            className="rounded-lg border border-gray-200 shadow-md"
          />

          {/* Hiệu ứng tia quét */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#00BFFF]/70 to-transparent animate-scan"></div>
          </div>
        </div>

        <p className="text-sm mt-2 opacity-80">Truy cập website nhanh</p>
      </div>
      </div>

      {/* Bản quyền */}
      <div className="w-full text-center text-xs sm:text-sm py-4 bg-[#002A5C]">
        © 2025 Bản quyền thuộc về Quỹ tín dụng nhân dân Trung Sơn
      </div>
    </footer>
  );
}