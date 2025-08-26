import { getProductBySlug } from "@/services/product";
import DetailProductHeader from "@/app/component/DetailProductHeader";
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

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
        <li>
          Có hộ khẩu thường trú trên địa bàn phường Trung Sơn: Là thành viên của
          QTD Trung Sơn, góp vốn cổ phần xác lập và thường niên theo quy định của
          Quỹ, đủ năng lực pháp luật, năng lực hành vi dân sự.
        </li>
        <li>
          Có tài sản thế chấp, có khả năng tài chính, có mục đích vay vốn hợp
          pháp, có phương án sử dụng vốn khả thi.
        </li>
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
        <li>
            Vay xây nhà, nâng cấp sửa chữa nhà ở, mua đồ dùng trang thiết bị gia
          đình, mua sắm phương tiện đi lại.
        </li>
        <li>
          Mức cho vay: Tối đa 70% Giá trị tài sản và theo tỷ lệ quy định của QTD
          Trung Sơn
        </li>
        <li>
          Thời hạn cho vay: Tối đa 3 năm
        </li>
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
        <li>
          Hồ sơ pháp lý: Căn cước công dân; Thông tin nơi cư trú; Đăng ký kết hôn/Giấy xác nhận tình trạng hôn nhân
        </li>
        <li>
          Hồ sơ tài sản đảm bảo: Giấy chứng nhận quyền sử dụng đất
        </li>
        <li>
          Hồ sơ chứng minh tài chính: Bảng lương, Sao kê lương
        </li>
        <li>
          Hồ sơ khác: Hóa đơn mua hàng, Hợp đồng mua xe, Các giấy phép khác theo quy định,...
        </li>
        </ul>
        </div>
        </div>
      </div>
    </>
  );
}