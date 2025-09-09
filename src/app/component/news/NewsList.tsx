'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import NewsCard from './NewsCard';
import { News } from '@/types/news';
import { getNews } from '@/services/news';
import { getPageRange } from '@/utils/pagination';

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

  // Hàm fetch dữ liệu trang mới
  const fetchPage = async (page: number) => {
    setLoading(true);
    try {
      const { news } = await getNews(page, 6);
      setNews(news);
    } finally {
      setLoading(false);
    }
  };

  // Khi click đổi trang
  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    router.push(`/tin-tuc?page=${page}`);
    fetchPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Khi URL thay đổi ?page= thì load lại dữ liệu
  useEffect(() => {
    const page = searchParams.get('page');
    const pageNumber = page ? parseInt(page) : 1;

    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      fetchPage(pageNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const pagesToShow = getPageRange(currentPage, totalPages, 5);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
        Tin tức &amp; Sự kiện
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-48 bg-gray-100 animate-pulse rounded-xl"
                />
              ))
            : news.map((item) => <NewsCard key={item.id} news={item} />)}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 py-6 flex-wrap">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 rounded-md font-medium bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white transition"
          >
            Trước
          </button>
        )}

        {pagesToShow[0] > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-4 py-2 rounded-sm font-medium bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white transition"
            >
              1
            </button>
            {pagesToShow[0] > 2 && <span className="px-2">…</span>}
          </>
        )}

        {pagesToShow.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-sm font-medium transition ${
              currentPage === page
                ? 'bg-blue-900 text-white border border-blue-900'
                : 'bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white'
            }`}
          >
            {page}
          </button>
        ))}

        {pagesToShow[pagesToShow.length - 1] < totalPages && (
          <>
            {pagesToShow[pagesToShow.length - 1] < totalPages - 1 && (
              <span className="px-2">…</span>
            )}
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-4 py-2 rounded-sm font-medium bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white transition"
            >
              {totalPages}
            </button>
          </>
        )}

        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 rounded-md font-medium bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white transition"
          >
            Sau
          </button>
        )}
      </div>
    </div>
  );
}