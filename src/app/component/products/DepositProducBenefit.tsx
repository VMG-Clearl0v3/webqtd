'use client';
import { PiggyBank, Smartphone, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: PiggyBank,
    title: "Lãi suất cạnh tranh",
    desc: "Luôn đảm bảo lãi suất cạnh tranh trên thị trường",
  },
  {
    icon: Smartphone,
    title: "Trải nghiệm thuận tiện",
    desc: "Gửi và rút gốc, lãi dễ dàng, thuận tiện",
  },
  {
    icon: ShieldCheck,
    title: "Được bảo hiểm tiền gửi",
    desc: "An tâm gửi tiền, bảo mật thông tin, an toàn tuyệt đối",
  },
];

export default function DepositProductBenefit() {
  return (
    <section className="relative w-screen bg-[#f5f6f8] pb-20 left-1/2 right-1/2 -mx-[50vw]">
      <div className="max-w-6xl mx-auto px-6 md:px-4">
        {/* Tiêu đề */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 py-10 leading-snug">
          Tại sao bạn nên chọn gửi tiết kiệm tại{" "}
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
                <item.icon className="w-10 h-10 text-gray-700" />
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