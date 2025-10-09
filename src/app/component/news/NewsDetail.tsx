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
    const dateStr = `${new Date(news.date).toLocaleDateString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })} ${new Date(news.date).toLocaleTimeString('vi-VN', {
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
      <Breadcrumb
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tin tức', href: '/tin-tuc' },
          { label: news.title },
        ]}
      />

      <div className="max-w-6xl mx-auto p-6">
        <div className="max-w-4xl mx-auto text-black">
          <div className="border-b border-gray-200">
            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-semibold py-2 leading-snug">
              {news.title}
            </h1>

            {/* Date + Share */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-400">
                {formattedDate || 'Đang tải…'}
              </p>

              <div className="flex items-center space-x-3 text-gray-400">
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0055d6]"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={20} />
                </a>

                {/* Copy link */}
                <div className="relative flex items-center justify-center">
                  <button
                    onClick={handleCopy}
                    className="hover:text-[#0055d6] flex items-center justify-center"
                    aria-label="Copy link"
                  >
                    <Share2 size={20} />
                  </button>

                  <span
                    className={`absolute -top-7 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md
                    transition-opacity duration-300 ${
                      copied ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Copied!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Nội dung bài */}
          <div className="py-5">
            {news.image && (
              <img
                src={news.image}
                alt={news.title}
                className="w-full shadow-md rounded-xl object-cover mb-5"
              />
            )}
            <div className="markdown-content space-y-2">
              <ReactMarkdown>{news.content}</ReactMarkdown>
            </div>
          </div>
        </div>

        {/* 🔹 Tin tức liên quan */}
        {relatedNews.length > 0 && (
          <div className="max-w-4xl mx-auto border-t py-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Tin tức liên quan
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedNews.slice(0, 3).map((item) => (
                <Link
                  key={item.slug}
                  href={`/tin-tuc/${item.slug}`}
                  className="group block rounded-xl overflow-hidden border border-gray-100 hover:border-[#00377B]/40
                             hover:shadow-[0_8px_20px_rgba(0,55,123,0.15)] transition-all duration-300"
                >
                  <div className="h-48 w-full overflow-hidden">
                    <Image
                      src={item.image || "/image/default-news.jpg"}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 bg-white">
                    <p className="text-base font-semibold text-[#00377B] line-clamp-2 group-hover:text-[#0056c9] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {item.content.slice(0, 100) + "..."}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}