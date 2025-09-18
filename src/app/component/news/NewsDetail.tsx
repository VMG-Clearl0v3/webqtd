'use client';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import type { News } from '@/types/news';
import { Facebook, Share2 } from 'lucide-react';
import Head from 'next/head'; 

export default function NewsDetail({ news }: { news: News }) {
  const [formattedDate, setFormattedDate] = useState('');
  const [shareUrl, setShareUrl] = useState('');

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

    // URL hiện tại
    setShareUrl(window.location.href);
  }, [news.date]);

  return (
    <>
      {/* Open Graph meta tags */}
      <Head>
        <title>{news.title}</title>
        <meta property="og:title" content={news.title} />
        <meta
          property="og:description"
          content={news.content.slice(0, 150)}
        />
        <meta
          property="og:image"
          content={news.image || '/noimage.jpg'}
        />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black">
        <div className="border-b border-gray-300">
          <h1 className="text-4xl font-bold mb-2 leading-snug">
            {news.title}
          </h1>

          <div className="flex items-center justify-between mb-4">
            <p className="text-md font-semibold text-gray-400">
              {formattedDate || 'Đang tải…'}
            </p>

            <div className="flex items-center space-x-3 text-blue-400">
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
          {news.image && (
            <img
              src={news.image}
              alt={news.title}
              className="w-full shadow-md object-cover mb-6"
            />
          )}
          <div className="markdown-content">
            <ReactMarkdown>{news.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}