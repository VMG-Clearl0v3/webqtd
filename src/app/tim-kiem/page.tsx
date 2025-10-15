import { Suspense } from "react";
import SearchClient from "@/app/component/SearchClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Đang tải trang tìm kiếm...</div>}>
      <SearchClient />
    </Suspense>
  );
}