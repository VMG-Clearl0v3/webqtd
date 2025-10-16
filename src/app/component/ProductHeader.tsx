"use client";
import Image from "next/image";
import Header from "@/app/component/Header";
import { usePathname } from "next/navigation";

export default function ProductHeader() {
  const pathname = usePathname();


  const bannerMap: Record<string, string> = {
    "tien-gui": "/image/savebanner.svg",
    "cho-vay": "/image/loanbanner.svg",
  };
  const bannerSrc =
    Object.entries(bannerMap).find(([key]) => pathname.includes(key))?.[1] ||
    "/image/noimage.jpg";
  return (
    <div className="relative">
      {/* Kế thừa header gốc */}
      <Header />

      {/* Banner riêng cho trang sản phẩm */}
       <div className="w-full relative h-100">
        <Image
          src={bannerSrc}
          alt="Trang sản phẩm"         
          fill            
          className="object-cover object-center" 
          priority
        />
        </div>
    </div>
  );
}