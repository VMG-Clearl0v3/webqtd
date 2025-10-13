'use client';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { News } from '@/types/news';
import { Facebook, Share2 } from 'lucide-react'; 
import Breadcrumb from "@/app/component/Breadcrumb";
import Link from "next/link";
import Image from "next/image";

export default function NewsDetail({
  news,
  relatedNews = [],
}: {
  news: News;
  relatedNews?: News[];
}) {
  const [formattedDate, setFormattedDate] = useState<string>(''); 
  const [shareUrl, setShareUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [news.slug]);

  useEffect(() => {
    const date = new Date(news.date);
    const dateStr = `${date.toLocaleDateString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })} ${date.toLocaleTimeString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour: '2-digit',
      minute: '2-digit',
    })}`;
    setFormattedDate(dateStr);
    setShareUrl(window.location.href);
  }, [news.date]);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      {/* 🔹 Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tin tức', href: '/tin-tuc' },
          { label: news.title },
        ]}
      />

      {/* 🔹 Main Content */}
      <article className="max-w-6xl mx-auto px-6 md:px-4">
        <div className="max-w-4xl mx-auto">
          {/* --- Title --- */}
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug mt-10 pb-3 text-gray-900">
            {news.title}
          </h1>

          {/* --- Meta + Share --- */}
          <div className="flex items-center justify-between text-gray-500 border-b border-gray-200 pb-3 mb-6">
            <p className="text-sm">{formattedDate || 'Đang tải…'}</p>

            <div className="flex items-center gap-4">
              {/* Facebook Share */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#0055d6] transition"
                aria-label="Share on Facebook"
              >
                <Facebook size={20} />
              </a>

              {/* Copy Link */}
              <button
                onClick={handleCopy}
                className="hover:text-[#0055d6] relative"
                aria-label="Copy link"
              >
                <Share2 size={20} />
                <span
                  className={`absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md transition-opacity duration-300 ${
                    copied ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  Copied!
                </span>
              </button>
            </div>
          </div>

          {/* --- Main Image --- */}
          {news.image && (
            <div className="rounded-xl overflow-hidden shadow-md mb-6">
              <Image
                src={news.image}
                alt={news.title}
                width={900}
                height={500}
                className="object-cover w-full h-[450px]"
              />
            </div>
          )}

          {/* --- Content --- */}
          <div className="prose prose-lg max-w-none text-justify leading-relaxed text-gray-800">
            <ReactMarkdown>{news.content}</ReactMarkdown>
          </div>
        </div>

        {/* 🔹 Related News */}
        {relatedNews.length > 0 && (
     <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#F3F8FF] mt-10 pb-20">
    <div className="max-w-4xl mx-auto px-6 lg:px-0">
    {/* Tiêu đề */}
    <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 py-10">
      Tin tức liên quan
    </h2>

    {/* Lưới tin */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {relatedNews.slice(0, 3).map((item) => (
        <div
          key={item.slug}
          className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#00377B]/40
                     hover:shadow-[0_10px_25px_rgba(0,55,123,0.15)] transition-all duration-300 flex flex-col"
        >
          {/* Ảnh */}
          <Link
            href={`/tin-tuc/${item.slug}`}
            className="relative h-52 w-full overflow-hidden block"
          >
            <Image
              src={item.image || "/image/noimage.jpg"}
              alt={item.title}
              width={400}
              height={250}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay gradient nhẹ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Nội dung */}
          <div className="flex-1 flex flex-col justify-between p-5">
            <div>
              <Link href={`/tin-tuc/${item.slug}`}>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {item.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                {item.content.slice(0, 180) + "..."}
              </p>
            </div>

            {/* Nút xem chi tiết */}
            <div className="mt-5">
              <Link
                href={`/tin-tuc/${item.slug}`}
                className="text-[#00377B] font-medium hover:underline inline-flex items-center gap-1"
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
      ))}
    </div>
  </div>
</section>
        )}
      </article>
    </>
  );
}