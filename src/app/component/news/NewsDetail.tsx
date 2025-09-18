'use client';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { News } from '@/types/news';
import { Share2 } from 'lucide-react'; 

export default function NewsDetail({ news }: { news: News }) {
  const [formattedDate, setFormattedDate] = useState<string>(''); 
  const [shareUrl, setShareUrl] = useState<string>('');

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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black">
      <div className="border-b border-gray-300">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2 leading-snug">
          {news.title}
        </h1>

        {/* Date + Share */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-md font-semibold text-gray-400">
            {formattedDate || 'Đang tải…'}
          </p>

          <div className="flex items-center space-x-3 text-gray-500">
            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded-full bg-[#1877F2] text-white text-sm font-bold hover:bg-[#145dbf]"
              aria-label="Share on Facebook"
            >
              Facebook
            </a>
            {/* Zalo */}
            <a
              href={`https://zalo.me/share/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded-full bg-[#0068FF] text-white text-sm font-bold hover:bg-[#0055d6]"
              aria-label="Share on Zalo"
            >
              Zalo
            </a>

            {/* Copy link */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                alert('Đã sao chép link bài viết!');
              }}
              className="hover:text-[#0055d6]"
              aria-label="Copy link"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-6">
        {/* Featured image */}
        {news.image && (
          <img
            src={news.image}
            alt={news.title}
            className="w-full shadow-md object-cover mb-6"
          />
        )}
        {/* Content */}
        <div className="markdown-content">
          <ReactMarkdown>{news.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}