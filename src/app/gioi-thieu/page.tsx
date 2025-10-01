"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Banknote, Trophy, Target, Users, TrendingUp, Rocket, BookOpen } from "lucide-react";
import Breadcrumb from "@/app/component/Breadcrumb";

export default function AboutUsPage() {
  const stats = [
    { icon: <Banknote className="w-10 h-10 text-purple-600" />, value: 100, label: "Dư nợ (tỷ đồng)", showPlus: true },
    { icon: <Users className="w-10 h-10 text-blue-600" />, value: 1100, label: "Thành viên", showPlus: true },
    { icon: <Trophy className="w-10 h-10 text-yellow-500" />, value: 10, label: "Danh hiệu" },
    { icon: <TrendingUp className="w-10 h-10 text-green-600" />, value: 30, label: "Năm phát triển" },
  ];

  const timeline = [
    { year: "1996", title: "Thành lập", desc: "Quỹ tín dụng nhân dân Trung Sơn được thành lập" },
    { year: "2005", title: "Mở rộng", desc: "Phát triển mạng lưới và mở rộng dịch vụ" },
    { year: "2015", title: "Chuyển mình", desc: "Ứng dụng công nghệ vào hoạt động tài chính" },
    { year: "2025", title: "Đổi mới", desc: "Hướng tới chuyển đổi số toàn diện" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Giới thiệu", href: "/gioi-thieu" },
        ]}
      />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl text-center pb-10 font-bold text-[#00377B] tracking-wide">
        Về chúng tôi
      </h2>

      <div className="py-10 space-y-28">
        {/* Giới thiệu chung */}
        <section className="max-w-6xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/image/about-intro.jpg"
            alt="Giới thiệu chung"
            className="rounded-2xl shadow-lg w-full h-[320px] object-cover"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-12 h-12 text-blue-800" />
              <h2 className="text-3xl font-bold text-[#003776]">Giới thiệu chung</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Quỹ tín dụng nhân dân Trung Sơn được thành lập năm 1996, chuyển đổi từ mô hình hợp tác xã tín dụng.
            </p>
          </motion.div>
        </section>

        {/* Sứ mệnh */}
        <section className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-12 h-12 text-red-500" />
              <h2 className="text-3xl font-bold text-[#003776]">Sứ mệnh</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Mang đến giải pháp tài chính an toàn, minh bạch và hiệu quả, tương trợ thành viên trên địa bàn, góp phần nâng cao đời sống và phát triển kinh tế địa phương.
            </p>
          </motion.div>
          <motion.img
            src="/image/mission.jpg"
            alt="Sứ mệnh"
            className="rounded-2xl shadow-lg w-full h-[320px] object-cover"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </section>

        {/* Quá trình phát triển */}
        <section className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-[#003776] text-center">
            Quá trình phát triển
          </h2>
          <div className="relative border-l-2 border-gray-300 pl-12">
            {timeline.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative mb-12"
              >
                {/* Dot timeline */}
                <span className="absolute -left-[58px] top-2 w-5 h-5 bg-[#003776] border-4 border-white rounded-full"></span>

                {/* Year (responsive) */}
                <span className="hidden md:inline-block absolute -left-32 top-0 px-4 py-1 bg-[#003776] text-white rounded-full font-semibold shadow-md">
                  {event.year}
                </span>
                <span className="md:hidden inline-block mb-2 px-3 py-1 bg-[#003776] text-white rounded-full font-semibold text-sm shadow-md">
                  {event.year}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-[#003776]">{event.title}</h3>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Thành tích */}
        <section className="relative w-screen bg-gradient-to-r from-indigo-50 to-blue-50 py-20 px-6 left-1/2 right-1/2 -mx-[50vw]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#003776] text-center">
              Thành tích đạt được
            </h2>
            <div className="grid md:grid-cols-4 gap-10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center"
                >
                  {stat.icon}
                  <p className="text-4xl font-bold mt-4 text-[#003776]">
                    <CountUp end={stat.value} duration={2} separator="," />
                    {stat.showPlus && "+"}
                  </p>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Định hướng tương lai */}
        <section className="max-w-6xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/image/future.jpg"
            alt="Định hướng tương lai"
            className="rounded-2xl shadow-lg w-full h-[320px] object-cover"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-12 h-12 text-green-600" />
              <h2 className="text-3xl font-bold text-[#003776]">Định hướng tương lai</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Chúng tôi tiếp tục đẩy mạnh chuyển đổi số, mở rộng dịch vụ, 
              và đồng hành cùng khách hàng trong hành trình phát triển bền vững.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}