"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import type { News } from "@/types/news";
import { Facebook, Share2 } from "lucide-react";
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
  const [formattedDate, setFormattedDate] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // Khi thay đổi slug → cuộn lên đầu
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [news.slug]);

  // Format ngày & URL
  useEffect(() => {
    const date = new Date(news.date);
    const dateStr = `${date.toLocaleDateString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })} ${date.toLocaleTimeString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    setFormattedDate(dateStr);
    setShareUrl(window.location.href);
  }, [news.date]);

  // Sao chép link
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
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức", href: "/tin-tuc" },
          { label: news.title },
        ]}
      />

      {/* 🔹 Nội dung */}
      <article className="max-w-6xl mx-auto px-6 md:px-4">
        <div className="max-w-4xl mx-auto">
          {/* --- Tiêu đề --- */}
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug mt-10 pb-3 text-gray-900">
            {news.title}
          </h1>

          {/* --- Meta + Chia sẻ --- */}
          <div className="flex items-center justify-between text-gray-500 border-b border-gray-200 pb-3 mb-6">
            <p className="text-sm">{formattedDate || "Đang tải…"}</p>
            <div className="flex items-center gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#0055d6] transition"
                aria-label="Chia sẻ Facebook"
              >
                <Facebook size={20} />
              </a>

              <button
                onClick={handleCopy}
                className="hover:text-[#0055d6] relative"
                aria-label="Sao chép liên kết"
              >
                <Share2 size={20} />
                <span
                  className={`absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md transition-opacity duration-300 ${
                    copied ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Đã sao chép!
                </span>
              </button>
            </div>
          </div>

          {/* --- Nội dung bài viết (Markdown) --- */}
         <div className="prose prose-lg max-w-none text-justify leading-relaxed text-gray-800">
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw, rehypeSanitize]}
    components={{
      // ✅ Custom <p> — bỏ bọc <p> nếu có block element bên trong
      p: ({
        node,
        children,
      }: {
        node: import("hast").Element;
        children: React.ReactNode;
      }) => {
        const hasBlockElement =
          node.children?.some((child) => {
            if (
              child.type === "element" &&
              ["img", "iframe", "div", "figure", "table"].includes(child.tagName)
            ) {
              return true;
            }
            return false;
          }) ?? false;

        if (hasBlockElement) return <>{children}</>;
        return <p className="my-4 leading-relaxed">{children}</p>;
      },

      // ✅ Custom <img> — hiển thị ảnh với caption (alt)
      img: ({
        node,
        ...props
      }: {
        node: import("hast").Element;
        alt?: string;
        src?: string;
      }) => (
        <figure className="my-8 flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            {...props}
            alt={props.alt || ""}
            className="rounded-xl shadow-md max-w-full h-auto object-cover"
          />
          {props.alt && (
            <figcaption className="text-sm text-gray-500 italic mt-2 text-center">
              {props.alt}
            </figcaption>
          )}
        </figure>
      ),

      // ✅ Custom <table> — tránh lỗi <div> trong <p>, hỗ trợ cuộn ngang
      table: ({
        node,
        ...props
      }: {
        node: import("hast").Element;
      }) => (
        <div className="overflow-x-auto my-6">
          <table
            {...props}
            className="min-w-full border border-gray-200 text-sm"
          />
        </div>
      ),
    }}
  >
    {news.content}
  </ReactMarkdown>
</div>
        </div>

        {/* --- Tin tức liên quan --- */}
        {relatedNews.length > 0 && (
          <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-[#F3F8FF] mt-10 pb-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-0">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 py-10">
                Tin tức liên quan
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedNews.slice(0, 3).map((item) => (
                  <div
                    key={item.slug}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#00377B]/40 hover:shadow-[0_10px_25px_rgba(0,55,123,0.15)] transition-all duration-300 flex flex-col"
                  >
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
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