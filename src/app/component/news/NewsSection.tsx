import Image from "next/image";
import Link from "next/link";
import { getLastNews } from "@/services/news";

export default async function NewsSection() {
  const news = await getLastNews(3); // lấy 3 tin mới nhất
  if (!news.length) return null;

  const [first, ...rest] = news;

  return (
    <div
      className="
        flex gap-4 mt-6 overflow-x-auto scrollbar-hide
        snap-x snap-mandatory
        sm:flex-row sm:flex-nowrap
        lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none
      "
    >
      <div
        className="
          min-w-[80%] sm:min-w-[60%] lg:min-w-0 
          bg-white col-span-2 shadow-lg overflow-hidden 
          hover:shadow-xl snap-start
        "
      >
        <Link href={`/tin-tuc/${first.slug}`} className="relative w-full h-full group cursor-pointer block">
          <Image
            src={first.image || "/image/noimage.jpg"}
            alt={first.title}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white py-2 px-3 text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300">
            {first.title}
          </div>
        </Link>
      </div>
      {rest.map((item) => (
        <div
          key={item.id}
          className="
            min-w-[80%] sm:min-w-[50%] lg:min-w-0 
            flex flex-col bg-white shadow-lg overflow-hidden 
            hover:shadow-xl transition snap-start
          "
        >
			<div className="relative w-full h-48 group cursor-pointer overflow-hidden">
			<Link href={`/tin-tuc/${item.slug}`} className="block w-full h-full">
			<Image
			src={item.image || "/image/noimage.jpg"}
			alt={item.title}
			fill
			priority
			sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
			className="object-cover transition-transform duration-300 group-hover:scale-105"
			/>
			</Link>
			</div>
          <div className="flex flex-col flex-1">
            <p className="text-md font-semibold text-gray-800 px-4 py-2">{item.title}</p>
            <p className="text-sm text-gray-600 px-4 flex-1 line-clamp-3">
              {item.content}
            </p>
            <Link
              href={`/tin-tuc/${item.slug}`}
              className="text-blue-500 hover:text-blue-800 mt-auto self-end p-4"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}