import Image from "next/image";
import Link from "next/link";
import { getLastNews } from "@/services/news";

export default async function NewsSection() {
  const news = await getLastNews(3);
  if (!news.length) return null;

  const [first, ...rest] = news;

  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#00377B] tracking-wide text-center md:text-left">
      Tin tức mới nhất
      </h2>

      <Link
      href="/tin-tuc"
      className=" mt-3 md:mt-0
      inline-flex items-center gap-1 text-[#00377B]
      text-base font-semibold group relative
      self-end md:self-auto"
      >
      <span className="relative">
      Xem thêm
      {/* Gạch chân hiệu ứng */}
      <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#00377B] transition-all duration-300 group-hover:w-full"></span>
      </span>

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

      <div
        className="
         flex gap-5 overflow-x-scroll sm:overflow-x-auto scrollbar-hide snap-x snap-mandatory
    overscroll-x-none overflow-x-clip
    lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none
        "
      >
        {/* === Tin lớn nổi bật === */}
        <div
          className="
            relative min-w-[85%] sm:min-w-[60%] lg:min-w-0 
            col-span-2 rounded-2xl overflow-hidden bg-white shadow-md
            hover:shadow-xl transition-all duration-500 snap-start
          "
        >
          <Link href={`/tin-tuc/${first.slug}`} className="block relative h-[320px] lg:h-[420px] group">
            <Image
              src={first.image || "/image/noimage.jpg"}
              alt={first.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/*<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500" />*/}
        <div className="absolute bottom-0 left-0 w-full px-5 py-4 text-white bg-black/50 backdrop-blur-sm">
<h3 className="text-lg md:text-xl font-semibold leading-snug line-clamp-2">
  {first.title}
</h3>
<p className="text-sm md:text-base text-gray-200 mt-2 line-clamp-2 hidden sm:block">
  {first.content}
</p>
</div>
          </Link>
        </div>

        {/* === Các tin nhỏ còn lại === */}
        {rest.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[80%] sm:min-w-[50%] lg:min-w-0 
              flex flex-col bg-white rounded-2xl shadow-md overflow-hidden
              hover:shadow-lg transition-all duration-300 snap-start
            "
          >
            <Link
              href={`/tin-tuc/${item.slug}`}
              className="relative w-full h-50 group overflow-hidden block"
            >
              <Image
                src={item.image || "/image/noimage.jpg"}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/*<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />*/}
            </Link>

            <div className="flex flex-col flex-1 p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 flex-1 line-clamp-3">
                {item.content}
              </p>
              <Link
                href={`/tin-tuc/${item.slug}`}
                className="text-[#00377B] font-medium mt-3 hover:underline inline-flex items-center gap-1"
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
        ))}
      </div>
    </section>
  );
}