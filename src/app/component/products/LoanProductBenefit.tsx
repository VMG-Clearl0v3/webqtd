'use client';
import { HandCoins, Percent, CreditCard } from "lucide-react";

const reasons = [
  {
    icon: HandCoins,
    title: "Giải ngân nhanh chóng",
    desc: "Thủ tục đơn giản, phê duyệt và giải ngân nhanh chóng.",
  },
  {
    icon: Percent,
    title: "Lãi suất hấp dẫn",
    desc: "Lãi suất cạnh tranh với nhiều ưu đãi hấp dẫn",
  },
  {
    icon: CreditCard,
    title: "Trả nợ linh hoạt",
    desc: "Phương thức trả nợ linh hoạt, đơn giản tại quầy hoặc qua tài khoản",
  },
];

export default function LoanProductBenefit() {
  return (
    <section className="relative w-screen bg-[#f5f6f8] pb-10 left-1/2 right-1/2 -mx-[50vw]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tiêu đề */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 py-10 leading-snug">
          Lợi ích khi sử dụng sản phẩm vay của{" "}
          <span className="text-red-600">Quỹ Trung Sơn</span>
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start md:items-center gap-4 bg-white rounded-xl shadow-sm 
                         border border-gray-100 p-5 transition-all duration-300 
                         hover:shadow-md hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="flex-shrink-0 p-3 rounded-lg bg-gray-50">
                <item.icon className="w-8 h-8 text-gray-700" />
              </div>

              {/* Nội dung */}
              <div>
                <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}