import { getProduct } from "@/services/product";
import ProductCard from "@/app/component/products/ProductCard";
import ProductHeader from "@/app/component/ProductHeader";

export default async function DepositProductsPage() {
  // Fetch data ở server
  const products = await getProduct();
  const depositProducts = products.filter((item) => item.type === "deposit");

  return (
    <>
      <ProductHeader />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
          Sản phẩm tiết kiệm
        </h1>

        {depositProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            Không có sản phẩm tiết kiệm nào.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depositProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}