"use client";

import { useState, useRef } from "react";
import { Phone, Mail, User, MessageSquare, Send } from "lucide-react";
import Breadcrumb from "@/app/component/Breadcrumb";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

export default function LienHePage() {
  const [activeTab, setActiveTab] = useState("hotline");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!captchaToken) {
    alert("Vui lòng xác minh bạn không phải là robot.");
    return;
  }

  setLoading(true);
  setSuccess(false);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, captcha: captchaToken }),
    });

    if (!res.ok) throw new Error("Gửi thất bại");

    setSuccess(true);
    setForm({ fullName: "", email: "", phone: "", message: "" });
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  } catch (err) {
    console.error(err);
    alert("❌ Không gửi được, vui lòng thử lại.");
  } finally {
    setLoading(false);
  }
};
  return (
    <>
      {/* 🧭 Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Liên hệ", href: "/lien-he" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 py-6 leading-snug">
          Liên hệ với chúng tôi
        </h2>

        {/* 🔹 Tabs */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-center bg-gray-50">
            {[
              { id: "hotline", label: "ĐIỆN THOẠI" },
              { id: "form", label: "ĐỂ LẠI THÔNG TIN" },
              { id: "online", label: "HỖ TRỢ TRỰC TUYẾN" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 text-sm sm:text-base font-semibold transition-all ${
                  activeTab === tab.id
                    ? "text-[#00377B] border-b-4 border-[#00377B] bg-white"
                    : "text-gray-500 hover:text-[#00377B] bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* 📞 Hotline */}
            {activeTab === "hotline" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {[
              { title: "Hotline", phone: "02293 864 329" },
              { title: "Bộ phận Kế toán", phone: "0913 767 574" },
              { title: "Bộ phận Tín dụng", phone: "0977 676 359" },
              ].map((item) => (
              <div
              key={item.phone}
              className="p-6"
              >
              <h3 className="font-semibold text-[#00377B] mb-3 text-2xl">{item.title}</h3>
              <a
              href={`tel:${item.phone}`}
              className="inline-flex items-center justify-center bg-[#00377B] text-white border border-[#00377B] py-3 px-6 rounded-lg hover:bg-[#1E90FF] hover:border-[#1E90FF] transition-all font-medium text-xl"
              >
              <Phone className="w-6 h-6 mr-2" /> {item.phone}
              </a>
              </div>
              ))}
              </div>
            )}

            {/* 🧾 Form liên hệ */}
            {activeTab === "form" && (
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cột trái */}
        <div className="space-y-4">
          {/* Họ và tên */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 pl-12 focus:ring-1 focus:ring-[#00377B] focus:border-[#00377B] outline-none placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 pl-12 focus:ring-1 focus:ring-[#00377B] focus:border-[#00377B] outline-none placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Số điện thoại */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 pl-12 focus:ring-1 focus:ring-[#00377B] focus:border-[#00377B] outline-none placeholder:text-gray-400 text-gray-700"
            />
          </div>
        </div>

        {/* Cột phải */}
        <div className="flex flex-col space-y-4">
          {/* Nội dung */}
          <div className="relative flex-1">
            <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <textarea
              name="message"
              placeholder="Nội dung cần hỗ trợ..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 pl-12 min-h-[180px] focus:ring-1 focus:ring-[#00377B] focus:border-[#00377B] outline-none placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Captcha + Gửi cùng hàng */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(token) => setCaptchaToken(token)}
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center bg-[#00377B] text-white px-6 py-3 rounded-lg hover:bg-[#1E90FF] transition-all font-semibold shadow-sm w-full sm:w-auto"
            >
              {loading ? (
                <span className="animate-pulse">Đang gửi...</span>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" /> Gửi
                </>
              )}
            </button>
          </div>
        </div>
        </div>
      </form>
            )}

            {/* 💬 Hỗ trợ trực tuyến */}
            {activeTab === "online" && (
              <div className="text-center text-gray-700 space-y-6">
                <p className="text-lg text-gray-600 text-base">
                  Bạn có thể liên hệ qua các kênh hỗ trợ trực tuyến:
                </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 text-center">
{/* Facebook */}
<div className="flex flex-col items-center space-y-2">
  <a
    href="https://www.facebook.com/QTDTrungSon"
    target="_blank"
    className="hover:scale-110 transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#00377B"
      viewBox="0 0 24 24"
      className="w-22 h-22"
    >
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 3h-2.1v7A10 10 0 0 0 22 12Z" />
    </svg>
  </a>
  <a
    href="https://www.facebook.com/QTDTrungSon"
    target="_blank"
    className="border border-[#00377B] text-[#00377B] px-4 py-1.5 rounded-md hover:bg-[#00377B] hover:text-white transition-all text-sm font-medium"
  >
    Kết nối
  </a>
</div>

{/* Email */}
<div className="flex flex-col items-center space-y-2">
  <a
    href="mailto:qtdndtrungson@gmail.com"
    className="hover:scale-110 transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#00377B"
      viewBox="0 0 24 24"
      className="w-22 h-22"
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 7 8-7v10H4z" />
    </svg>
  </a>
  <a
    href="mailto:qtdndtrungson@gmail.com"
    className="border border-[#00377B] text-[#00377B] px-4 py-1.5 rounded-md hover:bg-[#00377B] hover:text-white transition-all text-sm font-medium"
  >
    Gửi mail
  </a>
</div>

{/* Zalo */}
<div className="flex flex-col items-center space-y-2">
  <a
    href="https://zalo.me/"
    target="_blank"
    className="hover:scale-110 transition-transform flex items-center justify-center w-22 h-22"
  >
    <Image
      src="/image/iconzalo.png"
      alt="Zalo"
      width={100}
      height={100}
      className="object-contain w-16 h-16"
    />
  </a>
  <a
    href="https://zalo.me/"
    target="_blank"
    className="border border-[#00377B] text-[#00377B] px-4 py-1.5 rounded-md hover:bg-[#00377B] hover:text-white transition-all text-sm font-medium"
  >
    Zalo chat
  </a>
</div>
</div>             
              </div>
            )}
          </div>
        </div>

 {/* 🏢 Thông tin trụ sở */}
<div className="mt-12 mb-20 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
    {/* Cột thông tin */}
    <div className="p-6 flex flex-col justify-center">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#00377B] mb-4">
        Quỹ Tín Dụng Nhân Dân Trung Sơn
      </h2>

      <div className="space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div className="flex items-start">
          <span className="text-[#00377B] font-medium mr-2">📍</span>
          <p><strong>Địa chỉ:</strong> 37 Ngô Thì Nhậm, Trung Sơn, Ninh Bình</p>
        </div>

        <div className="flex items-start">
          <span className="text-[#00377B] font-medium mr-2">📞</span>
          <p><strong>Điện thoại:</strong> 02293 864 329</p>
        </div>

        <div className="flex items-start">
          <span className="text-[#00377B] font-medium mr-2">📧</span>
          <p><strong>Email:</strong> qtdndtrungson@gmail.com</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold mb-2 text-[#00377B]">🕒 Thời gian hoạt động:</p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm sm:text-base">
          <li>Thứ Hai – Thứ Sáu</li>
          <li>Mùa hè: 07:00 – 17:30</li>
          <li>Mùa đông: 07:15 – 17:00</li>
        </ul>
      </div>
    </div>

    {/* Cột bản đồ */}
    <div className="relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.520736310331!2d105.91688697428101!3d20.154032617248653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313664d9c9c0bc79%3A0xb719045b31e0b0bd!2zMzcgTmcuIFRow6wgTmjhuq1tLCBUcnVuZyBTxqFuLCBUYW0gxJBp4buHcCwgTmluaCBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1759399572733!5m2!1svi!2s"
        className="w-full h-80 md:h-full object-cover"
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </div>
  </div>
</div>
      </div>
    </>
  );
}