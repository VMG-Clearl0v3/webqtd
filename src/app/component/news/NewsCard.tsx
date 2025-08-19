import { News } from "@/types/news";
import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ item }: { item: News }) {
  return (
    // <div className="p-4 border rounded-lg shadow-sm">
    //   <h2 className="text-lg font-semibold">{item.title}</h2>
    //   <p className="text-sm text-gray-500">{item.date}</p>
    //   <Link
    //     href={`/tin-tuc/${item.slug}`}
    //     className="text-blue-600 hover:underline"
    //   >
    //     Xem chi tiết
    //   </Link>
    // </div>
	<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-white border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Hình ảnh */}
        <div className="relative w-full h-48">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>
        {/* Nội dung */}
        <div className="p-4">
          {/* Ngày đăng */}
          <p className="text-sm text-gray-500 mb-2">{item.date}</p>

          {/* Tiêu đề */}
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-3">
            {item.title}
          </h3>
          {/* Link */}
          <Link
            href={`/tin-tuc/${item.slug}`}
            className="text-blue-600 font-medium hover:underline"
          >
            Xem chi tiết →
          </Link>
        </div>
      </div>
	</div>
  );
}