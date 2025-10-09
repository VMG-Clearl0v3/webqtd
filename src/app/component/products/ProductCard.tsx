import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const typePath =
    product.type === "loan"
      ? "cho-vay"
      : product.type === "deposit"
      ? "tien-gui"
      : product.type;

  const href = `/san-pham/${typePath}/${product.slug}`;
  const imageUrl = product.image || "/image/noimage.jpg";

  return (
    <Link
      href={href}
      className="bg-white w-full shadow-lg hover:shadow-xl transition group block rounded-xl overflow-hidden border border-gray-100"
    >
      {/* Ảnh sản phẩm */}
      <div className="relative h-45 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={product.title || "Sản phẩm"}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Nội dung */}
      <div className="p-4 flex flex-col justify-between h-[145px]">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-4 group-hover:text-[#00377B] transition-colors">
          {product.title}
        </h3>

        {/* Nút xem chi tiết */}
          <div className="mt-auto">
          <span
          className="inline-flex items-center gap-2 text-[#00377B] font-medium text-sm border border-[#00377B]
          rounded-full px-4 py-1.5 transition-all duration-300
          hover:bg-[#00377B] hover:text-white hover:shadow-md"
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}