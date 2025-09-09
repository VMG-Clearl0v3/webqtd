'use client';

import DetailProductHeader from "@/app/component/DetailProductHeader";
import { Product } from "@/types/product";
import { useEffect } from "react";

export default function LoanProductDetail({ product }: { product: Product }) {
  // Scroll lên đầu mỗi khi vào chi tiết
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
      <div className="max-w-6xl mx-auto p-6">
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
      </div>
    </>
  );
}

// Component con hiển thị danh sách
function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-blue-50 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 pb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          className="flex-shrink-0"
        >
          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
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