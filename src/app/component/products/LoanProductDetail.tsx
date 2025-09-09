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
        {/* Bạn có thể đưa icon vào đây */}
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