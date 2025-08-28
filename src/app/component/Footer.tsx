import Image from "next/image";

export default function Footer() {
  return (
     <footer>
      <div className="bg-gradient-to-r from-[#00377B] to-[#0074D9] text-white py-12 px-6 transition duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm ">
        
        {/* Cột 1 */}
        <div>
          <h3 className="font-bold">QUỸ TÍN DỤNG NHÂN DÂN TRUNG SƠN</h3>
          <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="15" height="15">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>

          <p className="pl-2">37 Ngô Thì Nhậm, P.Trung Sơn, Ninh Bình</p>
          </div>
          <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="15" height="15">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
          <p className="pl-2">02293.864.329</p>
          </div>
          <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="15" height="15">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
          <p className="pl-2">qtdndtrungson.com.vn</p>
          </div>
          <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="15" height="15">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

          <p className="pl-2">Giờ làm việc: Từ Thứ 2 đến Thứ 7</p>
          
          </div>
          <ul className="list-disc ml-10">
            <li>Mùa hè: 7h00 - 11h00</li>
            <li>Mùa đông: 7h00 - 11h00</li>
          </ul>
        </div>

        {/* Cột 2 */}
        <div>
          <h4 className="font-bold">SẢN PHẨM & DỊCH VỤ</h4>
          <ul className="list-disc ml-4">
            <li>Gửi tiết kiệm</li>
            <li>Cho vay</li>
            <li>Mở tài khoản</li>
            <li>Chuyển tiền trong nước</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h4 className="font-bold">HỖ TRỢ KHÁCH HÀNG</h4>
          <ul className="list-disc ml-4">
            <li>Câu hỏi thường gặp</li>
            <li>Hướng dẫn sử dụng</li>
            <li>Biểu phí</li>
            <li>Liên hệ hỗ trợ</li>
          </ul>
        </div>

        {/* Cột 4 - Mạng xã hội */}
        <div>
          <h4 className="font-bold mb-2">KẾT NỐI</h4>
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
            <path d="M0.5 24.6001C0.5 37.8549 11.2452 48.6001 24.5 48.6001C37.7548 48.6001 48.5 37.8549 48.5 24.6001C48.5 11.3453 37.7548 0.600098 24.5 0.600098C11.2452 0.600098 0.5 11.3453 0.5 24.6001Z" fill="#1877F2"/>
            <path d="M36.5 24.6001C36.5 18.0001 31.1 12.6001 24.5 12.6001C17.9 12.6001 12.5 18.0001 12.5 24.6001C12.5 30.6001 16.85 35.5501 22.55 36.4501V28.0501H19.55V24.6001H22.55V21.9001C22.55 18.9001 24.35 17.2501 27.05 17.2501C28.4 17.2501 29.75 17.5501 29.75 17.5501V20.5501H28.25C26.75 20.5501 26.3 21.4501 26.3 22.3501V24.6001H29.6L29 28.0501H26.15V36.6001C32.15 35.7001 36.5 30.6001 36.5 24.6001Z" fill="white"/>
            </svg>
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition-all duration-300 transform hover:scale-125"
            >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3535_18588)">
            <path d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24Z" fill="#2962FF"/>
            <path d="M14.7475 1.84844C11.3951 5.48394 9 10.9354 9 15.6C9 23.1448 10.043 27.5619 13.1362 31.8764C13.3769 32.2118 13.534 32.604 13.5552 33.0152C13.6031 33.9456 13.4115 35.6505 11.7345 37.1848C11.5539 37.3497 11.6687 37.6517 11.9127 37.6617C12.9624 37.7074 15.0807 37.6461 17.258 36.6845C17.8786 36.4104 18.5851 36.4583 19.1846 36.777C22.8762 38.737 27.1996 39 31.2857 39C36.3527 39 41.406 37.9041 44.8346 35.9212C46.8486 32.409 48 28.339 48 24C48 10.7452 37.2548 0 24 0C20.7206 0 17.5949 0.65772 14.7475 1.84844Z" fill="white"/>
            <path d="M14.8501 14.4858H23.7644V14.7644C23.7644 15.0843 23.6387 15.3651 23.457 15.6001H23.4858L17.2784 22.843H23.2073V23.9573C23.2073 24.2647 22.9575 24.5144 22.6501 24.5144H14.293V24.2358C14.293 23.9159 14.4187 23.6352 14.6004 23.4001H14.5715L20.779 16.1573H14.8501V14.4858Z" fill="#2962FF"/>
            <path d="M34.0715 24.5144H35.1858V14.4858H33.5144V23.9573C33.5144 24.0285 33.5275 24.0966 33.5519 24.1591C33.5737 24.2146 33.6036 24.2658 33.6412 24.3109C33.6912 24.3719 33.7543 24.4219 33.8256 24.4573C33.8996 24.494 33.9834 24.5144 34.0715 24.5144Z" fill="#2962FF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M36.8573 20.3358C36.8573 22.639 38.7327 24.5144 41.0358 24.5144C43.3389 24.5144 45.2144 22.639 45.2144 20.3358C45.2144 18.0327 43.3389 16.1573 41.0358 16.1573C38.7327 16.1573 36.8573 18.0327 36.8573 20.3358ZM38.5287 20.3358C38.5287 18.9541 39.6539 17.8287 41.0358 17.8287C42.4178 17.8287 43.543 18.9541 43.543 20.3358C43.543 21.7175 42.4178 22.843 41.0358 22.843C39.6539 22.843 38.5287 21.7175 38.5287 20.3358Z" fill="#2962FF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M30.1715 16.4358V17.0142C29.4708 16.4837 28.6084 16.1573 27.6644 16.1573C25.3613 16.1573 23.4858 18.0327 23.4858 20.3358C23.4858 22.639 25.3613 24.5144 27.6644 24.5144C28.6084 24.5144 29.4708 24.188 30.1715 23.6575V23.9573C30.1715 24.2647 30.4213 24.5144 30.7287 24.5144H31.843V16.4358H30.1715ZM27.6644 22.843C26.2824 22.843 25.1573 21.7175 25.1573 20.3358C25.1573 18.9541 26.2824 17.8287 27.6644 17.8287C29.0464 17.8287 30.1715 18.9541 30.1715 20.3358C30.1715 21.7175 29.0464 22.843 27.6644 22.843Z" fill="#2962FF"/>
            </g>
            <defs>
            <clipPath id="clip0_3535_18588">
            <rect width="48" height="48" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
         {/* Bản quyền */}
    <div className="relative w-full">
      <Image
       src="/image/footer.png"
        alt="bản quyền"
        width={1920}      // width gốc ảnh
        height={80}       // height gốc ảnh
        className="w-full h-auto object-contain"
        priority
      />
    </div>
    </footer>
  );
}
