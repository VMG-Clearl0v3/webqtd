"use client";
import { useState, useEffect } from "react";
import Pagination from "@/app/component/Pagination";
import NewsCard from "./NewsCard";
import { News } from "@/types/news";
import { getNews } from "@/services/news";

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

  useEffect(() => {
    if (currentPage === 1) {
      setNews(initialNews);
      setTotalPages(initialTotalPages);
      return;
    }
    async function loadNews() {
      try {
        const { news, totalPages } = await getNews(currentPage, 6);
        setNews(news);
        setTotalPages(totalPages);
      } catch (err) {
        console.error(err);
      }
    }
    loadNews();
  }, [currentPage,initialNews,initialTotalPages]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
        Tin tức & Sự kiện
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}