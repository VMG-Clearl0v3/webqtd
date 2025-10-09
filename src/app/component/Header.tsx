"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Tiết kiệm", href: "/san-pham/tien-gui" },
    { label: "Cho vay", href: "/san-pham/cho-vay" },
    { label: "Tin tức", href: "/tin-tuc" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-[9999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 lg:px-10">
        {/* Logo - luôn hiện cả mobile & desktop */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/image/logo.png"
            alt="logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="relative text-gray-700 hover:text-[#FF0000] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Search + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-gray-600 hover:text-black transition"
          >
            <Search size={20} />
          </button>
          <Link
            href="/lien-he"
            className="px-5 py-2 rounded-full bg-[#FF0000] text-white text-sm font-semibold shadow hover:bg-[#e00000] transition"
          >
            Liên hệ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            className="p-2 text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

{/* Mobile Drawer */}
<AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black backdrop-blur-sm z-[9998]"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="fixed top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-b from-white to-gray-50 shadow-2xl z-[9999] flex flex-col rounded-l-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <Image
            src="/image/logo.png"
            alt="logo"
            width={110}
            height={36}
            priority
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-[#FF0000] transition"
          >
            <X size={28} />
          </button>
        </div>

        {/* Search Box */}
        <div className="p-5 border-b border-gray-200 bg-gray-50">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col divide-y divide-gray-100 mt-2">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.97 }}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-[17px] font-medium text-gray-800 hover:text-[#FF0000] transition"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Liên hệ */}
        <div className="p-6 border-t border-gray-200 mt-auto bg-white">
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link
              href="/lien-he"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-full bg-[#FF0000] text-white font-semibold shadow-lg hover:shadow-xl hover:bg-[#e00000] transition"
            >
              Liên hệ ngay
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

      {/* Search Overlay Desktop */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[10000] flex flex-col items-center justify-center px-6"
          >
            <div className="w-full max-w-2xl">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                autoFocus
                className="w-full border-b-2 border-gray-300 text-xl text-gray-600 py-3 px-2 focus:outline-none focus:border-[#FF0000] transition"
              />
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-6 text-gray-600 hover:text-black transition"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}