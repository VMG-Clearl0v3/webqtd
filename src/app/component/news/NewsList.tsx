"use client";
import { useState } from "react";
import Pagination from "@/app/component/Pagination";
import NewsCard from "./NewsCard";

export default function NewsList({ news = [] }: { news?: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  if (!news || news.length === 0) {
    return <p className="text-center text-gray-500">Không có tin tức nào.</p>;
  }

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h1 className="relative justify-center text-center text-3xl font-bold text-blue-900 p-8">
          Tin tức - Sự kiện
      </h1>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mx-auto max-w-7xl">
        {currentNews.map((item) => (
          <NewsCard key={item.id} item={item} />
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