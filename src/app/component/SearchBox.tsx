"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { News } from "@/types/news";

interface SearchResult {
  products: Product[];
  news: News[];
}

export default function SearchBox({ onSubmit }: { onSubmit: (q: string) => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult>({ products: [], news: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults({ products: [], news: [] });
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error("API lỗi");
        const data = await res.json();
        setResults(data || { products: [], news: [] });
      } catch (error) {
        console.error("Lỗi khi tìm kiếm:", error);
        setResults({ products: [], news: [] });
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchResults, 400); // debounce 400ms
    return () => clearTimeout(delay);
  }, [query]);

  const total = results.products.length + results.news.length;

  return (
    <div className="relative text-gray-900">
      {/* Ô nhập tìm kiếm */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) onSubmit(query);
        }}
      >
        <input
          type="text"
          value={query}
          placeholder="Nhập từ khóa..."
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </form>

      {/* Dropdown kết quả */}
      {query.trim() && (
        <div className="absolute bg-white border border-gray-200 rounded-lg mt-2 w-full shadow-lg max-h-80 overflow-y-auto scrollbar-hide z-50">
          {loading && (
            <div className="p-4 text-gray-500 flex items-center gap-2">
              <span className="animate-spin border-2 border-blue-400 border-t-transparent rounded-full w-4 h-4"></span>
              Đang tìm kiếm...
            </div>
          )}

          {!loading && total === 0 && (
            <div className="p-6 flex flex-col items-center text-gray-500">
              <Image
                src="/image/no-search-found.png"
                alt="No results"
                width={120}
                height={120}
              />
              <p className="mt-2">Không tìm thấy kết quả nào</p>
            </div>
          )}

          {!loading && total > 0 && (
            <div className="divide-y divide-gray-100">
              {/* --- Sản phẩm liên quan --- */}
              {results.products.length > 0 && (
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    🛍 Sản phẩm liên quan
                  </p>
                  {results.products.slice(0, 5).map((p) => {
                    const typePath =
                      p.type?.toLowerCase() === "loan"
                        ? "cho-vay"
                        : p.type?.toLowerCase() === "deposit"
                        ? "tien-gui"
                        : "khac"; // fallback

                    return (
                      <Link
                        key={p.id}
                        href={`/san-pham/${typePath}/${p.slug}`}
                        className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md transition"
                        onClick={() => onSubmit(p.title)} // để đóng modal
                      >
                        <Image
                          src={p.image || "/image/default-thumb.jpg"}
                          alt={p.title}
                          width={50}
                          height={50}
                          className="rounded-md object-cover"
                        />
                        <span className="line-clamp-1">{p.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* --- Tin tức liên quan --- */}
              {results.news.length > 0 && (
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-600 mb-2">
                    📰 Tin tức liên quan
                  </p>
                  {results.news.slice(0, 5).map((n) => (
                    <Link
                      key={n.id}
                      href={`/tin-tuc/${n.slug}`}
                      className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md transition"
                      onClick={() => onSubmit(n.title)}
                    >
                      <Image
                        src={n.image || "/image/default-thumb.jpg"}
                        alt={n.title}
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                      />
                      <span className="line-clamp-1">{n.title}</span>
                    </Link>
                  ))}
                </div>
              )}

              {/* --- Xem tất cả --- */}
              <button
                type="button"
                onClick={() => onSubmit(query)}
                className="block w-full text-center text-blue-600 font-medium py-3 hover:bg-gray-50 transition"
              >
                Xem tất cả kết quả →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}