"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import SearchBox from "@/app/component/SearchBox";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* 🔍 Nút tìm kiếm trên header */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-black transition"
        aria-label="Mở tìm kiếm"
      >
        <Search size={20} />
      </button>

      {/* 🔍 Modal tìm kiếm */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="search-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-white/95 backdrop-blur-sm px-4 overflow-y-auto"
          >
            <div className="w-full max-w-2xl relative">
              <SearchBox
                onSubmit={(q) => {
                  setIsOpen(false);
                  router.push(`/tim-kiem?q=${encodeURIComponent(q)}`);
                }}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 text-gray-600 hover:text-black transition"
                aria-label="Đóng tìm kiếm"
              >
                <X size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}