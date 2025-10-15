"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { Product } from "@/types/product";
import { News } from "@/types/news";

export default function SearchClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const [query, setQuery] = useState(q);
  const [products, setProducts] = useState<Product[]>([]);
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(false);

  const [visibleProducts, setVisibleProducts] = useState(3);
  const [visibleNews, setVisibleNews] = useState(3);
  const [loadingMoreProducts, setLoadingMoreProducts] = useState(false);
  const [loadingMoreNews, setLoadingMoreNews] = useState(false);

  const totalResults = products.length + news.length;

  // 🔍 Gọi API khi có thay đổi query
  useEffect(() => {
    if (!q.trim()) return;
    setLoading(true);

    fetch(`/api/search?q=${encodeURIComponent(q)}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setNews(data.news || []);
        setVisibleProducts(3);
        setVisibleNews(3);
      })
      .catch((err) => console.error("Lỗi khi tải dữ liệu:", err))
      .finally(() => setLoading(false));
  }, [q]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/tim-kiem?q=${encodeURIComponent(query)}`);
  };

  const handleLoadMoreProducts = () => {
    setLoadingMoreProducts(true);
    setTimeout(() => {
      setVisibleProducts((prev) => prev + 3);
      setLoadingMoreProducts(false);
    }, 500);
  };

  const handleLoadMoreNews = () => {
    setLoadingMoreNews(true);
    setTimeout(() => {
      setVisibleNews((prev) => prev + 3);
      setLoadingMoreNews(false);
    }, 500);
  };

  // 🎬 Hiệu ứng xuất hiện mượt mà
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-4 py-10 text-gray-700">
		<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
		{/* Nút quay lại */}
		<button
		onClick={() => router.back()}
		className="group flex items-center gap-2 px-4 py-2 rounded-full text-[#00377B] bg-[#00377B]/10 hover:bg-[#00377B]/20 transition-all duration-300"
		>
		<ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
		<span className="font-medium">Quay lại</span>
		</button>

		{/* Ô tìm kiếm */}
		<form
		onSubmit={handleSearch}
		className="flex w-full sm:w-auto sm:min-w-[400px] items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#00377B] transition-all"
		>
		<Search className="w-5 h-5 text-gray-400 mr-2" />
		<input
		type="text"
		placeholder="Nhập từ khóa tìm kiếm..."
		value={query}
		onChange={(e) => setQuery(e.target.value)}
		className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
		/>
		<button
		type="submit"
		className="ml-3 px-5 py-2 bg-[#00377B] text-white rounded-full font-medium hover:bg-[#004a9f] transition-all duration-300"
		>
		Tìm kiếm
		</button>
		</form>
		</div>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-3"
      >
        Kết quả tìm kiếm cho{" "}
        <span className="text-[#00377B] font-bold">“{q}”</span>
      </motion.h1>

      {!loading && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 mb-6"
        >
          {totalResults > 0 ? (
            <>
              Tìm thấy{" "}
              <span className="text-[#00377B] font-bold">{totalResults}</span>{" "}
              kết quả phù hợp
            </>
          ) : (
            "Không tìm thấy kết quả nào"
          )}
        </motion.p>
      )}

      {loading ? (
        <div className="flex justify-center py-20">
          <span className="inline-block w-10 h-10 border-4 border-[#00377B] border-t-transparent rounded-full animate-spin"></span>
        </div>
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
              <h2 className="text-2xl font-semibold mt-8 mb-5">Sản phẩm</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <AnimatePresence>
                  {products.slice(0, visibleProducts).map((p, i) => {
                    const typePath =
                      p.type === "loan"
                        ? "cho-vay"
                        : p.type === "deposit"
                        ? "tien-gui"
                        : "";
                    return (
                      <motion.div
                        key={p.id}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        custom={i}
                        layout
                      >
                        <Link
                          href={`/san-pham/${typePath}/${p.slug}`}
                          className="flex flex-col h-full border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                          <div className="relative w-full h-48">
                            <Image
                              src={p.image || "/image/noimage.jpg"}
                              alt={p.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-between flex-1 p-4">
                            <div className="font-semibold text-gray-800 line-clamp-2">
                              {p.title}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {visibleProducts < products.length && (
                <div className="relative flex items-center justify-center mt-10">
                  <div className="flex-1 border-t border-dashed border-gray-300"></div>
                  <motion.button
                    onClick={handleLoadMoreProducts}
                    disabled={loadingMoreProducts}
                    className={`relative mx-4 px-8 py-2 rounded-full font-medium transition-all duration-300 shadow-md whitespace-nowrap overflow-hidden ${
                      loadingMoreProducts
                        ? "bg-gray-200 cursor-not-allowed text-white"
                        : "bg-white text-[#00377B] border border-[#00377B] hover:bg-[#00377B] hover:text-white"
                    }`}
                  >
                    {loadingMoreProducts ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="inline-block w-5 h-5 border-2 border-[#00377B] border-t-transparent rounded-full animate-spin"></span>
                        <span>Đang tải...</span>
                      </div>
                    ) : (
                      <span>Xem thêm sản phẩm</span>
                    )}
                  </motion.button>
                  <div className="flex-1 border-t border-dashed border-gray-300"></div>
                </div>
              )}
            </>
          )}

          {/* 📰 TIN TỨC */}
          {news.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-12 mb-5">Tin tức</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <AnimatePresence>
                  {news.slice(0, visibleNews).map((n, i) => (
                    <motion.div
                      key={n.id}
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      custom={i}
                      layout
                    >
                      <Link
                        href={`/tin-tuc/${n.slug}`}
                        className="flex flex-col h-full border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all hover:-translate-y-1"
                      >
                        <div className="relative w-full h-48">
                          <Image
                            src={n.image || "/image/noimage.jpg"}
                            alt={n.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-between flex-1 p-4">
                          <div className="font-semibold text-gray-800 line-clamp-2">
                            {n.title}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {visibleNews < news.length && (
                <div className="relative flex items-center justify-center mt-10">
                  <div className="flex-1 border-t border-dashed border-gray-300"></div>
                  <motion.button
                    onClick={handleLoadMoreNews}
                    disabled={loadingMoreNews}
                    className={`relative mx-4 px-8 py-2 rounded-full font-medium transition-all duration-300 shadow-md whitespace-nowrap overflow-hidden ${
                      loadingMoreNews
                        ? "bg-gray-200 cursor-not-allowed text-white"
                        : "bg-white text-[#00377B] border border-[#00377B] hover:bg-[#00377B] hover:text-white"
                    }`}
                  >
                    {loadingMoreNews ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="inline-block w-5 h-5 border-2 border-[#00377B] border-t-transparent rounded-full animate-spin"></span>
                        <span>Đang tải...</span>
                      </div>
                    ) : (
                      <span>Xem thêm tin tức</span>
                    )}
                  </motion.button>
                  <div className="flex-1 border-t border-dashed border-gray-300"></div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}