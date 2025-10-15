import { Suspense } from "react";
import SearchClient from "@/app/component/SearchClient";
import Breadcrumb from "@/app/component/Breadcrumb";

export default function SearchPage() {
  return (
    <>
     <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Tìm kiếm", href: "/tim-kiem" },
        ]}
      />
    <Suspense fallback={<div className="p-10 text-center">Đang tải trang tìm kiếm...</div>}>
      <SearchClient />
    </Suspense>
    </>
  );
}