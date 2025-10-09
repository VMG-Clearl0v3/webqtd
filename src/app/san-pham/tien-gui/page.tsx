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
          <Breadcrumb
              items={[
                { label: "Trang chủ", href: "/" },
                { label: "Tiết kiệm", href: "/tien-gui" },
              ]}
            />
          <div className="max-w-6xl mx-auto px-6 md:px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 py-6 leading-snug">
              Sản phẩm tiết kiệm
            </h2>

            {depositProducts.length === 0 ? (
              <p className="text-center text-gray-500 mb-12">
                Không có sản phẩm tiết kiệm nào.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-15">
                {depositProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            <DepositProducBenefit />
          </div>
        </>
      );
    }