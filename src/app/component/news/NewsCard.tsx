"use client";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ item }: { item: any }) {
  return (
    <div className="bg-white w-full border rounded-xl shadow-md hover:shadow-lg transition">
      <div className="relative h-48 w-full">
        <Link href={`/tin-tuc/${item.slug}`}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-t-xl"
          />
        </Link>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{item.date}</p>
        <Link href={`/tin-tuc/${item.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-3">
            {item.title}
          </h3>
        </Link>      
      </div>
    </div>
  );