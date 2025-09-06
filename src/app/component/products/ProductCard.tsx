import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border rounded-sm shadow hover:shadow-md transition">
      <Link href={`/san-pham/${product.type === "loan" ? "cho-vay" : "tien-gui"}/${product.slug}`}>
        <Image
        src={product.image}
        alt={product.title}
        width={400} 
        height={160} 
        className="w-full h-50 object-cover rounded-t-sm"
        />
      </Link>
      <div className="p-4">
        <Link href={`/san-pham/${product.type === "loan" ? "cho-vay" : "tien-gui"}/${product.slug}`}>
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-3">{product.title}</h3>
        </Link>
      </div>
    </div>
  );
}