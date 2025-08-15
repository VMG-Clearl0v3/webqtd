import Image from "next/image";

export default function Footer() {
  return (
    // <footer className="md-auto bg-[#01274B] text-white p-12 text-justify">
    //    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
    //       <div>
    //         <h3 className="font-bold">QUỸ TÍN DỤNG NHÂN DÂN TRUNG SƠN</h3>
    //         <p>Đồng hành phát triển cùng thành viên</p>
    //         <p>Hotline: 02293.864.329</p>
    //         <p>Website: qtdndtrungson.com.vn</p>
    //         <p> Giờ làm việc: Từ Thứ 2 đến Thứ 7</p>
    //         <ul className="list-disc ml-4">
    //           <li>Mùa hè: 7h00-11h00</li>
    //           <li>Mùa đông: 7h00-11h00</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h4 className="font-bold">SẢN PHẨM & DỊCH VỤ</h4>
    //         <ul className="list-disc ml-4">
    //           <li>Gửi tiết kiệm</li>
    //           <li>Cho vay</li>
    //           <li>Mở tài khoản</li>
    //           <li>Chuyển tiền trong nước</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h4 className="font-bold">HỖ TRỢ KHÁCH HÀNG</h4>
    //         <ul className="list-disc ml-4">
    //           <li>Câu hỏi thường gặp</li>
    //           <li>Hướng dẫn sử dụng</li>
    //           <li>Biểu phí</li>
    //           <li>Liên hệ hỗ trợ</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h4 className="font-bold">KẾT NỐI</h4>
    //         <ul className="list-disc ml-4">
    //           <li></li>
    //           <li></li>
    //           <li></li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="flex justify-center mt-5 text-sm text-center">© 2025 Quỹ TDND Trung Sơn. Bảo lưu mọi quyền.</div>
    // </footer>
     <footer className="bg-[#01274B] text-white py-12 px-6 transition duration-300 hover:brightness-110">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        
        {/* Cột 1 */}
        <div>
          <h3 className="font-bold">QUỸ TÍN DỤNG NHÂN DÂN TRUNG SƠN</h3>
          <p>Đồng hành phát triển cùng thành viên</p>
          <p>Hotline: 02293.864.329</p>
          <p>Website: qtdndtrungson.com.vn</p>
          <p>Giờ làm việc: Từ Thứ 2 đến Thứ 7</p>
          <ul className="list-disc ml-4">
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

      {/* Bản quyền */}
      <div className="flex justify-center mt-5 text-sm text-center border-t border-gray-500 pt-4">
        © 2025 Quỹ TDND Trung Sơn. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
}
