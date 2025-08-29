"use client";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/types/news"

export default function NewsCard({ news }: { news: News }) {
  return (
    <div className="bg-white w-full border rounded-xl shadow-md hover:shadow-lg transition">
      <div className="relative h-48 w-full">
        <Link href={`/tin-tuc/${news.slug}`}>
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover rounded-t-xl"
          />
        </Link>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{news.date}</p>
        <Link href={`/tin-tuc/${news.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-3">
            {news.title}
          </h3>
        </Link>      
      </div>
    </div>
  );
}