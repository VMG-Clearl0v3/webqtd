import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#00377B] to-[#0074D9] text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">  
        {/* Cột 1 - Thông tin */}
        <div className="space-y-2">
          <h4 className="font-bold text-md">QUỸ TÍN DỤNG NHÂN DÂN TRUNG SƠN</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 flex-shrink-0 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <p>37 Ngô Thì Nhậm, P. Trung Sơn, Ninh Bình</p>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <p>02293.864.329</p>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 0 8.716-6.747M12 21a9 9 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253" />
              </svg>
              <p>qtdndtrungson.com.vn</p>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>Giờ làm việc: Từ Thứ 2 đến Thứ 7</p>
            </div>
            <ul className="list-disc ml-10">
              <li>Mùa hè: 7h00 - 11h00</li>
              <li>Mùa đông: 7h00 - 11h00</li>
            </ul>
          </div>
        </div>
        {/* Cột 2 - Sản phẩm & dịch vụ */}
        <div className="space-y-2">
          <h4 className="font-bold text-md">SẢN PHẨM & DỊCH VỤ</h4>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li><Link href="/san-pham/tien-gui" className="hover:text-blue-300 transition-colors">Gửi tiết kiệm</Link></li>
            <li><Link href="/san-pham/cho-vay" className="hover:text-blue-300 transition-colors">Cho vay</Link></li>
            <li className="hover:text-blue-300 transition-colors">Mở tài khoản</li>
            <li className="hover:text-blue-300 transition-colors">Chuyển tiền trong nước</li>
          </ul>
        </div>
        {/* Cột 3 - Mạng xã hội */}
        <div className="space-y-2">
          <h4 className="font-bold text-md">KẾT NỐI</h4>
          <div className="flex gap-4 mt-2">
           {/* Facebook */}
              <a 
                href="https://www.facebook.com/truongpv.tdnb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full overflow-hidden transform transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1">
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
                className="w-12 h-12 rounded-full overflow-hidden transform transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1">
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
      </div>

      {/* Bản quyền responsive */}
      <div className="relative w-full">
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