import { getProduct } from "@/services/product";
import ProductCard from "@/app/component/products/ProductCard";
import ProductHeader from "@/app/component/ProductHeader";
import DepositProducBenefit from "@/app/component/products/DepositProducBenefit";
import Breadcrumb from "@/app/component/Breadcrumb";

export default async function DepositProductsPage() {
  // Fetch data ở server
  const products = await getProduct();
  const depositProducts = products.filter((item) => item.type === "deposit");

  return (
    <>
      <ProductHeader />
      <div className="max-w-7xl mx-auto p-6">
         <Breadcrumb
          items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tiết kiệm', href: '/tien-gui' },
        ]}
      />
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
         <h2 className="text-3xl md:text-4xl text-center py-10 font-bold text-[#00377B] tracking-wide">
          Lợi ích sử dụng sản phẩm tiết kiệm của chúng tôi
        </h2>
       <DepositProducBenefit/>
      </div>
    </>
  );
}