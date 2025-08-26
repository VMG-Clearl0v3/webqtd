import { getProduct } from "@/services/product";
import ProductCard from "@/app/component/products/ProductCard";
import ProductHeader from "@/app/component/ProductHeader";

export default async function DepositProductsPage() {
  const products = await getProduct();
  const depositProducts = products.filter((item) => item.type === "deposit");

  return (
    <>
      <ProductHeader/>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-[#00377B] text-center">Sản phẩm tiết kiệm</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depositProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}