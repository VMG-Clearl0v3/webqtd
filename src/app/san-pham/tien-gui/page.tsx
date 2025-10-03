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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Breadcrumb
              items={[
                { label: "Trang chủ", href: "/" },
                { label: "Tiết kiệm", href: "/tien-gui" },
              ]}
            />

            <h1 className="text-2xl md:text-4xl text-center py-10 font-semibold text-[#00377B] tracking-wide">
              Sản phẩm tiết kiệm
            </h1>

            {depositProducts.length === 0 ? (
              <p className="text-center text-gray-500 mb-12">
                Không có sản phẩm tiết kiệm nào.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                {depositProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            <h1 className="text-2xl md:text-4xl text-center pb-10 font-semibold text-[#00377B] tracking-wide">
              Lợi ích sử dụng sản phẩm tiết kiệm của chúng tôi
            </h1>
            <DepositProducBenefit />
          </div>
        </>
      );
    }