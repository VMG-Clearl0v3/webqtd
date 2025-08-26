
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
    { label: "Giới thiệu", href: "/gioi-thieu"},
    { label: "Tiền gửi", href: "/san-pham/tien-gui"},
    { label: "Cho vay", href: "/san-pham/cho-vay"},
    { label: "Tin tức", href: "/tin-tuc"},
  ];
   useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex flex-col w-full">
      {/* Desktop menu */}
      <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1, 
        backgroundColor: isScrolled ? "rgba(255,255,255,1)" : "rgba(0,0,0,0.3)",
        width: isScrolled ? "100%" : "95%",
        borderRadius: isScrolled ? "0px" : "12px",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "0px 0px 0px transparent",
        paddingTop: isScrolled ? "0.5rem" : "1rem",
        paddingBottom: isScrolled ? "0.5rem" : "1rem",
        top: isScrolled ? 0 : 10,
      }}
      transition={{ duration: 0}}
      className="fixed left-1/2 -translate-x-1/2 z-[9999] px-6 backdrop-blur-md"
    >
      <div className="flex items-center justify-between">
        {/* Logo có hiệu ứng scale */}
        <Link href="/">
          <motion.div
            animate={{ scale: isScrolled ? 1 : 1.2 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image src="/image/logo.svg" alt="logo" width={180} height={60} />
          </motion.div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`transition-colors ${
                isScrolled ? "text-black" : "text-white"
              } hover:text-[#FF0000]`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
     </motion.div>
      {/* Mobile Hamburger */}
      <button
        className={`fixed top-5 right-4 md:hidden z-[10000] text-3xl focus:outline-none ${
          isScrolled ? "text-black" : "text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} />}
      </button>
      {/* Overlay + Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Slide */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-[9999] p-6 flex flex-col gap-6"
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-lg font-medium text-gray-800 hover:text-[#FF0000] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}