"use client";
import Image from "next/image";
import Header from "@/app/component/Header";
import { usePathname } from "next/navigation";

export default function ProductHeader() {
  const pathname = usePathname();


  const bannerMap: Record<string, string> = {
    "tien-gui": "/image/banner_1.jpg",
    "cho-vay": "/image/banner_3.jpg",
  };
  const bannerSrc =
    Object.entries(bannerMap).find(([key]) => pathname.includes(key))?.[1] ||
    "/image/banner_2.jpg";
  return (
    <div className="relative">
      {/* Kế thừa header gốc */}
      <Header />

      {/* Banner riêng cho trang sản phẩm */}
       <div className="w-full h-60 relative">
        <Image
          src={bannerSrc}
          alt="Trang sản phẩm"         
          width={1200}
          height={192}
          className="object-cover w-full h-full"
        />
        </div>
    </div>
  );
}