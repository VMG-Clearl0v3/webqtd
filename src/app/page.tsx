import Image from "next/image";
import Link from "next/link";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import PartnerSlider from "@/app/component/PartnerSlider";
import HomeBanner from "@/app/component/HomeBanner";
import Calculator from "@/app/component/Calculator";
import NewsSection from "@/app/component/news/NewsSection";
import ServicesSection from "@/app/component/ServicesSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
    <Header/>
    <HomeBanner/>
    <main>
  {/* Wrapper cha */}
  <ServicesSection/>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
        Lãi suất & Công cụ tính lãi
      </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Bảng lãi suất */}
      <div className="bg-white flex flex-col shadow-md rounded-2xl border border-gray-100">
        <div className="bg-gradient-to-r from-[#00377B] to-[#0074D9] text-white rounded-t-2xl px-6 py-4">
          <h3 className="text-xl md:text-2xl font-semibold">Lãi suất tiết kiệm</h3>
        </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base overflow-hidden shadow-sm">
              <thead>
                <tr className="text-[#00377B] text-center">
                  <th className="py-3 px-4">Kỳ hạn</th>
                  <th className="py-3 px-4">% / năm</th>
                  <th className="py-3 px-4">% / tháng</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Không kỳ hạn", "0.2", "0,017"],
                  ["1 tháng", "1.7", "0,142"],
                  ["3 tháng", "2", "0,167"],
                  ["6 tháng", "3.5", "0,292"],
                  ["12 tháng", "4.6", "0,383"],
                  ["18 tháng", "4.6", "0,383"],
                  ["24 tháng", "4.6", "0,383"],
                  ["36 tháng", "4.6", "0,383"],
                ].map(([term, year, month], idx) => (
                  <tr
                    key={idx}
                    className="text-center text-[#00377B] hover:bg-blue-100 transition"
                  >
                    <td className="py-3 px-4">{term}</td>
                    <td className="py-3 px-4">{year}</td>
                    <td className="py-3 px-4">{month}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>

      {/* Công cụ tính lãi */}
    <Calculator/>
    </div>
    <h3 className="text-sm text-[#00377B] p-2">*Lưu ý: Bảng lãi suất chỉ mang tính chất tham khảo. Lãi được tính trên số ngày thực thế và cơ sở tính lãi là 365 ngày.</h3>
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center w-full">
        {/* Tiêu đề */}
        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold text-[#00377B] tracking-wide">
          Tin tức & Sự kiện
        </h2>

        {/* Nút Xem thêm */}
        <div className="mt-3 md:mt-0 md:ml-auto text-right">
        <Link className="inline-flex items-center gap-1 text-[#00377B] text-base font-semibold no-underline group"
        href="/tin-tuc"
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
        </Link>
        </div>
        </div>
{/*        <div className=" flex gap-4 mt-6 overflow-x-auto scrollbar-hide
          snap-x snap-mandatory
          sm:flex-row sm:flex-nowrap
          lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none">
        <div className="min-w-[80%] sm:min-w-[60%] lg:min-w-0 bg-white col-span-2 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl snap-start">
        <div className="relative ww-full h-full group cursor-pointer">
        <Image
        src="/image/2_9.png"
        alt="Ảnh minh họa"
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
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
          className="min-w-[80%] sm:min-w-[50%] lg:min-w-0 flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition snap-start"
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
            <Link
              href="#"
              className="text-blue-500 hover:text-blue-800 mt-auto self-end p-4"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      ))}
        </div>*/}
      <NewsSection />
  </div>
      <PartnerSlider/>
    </main>
    <Footer/>
   
    </div>
  );
}