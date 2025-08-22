import Image from "next/image";
import Link from "next/link";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Slider from "@/app/component/Slider";
import Content from "@/app/component/component/Content";
import HomeBanner from "@/app/component/HomeBanner";
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
    <Header/>
    <HomeBanner/>
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
     {/*<div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1000px] mx-auto pb-12 z-30">
          <div className="bg-white h-60 flex flex-col items-center text-center p-4 rounded-md shadow-sm transition-transform duration-300 hover:-translate-y-5">
          <Image src ="/image/savings_14667460.png" alt ="icon" width={50} height={50}/>
           <p className="cont_td mt-2 font-semibold"> Gửi tiết kiệm</p>
           <p className="cont_nd flex-1 text-sm mt-1"> Gửi tiết kiệm tại quầy, online lãi suất hấp dẫn</p>
              <button className={"${inter.className} px-6 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl" }>
            <a href="#">Xem chi tiết</a>
          </button>
        </div>

        <div className="bg-white h-60 flex flex-col items-center text-center p-4 rounded-sm transition-transform duration-300 hover:-translate-y-5">
           <Image src ="/image/savings_12515229.png" alt ="icon" width={50} height={50}/>
           <p className="cont_td mt-2 font-semibold"> Cho vay</p>
           <p className="cont_nd flex-1 text-sm mt-1"> Vay tiêu dùng, sản xuất kinh doanh, cầm cố sổ tiết kiệm nhanh chóng</p>
          <button className={"${inter.className} px-6 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl" }>
            <a href="#">Xem chi tiết</a>
          </button>
        </div>
        <div className="bg-white h-60 flex flex-col items-center text-center p-4 rounded-sm transition-transform duration-300 hover:-translate-y-5">
           <Image src ="/image/user_3801741.png" alt ="icon" width={50} height={50}/>
           <p className="cont_td mt-2 font-semibold"> Thành viên</p>
           <p className="cont_nd flex-1 text-sm mt-1"> Tham gia thành viên, mở tài khoản nhận nhiều ưu đãi</p>
          <button className={"${inter.className} px-6 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl" }>
            <a href="#">Xem chi tiết</a>
          </button>
        </div>
          <div className="bg-white h-60 flex flex-col items-center text-center p-4 rounded-sm transition-transform duration-300 hover:-translate-y-5">
           <Image src ="/image/money_14959306.png" alt ="icon" width={50} height={50}/>
           <p className="cont_td mt-2 font-semibold"> Chuyển tiền 24/7</p>
           <p className="cont_nd flex-1 text-sm mt-1"> Chuyển tiền trong nước an toàn, tiện lợi</p>
          <button className={"${inter.className} px-6 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl" }>
            <a href="#">Xem chi tiết</a>
          </button>
          </div>
        </div>*/}
      {/* Wrapper cha */}
  <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 pb-12 relative z-30">
    {/* Mobile & Tablet: Vuốt ngang */}
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:hidden">
      {[
        {
          img: "/image/savings_14667460.png",
          title: "Gửi tiết kiệm",
          desc: "Gửi tiết kiệm tại quầy, online lãi suất hấp dẫn",
        },
        {
          img: "/image/savings_12515229.png",
          title: "Cho vay",
          desc: "Vay tiêu dùng, sản xuất kinh doanh, cầm cố sổ tiết kiệm nhanh chóng",
        },
        {
          img: "/image/user_3801741.png",
          title: "Thành viên",
          desc: "Tham gia thành viên, mở tài khoản nhận nhiều ưu đãi",
        },
        {
          img: "/image/money_14959306.png",
          title: "Chuyển tiền 24/7",
          desc: "Chuyển tiền trong nước an toàn, tiện lợi",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="min-w-[50%] bg-white h-60 flex flex-col items-center text-center p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-3 snap-start"
        >
          <Image src={item.img} alt="icon" width={50} height={50} />
          <p className="cont_td mt-2 font-semibold">{item.title}</p>
          <p className="cont_nd flex-1 text-sm mt-1">{item.desc}</p>
          <button className="px-6 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl">
            <a href="#">Xem chi tiết</a>
          </button>
        </div>
      ))}
    </div>

  {/* Desktop: Grid 4 cột */}
  <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch justify-center px-2 md:px-4 lg:px-6">
    <div className="bg-white h-60 flex flex-col items-center text-center p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-3">
      <Image src="/image/savings_14667460.png" alt="icon" width={50} height={50} />
      <p className="cont_td mt-2 font-semibold">Gửi tiết kiệm</p>
      <p className="cont_nd flex-1 text-sm mt-1">Gửi tiết kiệm tại quầy, online lãi suất hấp dẫn</p>
      <button className="px-6 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl">
        <a href="#">Xem chi tiết</a>
      </button>
    </div>
     <div className="bg-white h-60 flex flex-col items-center text-center p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-3">
      <Image src="/image/savings_12515229.png" alt="icon" width={50} height={50} />
      <p className="cont_td mt-2 font-semibold">Cho vay</p>
      <p className="cont_nd flex-1 text-sm mt-1">Vay tiêu dùng, sản xuất kinh doanh, cầm cố sổ tiết kiệm nhanh chóng</p>
      <button className="px-6 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl">
        <a href="#">Xem chi tiết</a>
      </button>
    </div>
     <div className="bg-white h-60 flex flex-col items-center text-center p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-3">
      <Image src="/image/user_3801741.png" alt="icon" width={50} height={50} />
      <p className="cont_td mt-2 font-semibold">Thành viên</p>
      <p className="cont_nd flex-1 text-sm mt-1">Tham gia thành viên, mở tài khoản nhận nhiều ưu đãi</p>
      <button className="px-6 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl">
        <a href="#">Xem chi tiết</a>
      </button>
    </div>
     <div className="bg-white h-60 flex flex-col items-center text-center p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-3">
      <Image src="/image/money_14959306.png" alt="icon" width={50} height={50} />
      <p className="cont_td mt-2 font-semibold">Chuyển tiền 24/7</p>
      <p className="cont_nd flex-1 text-sm mt-1">Chuyển tiền trong nước an toàn, tiện lợi</p>
      <button className="px-6 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl">
        <a href="#">Xem chi tiết</a>
      </button>
    </div>
  </div>
