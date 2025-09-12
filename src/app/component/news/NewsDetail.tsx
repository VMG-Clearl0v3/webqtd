'use client';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import type { News } from '@/types/news';

export default function NewsDetail({ news }: { news: News }) {
  // scroll về đầu trang mỗi lần bài thay đổi
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [news.slug]);

  return (
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black">
  {/* Title */}
  <h1 className="text-4xl font-bold mb-2 leading-snug">
    {news.title}
  </h1>

  {/* Date */}
  <p className="text-lg font-semibold text-gray-400 mb-6">
    {`${new Date(news.date).toLocaleDateString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })} ${new Date(news.date).toLocaleTimeString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      hour: '2-digit',
      minute: '2-digit',
    })}`}
  </p>

  {/* Featured image */}
  {news.image && (
    <img
      src={news.image}
      alt={news.title}
      className="mb-8 w-full shadow-md object-cover"
    />
  )}

  {/* Content */}
  <div className="markdown-content">
    <ReactMarkdown>{news.content}</ReactMarkdown>
  </div>
</div>
  );
}