"use client";

import Link from 'next/link';
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
    { label: "Tiết kiệm", href: "/san-pham/tien-gui" },
    { label: "Cho vay", href: "/san-pham/cho-vay" },
    { label: "Tin tức", href: "/tin-tuc" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Desktop Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          background: "rgba(255,255,255,1)",
          width: "100%",
          borderRadius: "0px",
          boxShadow: isScrolled
            ? "0 4px 20px rgba(0,0,0,0.1)"
            : "0 4px 30px rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0 }}
        className="fixed top-0 left-0 z-[9999] w-full px-6 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              animate={{ scale: isScrolled ? 1 : 1.15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Image
                src="/image/logo.png"
                alt="logo"
                width={150}
                height={60}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative px-1 text-gray-800"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[3px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#FF0000] via-[#FF9900] to-[#FF0000] rounded-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Mobile Hamburger */}
      <button
        className="fixed top-6 right-4 md:hidden z-[10000] text-3xl text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay */}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-xl z-[9999] p-8 flex flex-col gap-8"
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="block relative text-lg font-medium text-gray-800 hover:text-[#FF0000] transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}