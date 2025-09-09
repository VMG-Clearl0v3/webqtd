'use client';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import type { News } from '@/types/news';

export default function NewsDetail({ news }: { news: News }) {
  // scroll về đầu trang mỗi lần bài thay đổi
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [news.id]); // hoặc [news.slug]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-black text-justify">{news.title}</h1>
      {news.image && (
        <img src={news.image} alt={news.title} className="mb-4 w-full" />
      )}
      <div className="prose prose-lg max-w-none text-black text-justify">
        <ReactMarkdown>{news.content}</ReactMarkdown>
      </div>
      <p className="text-sm italic mt-4 text-black">
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
    </div>
  );
}