</div>
  <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 pb-12">
  {/* Tiêu đề */}
  <div className="flex justify-center mb-6">
    <h2 className="text-2xl font-semibold text-[#00377B] text-center md:text-left">
      Lãi suất Tiết kiệm - Cho vay
    </h2>
  </div>

  {/* Grid chia 2 cột */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:px-6">
    {/* Box 1 */}
      <div className="bg-white flex flex-col p-6 shadow-lg rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-4 text-[#00377B]">Lãi suất tiết kiệm</h3>
      <table className="w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-[#00377B] text-white">
            <th className="py-2 px-4 border-b">Kỳ hạn</th>
            <th className="py-2 px-4 border-b">% / năm</th>
            <th className="py-2 px-4 border-b">% / tháng</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center hover:bg-blue-100 text-[#00377B]">
            <td className="py-2 px-4 border-b">Không kỳ hạn</td>
            <td className="py-2 px-4 border-b">0.2</td>
            <td className="py-2 px-4 border-b">0,017</td>
          </tr>
          <tr className="text-center hover:bg-blue-100 text-[#00377B]">
            <td className="py-2 px-4 border-b">1 tháng</td>
            <td className="py-2 px-4 border-b">1.7</td>
            <td className="py-2 px-4 border-b">0,142</td>
          </tr>
          <tr className="text-center hover:bg-blue-100 text-[#00377B]">
            <td className="py-2 px-4 border-b">3 tháng</td>
            <td className="py-2 px-4 border-b">2</td>
            <td className="py-2 px-4 border-b">0,167</td>
          </tr>
          <tr className="text-center hover:bg-blue-100 text-[#00377B]">
            <td className="py-2 px-4 border-b">6 tháng</td>
            <td className="py-2 px-4 border-b">3.5</td>
            <td className="py-2 px-4 border-b">0,292</td>
          </tr>
          <tr className="text-center hover:bg-blue-100 text-[#00377B]">
            <td className="py-2 px-4 border-b">12 tháng</td>
            <td className="py-2 px-4 border-b">4.6</td>
            <td className="py-2 px-4 border-b">0,383</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Box 2 */}
      <div className="bg-white flex flex-col p-6 shadow-lg rounded-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold mb-4 text-[#00377B]">Lãi suất cho vay</h3>
      <table className="w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-[#00377B] text-white">
            <th className="py-2 px-4 border-b">Loại vay</th>
            <th className="py-2 px-4 border-b">% / năm</th>
            <th className="py-2 px-4 border-b">% / tháng</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center hover:bg-blue-100 text-[#00377B]">
            <td className="py-2 px-4 border-b">Ngắn hạn</td>
            <td className="py-2 px-4 border-b">10</td>
            <td className="py-2 px-4 border-b">0,833</td>
          </tr>
          <tr className="text-center hover:bg-blue-100 text-[#00377B]">
            <td className="py-2 px-4 border-b">Trung hạn</td>
            <td className="py-2 px-4 border-b">11</td>
            <td className="py-2 px-4 border-b">0,917</td>
          </tr>
          <tr className="text-center hover:bg-blue-100 text-[#00377B]">
            <td className="py-2 px-4 border-b">Cầm cố STK</td>
            <td colSpan={2} className="py-2 px-4 border-b">+2% Lãi suất STK</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
            <div className="flex flex-col md:flex-row md:items-center w-full">
            {/* Tiêu đề */}
            <h2 className="text-2xl font-semibold text-[#00377B] text-center md:text-left">
              Tin tức - Sự kiện
            </h2>

            {/* Nút Xem thêm */}
            <div className="mt-3 md:mt-0 md:ml-auto text-right">
            <a
            className="inline-flex items-center gap-1 text-[#00377B] text-base font-semibold no-underline group"
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
            <div className=" flex gap-4 mt-6 overflow-x-auto scrollbar-hide
              snap-x snap-mandatory
              sm:flex-row sm:flex-nowrap
              lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none">
            <div className="min-w-[80%] sm:min-w-[60%] lg:min-w-0 bg-white col-span-2 shadow-lg rounded-md overflow-hidden hover:shadow-xl snap-start">
            <div className="relative ww-full h-full group cursor-pointer">
            {/* Ảnh */}
            <Image
            src="/image/2_9.png"
            alt="Ảnh minh họa"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Tiêu đề */}
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white py-2 px-3 text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300">
            Đây là tiêu đề
            </div>
            </div>
            </div>
            {[
            { img: "/image/news_1.jpg", title: "Đây là tiêu đề 1" },
            { img: "/image/news_2.jpg", title: "Đây là tiêu đề 2" },
          ].map((item, i) => (
            <div
              key={i}
              className="min-w-[80%] sm:min-w-[50%] lg:min-w-0 flex flex-col bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition snap-start"
            >
              <div className="relative w-full h-48 group cursor-pointer">
                <Image
                  src={item.img}
                  alt="Ảnh minh họa"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-lg font-semibold text-gray-800 p-4">{item.title}</p>
                <p className="text-sm text-gray-600 px-4 flex-1 line-clamp-3">
                  Đây là nội dung mô tả ngắn gọn cho bài viết, giới thiệu sơ lược nội dung.
                  Nếu nội dung quá dài, nó sẽ tự động xuống dòng và sau 3 dòng sẽ bị cắt,
                  kèm theo dấu ba chấm để báo cho người đọc rằng còn nội dung phía sau.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-800 mt-auto self-end p-4"
                >
                  Xem chi tiết
                </a>
              </div>
            </div>
          ))}
                    </div>
              </div>
    </main>
    <Footer/>
   
    </div>
  );
}