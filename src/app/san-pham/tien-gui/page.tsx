import { getProduct } from "@/services/product";
import ProductCard from "@/app/component/products/ProductCard";

export default async function DepositProductsPage() {
  const products = await getProduct();
  const depositProducts = products.filter((item) => item.type ==="deposit");
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">Sản phẩm tiền gửi</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {depositProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}