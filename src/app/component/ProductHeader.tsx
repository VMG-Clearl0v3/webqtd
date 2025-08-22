import Image from "next/image";
import Header from "@/app/component/Header";

export default function ProductHeader() {
  return (
    <div className="relative">
      {/* Kế thừa header gốc */}
      <Header />

      {/* Banner riêng cho trang sản phẩm */}
       <div className="w-full h-50 relative">
        <Image
          src="/image/banner_3.jpg"
          alt="Sản phẩm"
          width={1200}
          height={192}
          className="object-cover w-full h-full"
        />
        </div>
    </div>
  );
}