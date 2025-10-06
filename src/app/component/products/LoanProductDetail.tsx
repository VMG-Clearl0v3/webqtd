'use client';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import DetailProductHeader from "@/app/component/DetailProductHeader";
import { Product } from "@/types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "@/app/component/products/ProductCard";
import { ChevronLeft, ChevronRight, Copy, Check } from "lucide-react";
import Breadcrumb from "@/app/component/Breadcrumb";

export default function LoanProductDetail({
  product,
  relatedProducts = [],
}: {
  product: Product;
  relatedProducts?: Product[];
}) {
  useEffect(() => {
    if (product) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [product]);

  const conditionItems = product.condition?.split("\n").filter(Boolean) || [];
  const featureItems = product.feature?.split("\n").filter(Boolean) || [];
  const documentItems = product.document?.split("\n").filter(Boolean) || [];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <DetailProductHeader
        title={product.title}
        image={product.image || "/image/noimage.jpg"}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-[#00377B]">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Cho vay", href: "/san-pham/cho-vay" },
            { label: product.title },
          ]}
        />

        {/* Tiêu đề */}
        <h2 className="text-3xl md:text-4xl text-center mt-10 mb-8 font-semibold text-[#00377B] tracking-wide">
          Chi tiết sản phẩm
        </h2>

        {/* Mục lục nhanh */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { label: "Điều kiện vay vốn", id: "condition" },
            { label: "Tính năng", id: "feature" },
            { label: "Hồ sơ thủ tục", id: "document" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="bg-[#00377B] text-white px-5 py-2 rounded-full hover:scale-105 hover:bg-[#004ca3] transition-transform duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Nội dung chi tiết */}
        <div className="space-y-8">
          <Section id="condition" title="Điều kiện vay vốn" items={conditionItems} />
          <Section id="feature" title="Tính năng" items={featureItems} />
          <Section id="document" title="Hồ sơ thủ tục" items={documentItems} />
        </div>

        {/* Liên quan */}
        {relatedProducts.length > 0 && (
          <>
            <h2 className="text-2xl md:text-4xl text-center mt-16 font-semibold text-[#00377B] tracking-wide">
              Có thể bạn quan tâm
            </h2>

            <div className="pt-10 relative">
              {/* Nút prev */}
              <button className="custom-prev absolute top-1/2 -left-4 md:-left-8 z-10 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition">
                <ChevronLeft size={26} className="text-[#00377B]" />
              </button>

              {/* Nút next */}
              <button className="custom-next absolute top-1/2 -right-4 md:-right-8 z-10 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition">
                <ChevronRight size={26} className="text-[#00377B]" />
              </button>

              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="!pb-12"
              >
                {relatedProducts.map((p) => (
                  <SwiperSlide key={p.id}>
                    <div className="h-full hover:-translate-y-2 transition-transform duration-300">
                      <ProductCard product={p} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// Component từng phần có mũi tên xuống (accordion thuần CSS)
function Section({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: string[];
}) {
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(items.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      id={id}
      className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
    >
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer pb-3 border-b border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/image/iconbonglua.png"
            alt="Bông lúa"
            width={28}
            height={28}
            className="object-contain"
          />
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="text-[#00377B] hover:text-[#004ca3] transition"
            title="Sao chép nội dung"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
          <span
            className={`transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            <ChevronDownIcon />
          </span>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="md:text-lg sm:text-md list-disc pl-6 space-y-2 text-justify">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Icon mũi tên xuống
function ChevronDownIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00377B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}