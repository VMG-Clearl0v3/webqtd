import { getProducts } from "@/services/productService";
import ProductCard from "@/components/products/ProductCard";

export default async function LoanProductsPage() {
  const products = await getProducts("loan");

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Sản phẩm cho vay</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}