
"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Sản phẩm", href: "/san-pham" },
    { label: "Tin tức", href: "/tin-tuc" },
  ];
   useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex flex-col w-full">
      {/* Desktop menu */}
       <div
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>   
        <div className="flex items-center justify-between px-8 ">
        {/* Logo */}
        <Link href="/">
          <Image src="/image/logo.png" alt="icon" width={80} height={80} />
        </Link>
        {/*Navbar*/}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } hover:text-yellow-500 transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button className={`fixed top-4 right-4 md:hidden z-[10000] text-3xl focus:outline-none ${isScrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>
      </div>
     
    {/* Overlay + Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[9998]"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer từ phải qua */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-[9999] md:hidden"
            >
              <div className="flex flex-col items-start p-6 space-y-6 text-lg font-medium">
                {menuItems.map((item, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="text-gray-800 hover:text-yellow-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}