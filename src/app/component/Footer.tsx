import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#00377B] to-[#0074D9] text-white">
      {/* Nội dung chính */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Cột 1 - Thông tin */}
        <div className="space-y-3 text-sm">
            <div className="w-40 h-auto mb-3">
            <Image
            src="/image/logofooter.png"
            alt="Quỹ tín dụng nhân dân Trung Sơn"
            width={160}
            height={60}
            className="object-contain"
            priority
            />
            </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <p>37 Ngô Thì Nhậm, Trung Sơn, Ninh Bình</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143.75.75 0 0 1 .38-1.21l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <p>02293.864.329</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 0 8.716-6.747M12 21A9 9 0 0 1 3.284 14.253M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582" />
              </svg>
              <p>qtdndtrungson.com.vn</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>Giờ làm việc: Thứ 2 - Thứ 6</p>
            </div>
            <ul className="list-disc ml-6 text-xs space-y-1">
              <li>Mùa hè: 7h00 - 17h30</li>
              <li>Mùa đông: 7h00 - 17h00</li>
            </ul>
          </div>
        </div>

        {/* Cột 2 - Sản phẩm */}
        <div>
          <h4 className="font-bold text-lg mb-3">SẢN PHẨM & DỊCH VỤ</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/san-pham/tien-gui" className="hover:text-blue-200">Gửi tiết kiệm</Link></li>
            <li><Link href="/san-pham/cho-vay" className="hover:text-blue-200">Cho vay</Link></li>
            <li className="hover:text-blue-200 cursor-pointer">Mở tài khoản</li>
            <li className="hover:text-blue-200 cursor-pointer">Chuyển tiền trong nước</li>
          </ul>
        </div>

        {/* Cột 3 - Mạng xã hội */}
  <div>
  <h4 className="font-bold text-lg mb-3">KẾT NỐI</h4>
  <div className="flex gap-4">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/truongpv.tdnb"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-12 h-12 flex items-center justify-center rounded-full 
                 bg-white shadow-md overflow-hidden transition-all duration-300 
                 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40"
    >
      <Image
        src="/image/iconfb.png"
        alt="Facebook"
        width={28}
        height={28}
        className="object-contain"
      />
    </a>

    {/* Zalo */}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-12 h-12 flex items-center justify-center rounded-full 
                 bg-white shadow-md overflow-hidden transition-all duration-300 
                 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/40"
    >
      <Image
        src="/image/iconzalo.png"
        alt="Zalo"
        width={28}
        height={28}
        className="object-contain"
      />
    </a>
  </div>
</div>
        {/* Cột 4 - Bản đồ */}
        <div>
          <h4 className="font-bold text-lg mb-3">BẢN ĐỒ</h4>
          <div className="overflow-hidden  h-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.520736310331!2d105.91688697428101!3d20.154032617248653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313664d9c9c0bc79%3A0xb719045b31e0b0bd!2zMzcgTmcuIFRow6wgTmjhuq1tLCBUcnVuZyBTxqFuLCBUYW0gxJBp4buHcCwgTmluaCBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1759399572733!5m2!1svi!2s"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Bản quyền */}
      {/*<div className="w-full text-center text-xs sm:text-sm py-4 bg-[#002A5C]">
        © 2025 Bản quyền thuộc về Quỹ tín dụng nhân dân Trung Sơn
      </div>*/}
      <div className="relative w-full mt-8">
        {/* Desktop */}
        <div className="hidden sm:block w-full">
          <Image
            src="/image/footer-desktop.png"
            alt="Bản quyền"
            width={1920}
            height={80}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        {/* Mobile */}
        <div className="block sm:hidden w-full">
          <Image
            src="/image/footer-mobile.png"
            alt="Bản quyền"
            width={768}
            height={80}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </footer>
  );
}