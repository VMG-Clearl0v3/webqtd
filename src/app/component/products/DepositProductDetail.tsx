"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/globals.css";
import Image from "next/image";
import { useEffect } from "react";
import { Product } from "@/types/product";
import DetailProductHeader from "@/app/component/DetailProductHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "@/app/component/products/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import Breadcrumb from "@/app/component/Breadcrumb";

export default function DepositProductDetail({ 
  product,
  relatedProducts = [],
}: {
  product: Product;
  relatedProducts?: Product[];
}) {
  // Mỗi lần đổi product thì scroll lên đầu trang
    useEffect(() => {
    if (product) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  const conditionItems = product.condition?.split("\n").filter(Boolean) || [];
  const featureItems = product.feature?.split("\n").filter(Boolean) || [];
  const documentItems = product.document?.split("\n").filter(Boolean) || [];

  return (
    <>
      <DetailProductHeader title={product.title} image={product.image || "/image/noimage.jpg"} />
      <div className="max-w-7xl mx-auto p-6">
        <Breadcrumb
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tiết kiệm', href: '/tien-gui' },
          { label: product.title },
        ]}
      />
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
          Chi tiết sản phẩm
        </h2>
        <div className="text-[#00377B] space-y-8">
          {/* Điều kiện vay vốn */}
          <Section title="Điều kiện vay vốn" items={conditionItems} />

          {/* Tính năng */}
          <Section title="Tính năng" items={featureItems} />

          {/* Hồ sơ thủ tục */}
          <Section title="Hồ sơ thủ tục" items={documentItems} />
        </div>
        <h2 className="text-3xl md:text-4xl text-center font-bold text-[#00377B] tracking-wide pt-10">
            Có thể bạn quan tâm
        </h2>
        {relatedProducts.length > 0 && (
          <div className="pt-10 relative">
            {/* Nút prev */}
            <button className="custom-prev absolute top-1/2 -left-6 z-10 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 transition">
              <ChevronLeft size={24} className="text-[#00377B]" />
            </button>

            {/* Nút next */}
            <button className="custom-next absolute top-1/2 -right-6 z-10 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100 transition">
              <ChevronRight size={24} className="text-[#00377B]" />
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
              className="!pb-10"
            >
              {relatedProducts.map((p) => (
                <SwiperSlide key={p.id}>
                  <div className="h-full">
                    <ProductCard product={p} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

// Component con hiển thị danh sách
function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-blue-50 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 pb-4">
        <Image
          src="/image/iconbonglua.png"
          alt="Bông lúa"
          width={25}
          height={25}
          className="object-contain"
        />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <ul className="md:text-lg sm:text-md list-disc pl-6 space-y-2 text-justify">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}