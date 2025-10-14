"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Product } from "@/types/product";
import { News } from "@/types/news";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(false);

  // 👇 trạng thái cho phần “Tải thêm”
  const [visibleProducts, setVisibleProducts] = useState(3);
  const [visibleNews, setVisibleNews] = useState(3);
  const [loadingMoreProducts, setLoadingMoreProducts] = useState(false);
  const [loadingMoreNews, setLoadingMoreNews] = useState(false);

  const totalResults = products.length + news.length;

  useEffect(() => {
    if (!q.trim()) return;

    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setNews(data.news || []);
      })
      .catch((err) => console.error("Lỗi khi tải dữ liệu:", err))
      .finally(() => setLoading(false));
  }, [q]);

  // ⚙️ Hàm xử lý tải thêm sản phẩm
  const handleLoadMoreProducts = () => {
    setLoadingMoreProducts(true);
    setTimeout(() => {
      setVisibleProducts((prev) => prev + 3);
      setLoadingMoreProducts(false);
    }, 600);
  };

  // ⚙️ Hàm xử lý tải thêm tin tức
  const handleLoadMoreNews = () => {
    setLoadingMoreNews(true);
    setTimeout(() => {
      setVisibleNews((prev) => prev + 3);
      setLoadingMoreNews(false);
    }, 600);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-4 py-10 text-gray-600">
      <h1 className="text-2xl font-semibold mb-4">
        Kết quả tìm kiếm cho{" "}
        <span className="text-red-600 font-bold">“{q}”</span>
      </h1>

      {/* 👇 Hiển thị tổng số kết quả */}
      {!loading && (
        <p className="text-gray-600 mb-6">
          {totalResults > 0 ? (
            <>
              Tìm thấy{" "}
              <span className="text-red-600 font-bold">{totalResults}</span>{" "}
              kết quả phù hợp
            </>
          ) : (
            "Không tìm thấy kết quả nào"
          )}
        </p>
      )}

      {/* 🔄 Hiển thị khi đang tải */}
      {loading ? (
        <p>Đang tải...</p>
      ) : totalResults === 0 ? (
        <div className="flex flex-col items-center text-gray-500">
          <Image
            src="/image/no-search-found.png"
            alt="no results"
            width={160}
            height={160}
          />
          <p className="mt-4">Không tìm thấy kết quả phù hợp.</p>
        </div>
      ) : (
        <>
          {/* 🛍️ SẢN PHẨM */}
          {products.length > 0 && (
            <>
              <h2 className="text-xl font-bold mt-8 mb-3">Sản phẩm</h2>
              <div className="grid md:grid-cols-3 gap-6 transition-all duration-300">
                {products.slice(0, visibleProducts).map((p) => {
                  const typePath =
                    p.type === "loan"
                      ? "cho-vay"
                      : p.type === "deposit"
                      ? "tien-gui"
                      : "";
                  return (
                    <Link
                      key={p.id}
                      href={`/san-pham/${typePath}/${p.slug}`}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                      <Image
                        src={p.image || "/image/noimage.jpg"}
                        alt={p.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-40"
                      />
                      <div className="p-3 font-medium">{p.title}</div>
                    </Link>
                  );
                })}
              </div>

              {/* Nút tải thêm sản phẩm */}
              {visibleProducts < products.length && (
              <div className="text-center mt-8">
  <button
    onClick={handleLoadMoreProducts}
    disabled={loadingMoreProducts}
    className={`relative px-8 py-3 rounded-full font-medium text-white transition-all duration-300 shadow-md ${
      loadingMoreProducts
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95"
    }`}
  >
    {loadingMoreProducts ? (
      <div className="flex items-center justify-center gap-2">
        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        <span>Đang tải...</span>
      </div>
    ) : (
      <>
        <span className="mr-1">Tải thêm sản phẩm</span>
        <span className="animate-bounce">↓</span>
      </>
    )}
  </button>
</div>
              )}
            </>
          )}

          {/* 📰 TIN TỨC */}
          {news.length > 0 && (
            <>
              <h2 className="text-xl font-bold mt-8 mb-3">Tin tức</h2>
              <div className="grid md:grid-cols-3 gap-6 transition-all duration-300">
                {news.slice(0, visibleNews).map((n) => (
                  <Link
                    key={n.id}
                    href={`/tin-tuc/${n.slug}`}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <Image
                      src={n.image || "/image/noimage.jpg"}
                      alt={n.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-40"
                    />
                    <div className="p-3 font-medium">{n.title}</div>
                  </Link>
                ))}
              </div>

              {/* Nút tải thêm tin tức */}
              {visibleNews < news.length && (
              <div className="text-center mt-8">
  <button
    onClick={handleLoadMoreNews}
    disabled={loadingMoreNews}
    className={`relative px-8 py-3 rounded-full font-medium text-white transition-all duration-300 shadow-md ${
      loadingMoreNews
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95"
    }`}
  >
    {loadingMoreNews ? (
      <div className="flex items-center justify-center gap-2">
        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        <span>Đang tải...</span>
      </div>
    ) : (
      <>
        <span className="mr-1">Tải thêm tin tức</span>
        <span className="animate-bounce">↓</span>
      </>
    )}
  </button>
</div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}