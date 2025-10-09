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

      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Cho vay", href: "/cho-vay" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 py-6 leading-snug">
          Sản phẩm cho vay
        </h2>

        {loanProducts.length === 0 ? (
          <p className="text-center text-gray-500 mb-12">
            Không có sản phẩm cho vay nào.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-15">
            {loanProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <LoanProductBenefit />
      </div>
    </>
  );
}