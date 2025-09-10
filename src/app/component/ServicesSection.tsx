"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    img: "/image/savings_14667460.png",
    title: "Gửi tiết kiệm",
    desc: "Gửi tiết kiệm tại quầy, qua tài khoản lãi suất hấp dẫn",
    link: "/san-pham/tien-gui",
  },
  {
    img: "/image/savings_12515229.png",
    title: "Cho vay",
    desc: "Vay tiêu dùng, vay sản xuất kinh doanh, vay cầm cố nhanh chóng",
    link: "/san-pham/cho-vay",
  },
  {
    img: "/image/user_3801741.png",
    title: "Thành viên",
    desc: "Tham gia thành viên, mở tài khoản nhận nhiều ưu đãi",
    link: "/thanh-vien",
  },
  {
    img: "/image/money_14959306.png",
    title: "Chuyển tiền 24/7",
    desc: "Chuyển tiền trong nước an toàn, tiện lợi",
    link: "/chuyen-tien",
  },
];

function ServiceCard({ img, title, desc, link }: typeof services[0]) {
  return (
    <div className="bg-white h-60 flex flex-col items-center text-center p-4 shadow-md transition-transform duration-300 hover:-translate-y-3 snap-start min-w-[50%] md:min-w-0">
      <Image src={img} alt={title} width={50} height={50} />
      <p className="cont_td mt-2 font-semibold">{title}</p>
      <p className="cont_nd flex-1 text-sm mt-1">{desc}</p>
      <Link
        href={link}
        className="px-3 py-2 bg-white mt-auto text-[#00377B] rounded-lg shadow-md transform transition-all duration-300 hover:bg-[#00377B] hover:text-white hover:scale-105 hover:shadow-xl"
      >
        Xem chi tiết
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 pb-12 relative z-30">
      {/* Mobile & Tablet: Vuốt ngang */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:hidden">
        {services.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </div>

      {/* Desktop: Grid 4 cột */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch justify-center px-2 md:px-4 lg:px-6">
        {services.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}