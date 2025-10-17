import Image from "next/image";
import Link from "next/link";
import { getLastNews } from "@/services/news";
import ReactMarkdown from "react-markdown";

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/^#+\s*(.*)/gm, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/`{1,3}(.*?)`{1,3}/g, "$1")
    .replace(/\n+/g, " ")
    .trim();
}

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
        flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory 
scroll-smooth pb-3
lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none
        "
      >
        {/* === Tin lớn nổi bật === */}
<div
  className="
    relative min-w-[90%] sm:min-w-[60%] lg:min-w-0 
    col-span-2 rounded-xl overflow-hidden bg-white shadow-md
    hover:shadow-xl transition-all duration-500 snap-start
  "
>
  <Link
    href={`/tin-tuc/${first.slug}`}
    className="block relative h-full group"
  >
    {/* Hình ảnh nền */}
    <Image
      src={first.image || "/image/noimage.jpg"}
      alt={first.title}
      fill
      priority
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
    {/* Phần tiêu đề nằm ở đáy, đè lên ảnh */}
   <div className="absolute bottom-0 left-0 w-full rounded-b-xl">
    <div
      className="
        bg-[#00377B]
        px-4 py-3 md:px-6 md:py-4
      "
    >
      <h3 className="text-white font-semibold text-base md:text-lg leading-snug line-clamp-2">
        {first.title}
      </h3>
    </div>
  </div>
  </Link>
</div> {/* === Các tin nhỏ còn lại === */}
        {rest.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[90%] sm:min-w-[50%] lg:min-w-0 
              flex flex-col bg-white rounded-xl shadow-md overflow-hidden
              hover:shadow-lg transition-all duration-300 snap-start
            "
          >
            <Link
              href={`/tin-tuc/${item.slug}`}
              className="relative w-full h-60 group overflow-hidden block"
            >
              <Image
                src={item.image || "/image/noimage.jpg"}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>

            <div className="flex flex-col flex-1 p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h4>
              <div className="text-sm text-gray-600 flex-1 line-clamp-3">
                 {stripMarkdown(item.content).slice(0, 200) + "..."}              
               </div>
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