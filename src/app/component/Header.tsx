"use client";
import Link from 'next/link';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <div className={"${inter.className} flex flex-col bg-[#01274B] h-145 p-8 text-xl"}>
        {/* Desktop menu */}
        <nav className="hidden ml-10 md:flex gap-6">
          <Link href="#" className="mt-[-20px]"><Image src ="/image/logo.png" alt ="icon" width={80} height={80}/></Link>
          <Link href="#">Trang chủ</Link>
          <Link href="#">Giới thiệu</Link>
          <Link href="#">Sản phẩm</Link>
          <Link href="#">Tin tức</Link>
        </nav>
        <div className="space-x-8 p-4  ml-10 mt-5 w-60 font-bold text-3xl leading-normal"> GIẢI PHÁP <br/> TÀI CHÍNH <br/> THÔNG MINH <br/> CHO BẠN</div>
        <div><button className="px-4 py-2 ml-14 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors">Tìm hiểu ngay</button>
  		</div>
    </div>
    </header>
  );
}