import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  // Xác định slug theo type một lần
  const typePath =
    product.type === "loan"
      ? "cho-vay"
      : product.type === "deposit"
      ? "tien-gui"
      : product.type; // fallback

  const href = `/san-pham/${typePath}/${product.slug}`;
  const imageUrl = product.image || "/image/noimage.jpg";

  return (
    <Link
      href={href}
      className="bg-white w-full rounded-sm shadow hover:shadow-md transition group block"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-sm">
        <Image
          src={imageUrl}
          alt={product.title || "Sản phẩm"}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-3">
          {product.title}
        </h3>
      </div>
    </Link>
  );
}