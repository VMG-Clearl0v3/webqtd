'use client';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import DetailProductHeader from "@/app/component/DetailProductHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "@/app/component/products/ProductCard";
import { ChevronLeft, ChevronRight, Copy, Check, ChevronDown } from "lucide-react";
import Breadcrumb from "@/app/component/Breadcrumb";

export default function LoanProductDetail({
  product,
  relatedProducts = [],
}: {
  product: Product;
  relatedProducts?: Product[];
}) {
  const [selectedSection, setSelectedSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (product) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [product]);

  const conditionItems = product.condition?.split("\n").filter(Boolean) || [];
  const featureItems = product.feature?.split("\n").filter(Boolean) || [];
  const documentItems = product.document?.split("\n").filter(Boolean) || [];

  const sections = [
    { label: "Điều kiện vay vốn", id: "condition" },
    { label: "Tính năng", id: "feature" },
    { label: "Hồ sơ thủ tục", id: "document" },
  ];

  const handleSelect = (id: string) => {
    setSelectedSection(id);
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <DetailProductHeader
        title={product.title}
        image={product.image || "/image/noimage.jpg"}
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Tiết kiệm", href: "/san-pham/tien-gui" },
          { label: product.title },
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-4">

        {/* Tiêu đề chính */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 py-10 leading-snug">
          Chi tiết sản phẩm
        </h2>

        {/* Dropdown mục lục nhanh */}
       {/* <div className="relative mb-10 max-w-xs mx-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-[#00377B] text-white px-5 py-3 rounded-full hover:bg-[#004ca3] transition"
          >
            <span>
              {selectedSection
                ? sections.find((s) => s.id === selectedSection)?.label
                : "Chọn mục cần xem"}
            </span>
            <ChevronDown
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-2xl mt-2 border border-gray-100 z-20 overflow-hidden animate-fadeIn">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className="block w-full text-left px-5 py-3 hover:bg-gray-50 text-[#00377B] transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
*/}
        {/* Nội dung */}
        <div className="space-y-8 text-[#00377B]">
          <Section id="condition" title="Điều kiện vay vốn" items={conditionItems} />
          <Section id="feature" title="Tính năng" items={featureItems} />
          <Section id="document" title="Hồ sơ thủ tục" items={documentItems} />
        </div>

        {/* Liên quan */}
        {relatedProducts.length > 0 && (
          <>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 pt-16 leading-snug">
              Có thể bạn quan tâm
            </h2>

            <div className="relative py-10">
              {/* Nút prev */}
              <button
                className="custom-prev absolute -left-5 md:-left-6 top-1/2 z-10 -translate-y-[95%]
                w-10 h-10 flex items-center justify-center rounded-full
                bg-white/90 backdrop-blur text-[#00377B] shadow-md
                hover:bg-[#ff0000] hover:text-white
                transition-all duration-300 ease-out"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Swiper */}
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) =>
                    `<span class="${className} swiper-pagination-bullet-custom"></span>`,
                }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="!pb-12"
              >
                {relatedProducts.map((p) => (
                  <SwiperSlide key={p.id}>
                    <div className="h-full">
                      <ProductCard product={p} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Nút next */}
              <button
                className="custom-next absolute -right-5 md:-right-6 top-1/2 z-10 -translate-y-[95%]
                w-10 h-10 flex items-center justify-center rounded-full
                bg-white/90 backdrop-blur text-[#00377B] shadow-md
                hover:bg-[#ff0000] hover:text-white
                transition-all duration-300 ease-out"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// Accordion Section
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
    <div id={id} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
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
          <span className={`transform transition-transform ${open ? "rotate-180" : ""}`}>
            <ChevronDown size={20} />
          </span>
        </div>
      </div>

      {open && (
        <ul className="mt-4 md:text-lg sm:text-md list-disc pl-6 space-y-2 text-justify transition-all duration-300">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}