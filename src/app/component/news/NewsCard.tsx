"use client";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { News } from "@/types/news";

export default function NewsCard({ news }: { news: News }) {
  const date = new Date(news.date);
  const formattedDate = `${date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })}`;

  return (
    <div className="bg-white w-full shadow-lg hover:shadow-xl transition group block rounded-xl overflow-hidden border border-gray-100">
      {/* Hình ảnh */}
      <Link href={`/tin-tuc/${news.slug}`} className="relative block h-56 w-full overflow-hidden">
        <Image
          src={news.image || "/image/noimage.jpg"}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/*<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />*/}
      </Link>

      {/* Nội dung */}
      <div className="p-4 flex flex-col justify-between h-[165px]">
        {/* Ngày đăng */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <CalendarDays className="w-4 h-4 mr-1 text-gray-500" />
          <span>{formattedDate}</span>
        </div>

        {/* Tiêu đề */}
        <Link href={`/tin-tuc/${news.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {news.title}
          </h3>
        </Link>

        {/* Mô tả ngắn (nếu có) */}
   {/*     {news.description && (
          <p className="text-gray-600 text-sm mt-3 line-clamp-3">
            {news.description}
          </p>
        )}*/}

        {/* Nút xem chi tiết */}
<div className="mt-auto">
  <Link
    href={`/tin-tuc/${news.slug}`}
    className="inline-flex items-center gap-2 text-[#00377B] font-medium text-sm border border-[#00377B]
               rounded-full px-4 py-1.5 transition-all duration-300
               hover:bg-[#00377B] hover:text-white hover:shadow-md"
  >
    Xem chi tiết
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </Link>
</div>
      </div>
    </div>
  );
}