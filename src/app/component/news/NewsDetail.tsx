'use client';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { News } from '@/types/news';
import { Facebook, Share2 } from 'lucide-react'; 
import Breadcrumb from "@/app/component/Breadcrumb";

export default function NewsDetail({ news }: { news: News }) {
  const [formattedDate, setFormattedDate] = useState<string>(''); 
  const [shareUrl, setShareUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // scroll về đầu trang mỗi lần bài thay đổi
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [news.slug]);

  // format ngày & lấy url trên client để tránh hydration mismatch
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
    setTimeout(() => setCopied(false), 1500); // 1.5 giây sau ẩn chữ Copied!
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Breadcrumb
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tin tức', href: '/tin-tuc' },
          { label: news.title },
        ]}
      />
      <div className="max-w-4xl mx-auto text-black">
      <div className="border-b border-gray-200">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl pt-10 font-semibold mb-2 leading-snug">
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

      <div className="py-5">
        {/* Featured image */}
        {news.image && (
          <img
            src={news.image}
            alt={news.title}
            className="w-full shadow-md object-cover mb-5"
          />
        )}
        {/* Content */}
        <div className="markdown-content space-y-2">
          <ReactMarkdown>{news.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  </div>
  );
}