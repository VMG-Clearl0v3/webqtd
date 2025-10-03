"use client";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/types/news"

export default function NewsCard({ news }: { news: News }) {
  return (
    <div className="bg-white w-full shadow-md hover:shadow-lg transition group">
      <div className="relative h-48 w-full overflow-hidden">
        <Link className="block h-full" href={`/tin-tuc/${news.slug}`}>
          <Image
            src={news.image || "/image/noimage.jpg"}
            alt={news.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{`${new Date(news.date).toLocaleDateString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })} ${new Date(news.date).toLocaleTimeString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh',
            hour: '2-digit',
            minute: '2-digit'
          })}`}</p>
        <Link href={`/tin-tuc/${news.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-3">
            {news.title}
          </h3>
        </Link>      
      </div>
    </div>
  );
}