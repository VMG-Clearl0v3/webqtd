import { getProductBySlug } from "@/services/product";
import DetailProductHeader from "@/app/component/DetailProductHeader";

export default async function LoanProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <p className="text-center text-gray-500">Không tìm thấy sản phẩm cho vay.</p>;
  }

  return (
    <>
      <DetailProductHeader title={product.title} image={product.image} />
        <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#00377B]">Chi tiết sản phẩm</h1>
        <div className="text-[#00377B]">
          <h1 className="text-2xl font-semibold py-2"> Điều kiện vay vốn </h1>
          <ul className="text-lg list-disc ml-4">
            <li>Tham gia thành viên của Quỹ</li>
          </ul>
        </div>
      </div>
    </>
  );
}