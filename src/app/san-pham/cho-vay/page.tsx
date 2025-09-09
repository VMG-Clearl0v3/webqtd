import { getProduct } from "@/services/product";
import ProductCard from "@/app/component/products/ProductCard";
import ProductHeader from "@/app/component/ProductHeader";

export default async function LoanProductsPage() {
  // Fetch data ở server
  const products = await getProduct();
  const loanProducts = products.filter((item) => item.type === "loan");

  return (
    <>
      <ProductHeader />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">
          Sản phẩm cho vay
        </h2>

        {loanProducts.length === 0 ? (
          <p className="text-center text-gray-500">Chưa có sản phẩm cho vay.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loanProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}