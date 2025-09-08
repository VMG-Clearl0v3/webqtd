"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "@/app/component/Pagination";
import NewsCard from "./NewsCard";
import { News } from "@/types/news";
import { getNews } from "@/services/news";


// export default function NewsList({
//   initialNews = [],
//   initialTotalPages = 1,
// }: {
//   initialNews: News[];
//   initialTotalPages: number;
// }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [news, setNews] = useState<News[]>(initialNews);
//   const [totalPages, setTotalPages] = useState(initialTotalPages);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (currentPage === 1) {
//       setNews(initialNews);
//       setTotalPages(initialTotalPages);
//       setLoading(false);
//       return;
//     }

//     async function loadNews() {
//       try {
//         setLoading(true);
//         const { news, totalPages } = await getNews(currentPage, 6);
//         setNews(news);
//         setTotalPages(totalPages);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadNews();
//   }, [currentPage, initialNews, initialTotalPages]);

//   useEffect(() => {
//     if (currentPage > 1) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [currentPage]);

//   // Skeleton giống NewsCard
//   const SkeletonCard = () => (
//     <div className="animate-pulse rounded-lg overflow-hidden border border-gray-200 shadow-sm">
//       <div className="bg-gray-200 h-40 w-full" /> {/* image placeholder */}
//       <div className="p-4 space-y-2">
//         <div className="h-4 bg-gray-200 rounded w-3/4" /> {/* title */}
//         <div className="h-3 bg-gray-200 rounded w-full" /> {/* line 1 */}
//       </div>
//     </div>
//   );

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
//         Tin tức & Sự kiện
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {loading
//           ? Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
//           : news.map((item) => <NewsCard key={item.id} news={item} />)}
//       </div>

//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={setCurrentPage}
//       />
//     </div>
//   );
// }
 export default function NewsList({
  initialNews = [],
  initialTotalPages = 1,
}: {
  initialNews: News[];
  initialTotalPages: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState<News[]>(initialNews);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // luôn cuộn lên top khi đổi page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // page 1 thì dùng dữ liệu ban đầu
    if (currentPage === 1) {
      setNews(initialNews);
      setTotalPages(initialTotalPages);
      setLoading(false);
      return;
    }

    async function loadNews() {
      setLoading(true);
      try {
        const { news, totalPages } = await getNews(currentPage, 6);
        setNews(news);
        setTotalPages(totalPages);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [currentPage, initialNews, initialTotalPages]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
        Tin tức & Sự kiện
      </h2>

      {/* danh sách tin tức */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage} // quan trọng để AnimatePresence hiểu page thay đổi
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
            : news.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
        </motion.div>
      </AnimatePresence>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}