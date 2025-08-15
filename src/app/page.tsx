import Image from "next/image";
import Link from "next/link";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import Content from "./component/Content";
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    <Header/>
    <main>
      
   {/*   <section className="p-8 bg-white text-blue-900">
        <h1 className="text-4xl font-bold mb-4">GIẢI PHÁP TÀI CHÍNH THÔNG MINH CHO BẠN</h1>
        <p className="mb-4">Chúng tôi cung cấp các dịch vụ ngân hàng đa dạng giúp bạn đạt được mục tiêu tài chính.</p>
        <button className="bg-yellow-400 text-white px-6 py-2 rounded">TÌM HIỂU NGAY</button>
      </section>
       <section className="p-8 bg-white text-blue-900">
        <h1 className="text-4xl font-bold mb-4">GIẢI PHÁP TÀI CHÍNH THÔNG MINH CHO BẠN</h1>
        <p className="mb-4">Chúng tôi cung cấp các dịch vụ ngân hàng đa dạng giúp bạn đạt được mục tiêu tài chính.</p>
        <button className="bg-yellow-400 text-white px-6 py-2 rounded">TÌM HIỂU NGAY</button>
      </section>*/}
    {/*  <section>
        <Slider/>
      </section>
*/}     
     <div className="flex max-w-[1000px] mx-auto pb-12 items-center justify-center gap-4 ">
          <div className="bg-white h-60 w-55 flex flex-col items-center text-center p-4 rounded-sm">
          <Image src ="/image/savings_14667460.png" alt ="icon" width={50} height={50}/>
           <p className="cont_td"> Gửi tiết kiệm</p>
           <p className="cont_nd flex-1"> Gửi tiết kiệm tại quầy, online lãi suất hấp dẫn</p>
           {/*<button className="px-4 bg-white mt-5 font-semibold rounded-lg hover:bg-[#01274B] hover:text-black transition-colors duration-300"><a className="cont_link" href="#"> Xem chi tiết</a></button>*/}
          <button className={"${inter.className} px-6 py-2 bg-white mt-auto text-[#01274B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#01274B] hover:text-white hover:scale-105 hover:shadow-xl" }>
            <a href="#">Xem chi tiết</a>
          </button>
        </div>

        <div className="bg-white h-60 w-55 flex flex-col items-center text-center p-4 rounded-sm">
           <Image src ="/image/savings_12515229.png" alt ="icon" width={50} height={50}/>
           <p className="cont_td"> Cho vay</p>
           <p className="cont_nd flex-1"> Vay tiêu dùng, sản xuất kinh doanh, cầm cố sổ tiết kiệm nhanh chóng</p>
          <button className={"${inter.className} px-6 py-2 bg-white mt-auto text-[#01274B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#01274B] hover:text-white hover:scale-105 hover:shadow-xl" }>
            <a href="#">Xem chi tiết</a>
          </button>
        </div>
        <div className="bg-white h-60 w-55 flex flex-col items-center text-center p-4 rounded-sm">
           <Image src ="/image/user_3801741.png" alt ="icon" width={50} height={50}/>
           <p className="cont_td"> Thành viên</p>
           <p className="cont_nd flex-1"> Tham gia thành viên, mở tài khoản nhận nhiều ưu đãi</p>
          <button className={"${inter.className} px-6 py-2 bg-white mt-auto text-[#01274B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#01274B] hover:text-white hover:scale-105 hover:shadow-xl" }>
            <a href="#">Xem chi tiết</a>
          </button>
        </div>
          <div className="bg-white h-60 w-55 flex flex-col items-center text-center p-4 rounded-sm">
           <Image src ="/image/money_14959306.png" alt ="icon" width={50} height={50}/>
           <p className="cont_td"> Chuyển tiền 24/7</p>
           <p className="cont_nd flex-1"> Chuyển tiền trong nước an toàn, tiện lợi</p>
          <button className={"${inter.className} px-6 py-2 bg-white mt-auto text-[#01274B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#01274B] hover:text-white hover:scale-105 hover:shadow-xl" }>
            <a href="#">Xem chi tiết</a>
          </button>
          </div>
        </div>
      <div className="mx-auto max-w-full pb-12 xl:container">
        <div className="flex flex-col">
          <div className="relative flex w-full text-semibold text-2xl">
            <div className="cont_td text-2xl font-semibold text-primary-content text-center md:text-left">Lãi suất Tiết kiệm - Cho vay</div>
          </div>
        </div>
        <div className="flex max-w-[1000px] mx-auto items-start justify-center gap-4 ">
          <div className="bg-white  w-115 flex flex-col p-4 shadow-lg rounded-sm">
            <div className="cont_td text-xl"> Lãi suất tiết kiệm</div>
            <div> 
             <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#01274B] text-white">
              <th className="py-2 px-4 border">Kỳ hạn</th>
              <th className="py-2 px-4 border">% / năm</th>
              <th className="py-2 px-4 border">% / tháng</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center hover:bg-gray-50 text-[#01274B]">
              <td className="py-2 px-4 border">Không kỳ hạn</td>
              <td className="py-2 px-4 border">0.2</td>
              <td className="py-2 px-4 border">0,017</td>
            </tr>
            <tr className="text-center hover:bg-gray-50 text-[#01274B]">
              <td className="py-2 px-4 border">1 tháng</td>
              <td className="py-2 px-4 border">1.7</td>
              <td className="py-2 px-4 border">0,142</td>
            </tr>
            <tr className="text-center hover:bg-gray-50 text-[#01274B]">
              <td className="py-2 px-4 border">3 tháng</td>
              <td className="py-2 px-4 border">2</td>
              <td className="py-2 px-4 border">0,167</td>
            </tr>
            <tr className="text-center hover:bg-gray-50 text-[#01274B]">
              <td className="py-2 px-4 border">6 tháng</td>
              <td className="py-2 px-4 border">3.5</td>
              <td className="py-2 px-4 border">0,292</td>
            </tr>
            <tr className="text-center hover:bg-gray-50 text-[#01274B]">
              <td className="py-2 px-4 border">12 tháng</td>
              <td className="py-2 px-4 border">4.6</td>
              <td className="py-2 px-4 border">0,383</td>
            </tr>
          </tbody>
        </table>
        </div>
          </div>
          <div className="bg-white w-115 flex flex-col p-4 shadow-lg rounded-sm">
            <div className="cont_td text-xl">Lãi suất cho vay</div>
              <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#01274B] text-white">
                <th className="py-2 px-4 border">Loại vay</th>
                <th className="py-2 px-4 border">% / năm</th>
                <th className="py-2 px-4 border">% / tháng</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center hover:bg-gray-50 text-[#01274B]">
                  <td className="py-2 px-4 border">Ngắn hạn</td>
                  <td className="py-2 px-4 border">10</td>
                  <td className="py-2 px-4 border">0,833</td>
                </tr>
                <tr className="text-center hover:bg-gray-50 text-[#01274B]">
                  <td className="py-2 px-4 border">Trung hạn</td>
                  <td className="py-2 px-4 border">11</td>
                  <td className="py-2 px-4 border">0,917</td>
                </tr>
                <tr className="text-center hover:bg-gray-50 text-[#01274B]">
                  <td className="py-2 px-4 border">Cầm cố STK</td>
                  <td colSpan={2} className="py-2 px-4 border">+2% Lãi suất STK</td>
                </tr>
              </tbody>
              </table>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-full pb-12 xl:container">
        <div className="flex flex-col">
         {/* <div className="relative flex w-full text-semibold text-2xl">
            <div className="cont_td text-2xl font-semibold text-primary-content text-center md:text-left">Tin tức - Sự kiện</div>
          <div className="right-0 my-2 md:absolute max-xl:w-full md:block"><a className="max-xl:justify-end flexbg-transparent flex border-none px-0 items-center gap-1 text-primary-content text-blue-800 text-base font-semibold  no-underline shadow-none" href="#">Xem thêm<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
            </a>
          </div>
          </div>*/}
            <div className="flex flex-col md:flex-row md:items-center w-full">
            {/* Tiêu đề */}
            <div className="cont_td text-2xl font-semibold text-primary-content text-center md:text-left">
            Tin tức - Sự kiện
            </div>

            {/* Nút Xem thêm */}
            <div className="mt-2 md:mt-0 md:ml-auto text-right">
            <a
            className="flex items-center justify-end gap-1 text-blue-800 text-base font-semibold no-underline group"
            href="#"
            >
            Xem thêm
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
            >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
            </svg>
            </a>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white col-span-2 shadow-lg rounded-sm overflow-hidden">
              {/*<div className="relative w-full h-full">
                <Image src="/image/2_9.png"  alt="Ảnh minh họa" fill className="object-cover"/>
              </div>
              <div className="text-red-500">Đây là phần nội dung</div>*/}
            <div className="relative w-full sm:h-60 md:h-72 lg:h-full group overflow-hidden shadow-lg cursor-pointer">
            {/* Ảnh */}
            <Image
            src="/image/2_9.png"
            alt="Ảnh minh họa"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Tiêu đề */}
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white py-2 px-3 text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300">
            Đây là tiêu đề
            </div>
            </div>
            </div>
            <div className="flex flex-col bg-white shadow-lg rounded-sm">   
              <div className="relative w-full h-48 group overflow-hidden cursor-pointer">
              <Image src="/image/news_1.jpg"  
              alt="Ảnh minh họa" 
              fill             
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              className="object-cover transition-transform duration-300 group-hover:scale-105"/>
              </div>
              <p className="text-lg font-semibold text-gray-800 p-4">Đây là tiêu đề</p>
              <p className="text-sm text-gray-800 pl-4 flex-1 line-clamp-3">   
                Đây là nội dung mô tả ngắn gọn cho bài viết, giới thiệu sơ lược nội dung.
                Nếu nội dung quá dài, nó sẽ tự động xuống dòng và sau 3 dòng sẽ bị cắt,
                kèm theo dấu ba chấm để báo cho người đọc rằng còn nội dung phía sau.</p>
              <a href="#" className="text-blue-500 hover:text-blue-800 mt-auto self-end p-2"> Xem chi tiết</a>
            </div>
            <div className="flex flex-col bg-white shadow-lg rounded-sm">   
              <div className="relative w-full h-48 group overflow-hidden cursor-pointer">
                 <Image src="/image/news_2.jpg"  
                  alt="Ảnh minh họa" 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"/>
              </div>
              <p className="text-lg font-semibold text-gray-800 p-4">Đây là tiêu đề</p>
              <p className="text-sm text-gray-800 pl-4 flex-1 line-clamp-3">   
                Đây là nội dung mô tả ngắn gọn cho bài viết, giới thiệu sơ lược nội dung.
                Nếu nội dung quá dài, nó sẽ tự động xuống dòng và sau 3 dòng sẽ bị cắt,
                kèm theo dấu ba chấm để báo cho người đọc rằng còn nội dung phía sau.</p>
              <a href="#" className="text-blue-500 hover:text-blue-800 mt-auto self-end p-2"> Xem chi tiết</a>
            </div>
            </div>
        </div> 
      </div>
    </main>
    <Footer/>
  </div>
  );
}