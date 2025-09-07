import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white w-full rounded-sm shadow hover:shadow-md transition group">
      <div className="relative h-48 w-full overflow-hidden rounded-t-sm">
      <Link className="block h-full" href={`/san-pham/${product.type === "loan" ? "cho-vay" : "tien-gui"}/${product.slug}`}>
        <Image
        src={product.image || "/image/noimage.jpg"}
        alt={product.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      </div>
      <div className="p-4">
        <Link href={`/san-pham/${product.type === "loan" ? "cho-vay" : "tien-gui"}/${product.slug}`}>
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-3">{product.title}</h3>
        </Link>
      </div>
    </div>
  );
}