"use client";
import { useState } from "react";
import Pagination from "@/app/component/Pagination";
import NewsCard from "./NewsCard";
import { News } from "@/types/news";

export default function NewsList({ news = [] }: { news?: News[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!news || news.length === 0) {
    return <p className="text-center text-gray-500">Không có tin tức nào.</p>;
  }

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
        Tin tức & Sự kiện
      </h2>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mx-auto max-w-7xl">
        {currentNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}