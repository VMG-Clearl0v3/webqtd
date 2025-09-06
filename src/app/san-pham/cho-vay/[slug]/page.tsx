import { getProductBySlug } from "@/services/product";
import DetailProductHeader from "@/app/component/DetailProductHeader";
// import { CheckCircleIcon, ArrowRightIcon } from "lucide-react";

export default async function LoanProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <p className="text-center text-gray-500">Không tìm thấy sản phẩm cho vay.</p>;
  }
  const conditionItems = product.condition?.split('\n').filter(Boolean) || [];
  const featureItems = product.feature?.split('\n').filter(Boolean) || [];
  const documentItems = product.document?.split('\n').filter(Boolean) || [];
  return (
    <>
      <DetailProductHeader title={product.title} image={product.image || "/image/noimage.jpg"} />
        <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-[#00377B] tracking-wide">Chi tiết sản phẩm</h2>
        <div className="text-[#00377B] space-y-8">
        {/* Điều kiện vay vốn */}
        <div className="bg-blue-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 pb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          className="flex-shrink-0"
        >
          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
        <h1 className="text-2xl font-semibold">Điều kiện vay vốn</h1>
        </div>
        <ul className="text-lg list-disc pl-6 space-y-2">
          {conditionItems.map((item, idx) => (
          <li key={idx}>{item}</li>
          ))}
        </ul>
        </div>

        {/* Tính năng */}
        <div className="bg-blue-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 pb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          className="flex-shrink-0"
        >
          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
        <h1 className="text-2xl font-semibold">Tính năng</h1>
        </div>
        <ul className="text-lg list-disc pl-6 space-y-2">
          {featureItems.map((item, idx) => (
          <li key={idx}>{item}</li>
          ))}
        </ul>
        </div>
           {/* Hồ sơ thủ tục*/}
        <div className="bg-blue-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 pb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
          className="flex-shrink-0"
        >
          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
        <h1 className="text-2xl font-semibold">Hồ sơ thủ tục</h1>
        </div>
        <ul className="text-lg list-disc pl-6 space-y-2">
          {documentItems.map((item, idx) => (
          <li key={idx}>{item}</li>
          ))}
        </ul>
        </div>
        </div>
      </div>
    </>
  );
}