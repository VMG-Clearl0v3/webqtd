"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Tiết kiệm", href: "/san-pham/tien-gui" },
    { label: "Cho vay", href: "/san-pham/cho-vay" },
    { label: "Tin tức", href: "/tin-tuc" },
  ];

  // Suggestion fake data (thay bằng API của bạn)
  const allSuggestions = [
    { label: "Tiết kiệm dài hạn", href: "/san-pham/tien-gui" },
    { label: "Tiết kiệm ngắn hạn", href: "/san-pham/tien-gui" },
    { label: "Vay mua xe", href: "/san-pham/cho-vay" },
    { label: "Vay tiêu dùng", href: "/san-pham/cho-vay" },
    { label: "Tin tức mới nhất", href: "/tin-tuc" },
  ];

  const filteredSuggestions =
    searchTerm.trim() === ""
      ? []
      : allSuggestions.filter((item) =>
          item.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Component input + dropdown (reusable)
  const SearchBox = ({ onClickLink }: { onClickLink?: () => void }) => (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-full border border-gray-300 text-gray-500 pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-[#00377B] focus:border-[#00377B] focus:outline-none transition"
      />
      <Search
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={18}
      />
      <AnimatePresence>
        {filteredSuggestions.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
          >
            {filteredSuggestions.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  onClick={() => {
                    if (onClickLink) onClickLink();
                    setSearchTerm("");
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );

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
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 gap-6">
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

          {/* Search box (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <SearchBox />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative px-1 text-gray-800 hover:text-[#FF0000] transition-colors duration-300"
              >
                {item.label}
          </Link>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Mobile Hamburger */}
      <button
        className="fixed top-3 right-3 md:hidden z-[10000] text-3xl text-gray-800 focus:outline-none"
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
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="
        fixed top-0 right-0 w-3/4 sm:w-1/2 h-full 
        bg-white/90 backdrop-blur-md shadow-2xl 
        z-[9999] p-8 flex flex-col gap-8 overflow-y-auto
      "
    >
      {/* Search in Mobile Drawer */}
      <SearchBox onClickLink={() => setIsOpen(false)} />

      {/* Menu Items */}
      {menuItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ x: 8 }} // nhẹ nhàng trượt sang phải khi hover
        >
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="
              block relative text-lg font-semibold tracking-wide 
              text-gray-800 
              hover:bg-gradient-to-r hover:from-[#FF0000] hover:to-[#FF9900] 
              hover:text-transparent hover:bg-clip-text 
              transition-all duration-300
            "
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