'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import NewsCard from './NewsCard';
import { News } from '@/types/news';
import { getNews } from '@/services/news';
import { getPageRange } from '@/utils/pagination';
import Breadcrumb from "@/app/component/Breadcrumb";
import "@/app/globals.css";

interface NewsListProps {
  initialNews: News[];
  totalPages: number;
  initialPage: number;
}

export default function NewsList({
  initialNews,
  totalPages,
  initialPage,
}: NewsListProps) {
  const [news, setNews] = useState<News[]>(initialNews);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  // Fetch tin tức theo trang
  const fetchPage = async (page: number) => {
    setLoading(true);
    try {
      const { news } = await getNews(page, 6);
      setNews(news);
    } catch (error) {
      console.error('Không thể tải dữ liệu tin tức:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    router.push(`/tin-tuc?page=${page}`, { scroll: false });
    fetchPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1');
    if (page !== currentPage) {
      setCurrentPage(page);
      fetchPage(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const pagesToShow = getPageRange(currentPage, totalPages, 5);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức", href: "/tin-tuc" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-4 pb-10">
        {/* Tiêu đề */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 py-10 leading-snug">
          Tin tức 
        </h2>

        {/* Danh sách tin tức */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10"
          >
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-64 bg-gray-100 animate-pulse rounded-xl shadow-sm"
                  />
                ))
              : news.map((item) => <NewsCard key={item.id} news={item} />)}
          </motion.div>
        </AnimatePresence>

        {/* Phân trang */}
<div className="flex justify-center items-center gap-2 pb-10 overflow-x-auto whitespace-nowrap no-scrollbar">
  {currentPage > 1 && (
    <button
      onClick={() => handlePageChange(currentPage - 1)}
      className="px-4 py-2 bg-white text-[#00377B] font-medium hover:bg-[#00377B] hover:text-white transition-colors duration-200 shrink-0"
    >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

    </button>
  )}

  {pagesToShow.map((p, i) =>
    p === "..." ? (
      <span key={`dots-${i}`} className="px-2 text-gray-400 shrink-0">
        …
      </span>
    ) : (
      <button
        key={p}
        onClick={() => handlePageChange(Number(p))}
        className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 shrink-0 ${
          currentPage === p
            ? "bg-[#00377B] text-white border-[#00377B]"
            : "bg-white text-[#00377B] border border-[#00377B]/30 hover:bg-[#00377B] hover:text-white"
        }`}
      >
        {p}
      </button>
    )
  )}

  {currentPage < totalPages && (
    <button
      onClick={() => handlePageChange(currentPage + 1)}
      className="px-4 py-2 bg-white text-[#00377B] font-medium hover:bg-[#00377B] hover:text-white transition-colors duration-200 shrink-0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

    </button>
  )}
</div>
      </div>
    </>
  );
}