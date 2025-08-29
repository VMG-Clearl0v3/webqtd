import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border rounded-xl shadow hover:shadow-md transition">
        <Image
        src={product.image}
        alt={product.title}
        width={400} 
        height={160} 
        className="w-full h-40 object-cover rounded-t-xl"
        />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <Link
          href={`/san-pham/${product.type === "loan" ? "cho-vay" : "tien-gui"}/${product.slug}`}
          className="text-blue-600 font-medium hover:underline block mt-3"
        >
          Xem chi tiết →
        </Link>
      </div>
    </div>
  );
}