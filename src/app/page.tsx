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
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-3xl md:text-4xl text-center py-10 font-semibold text-[#00377B] tracking-wide">
        Lãi suất & Công cụ tính lãi
      </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Bảng lãi suất */}
      <div className="bg-white flex flex-col shadow-lg">
          <div className="bg-gradient-to-r from-[#00377B] to-[#0074D9] text-white px-6 py-4 border-b-4 border-[#00377B]">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
          Lãi suất tiết kiệm
          </h2>
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

  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-center w-full">
        {/* Tiêu đề */}
        <h2 className="text-3xl md:text-4xl py-10 text-center md:text-left font-semibold text-[#00377B] tracking-wide">
          Tin tức mới nhất
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
      <NewsSection />
      </div>
      <PartnerSlider/>
    </main>
    <Footer/>
   
    </div>
  );
}