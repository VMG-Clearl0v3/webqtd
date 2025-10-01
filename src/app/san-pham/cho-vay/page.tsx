import { getProduct } from "@/services/product";
import ProductCard from "@/app/component/products/ProductCard";
import ProductHeader from "@/app/component/ProductHeader";
import LoanProductBenefit from "@/app/component/products/LoanProductBenefit";
import Breadcrumb from "@/app/component/Breadcrumb";

export default async function LoanProductsPage() {
  // Fetch data ở server
  const products = await getProduct();
  const loanProducts = products.filter((item) => item.type === "loan");

  return (
    <>
 <ProductHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Cho vay", href: "/cho-vay" },
          ]}
        />

        <h1 className="text-2xl md:text-4xl text-center mt-8 mb-12 font-bold text-[#00377B] tracking-wide">
          Sản phẩm cho vay
        </h1>

        {loanProducts.length === 0 ? (
          <p className="text-center text-gray-500 mb-12">
            Không có sản phẩm cho vay nào.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {loanProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <h2 className="text-2xl md:text-3xl text-center mb-8 font-bold text-[#00377B] tracking-wide">
          Lợi ích sử dụng sản phẩm vay của chúng tôi
        </h2>

        <div className="mt-6">
          <LoanProductBenefit />
        </div>
      </div>
    </>
  );
}