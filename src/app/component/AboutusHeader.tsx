import Image from "next/image";
import Header from "@/app/component/Header";

export default function AboutUsHeader() {
  return (
    <div className="relative">
      {/* Kế thừa header gốc */}
      <Header />

      {/* Banner riêng cho trang tin tức */}
       <div className="w-full h-50 relative">
        <Image
          src="/image/banner_aboutus.png"
          alt="Về chúng tôi"
          width={1200}
          height={192}
          className="object-cover w-full h-full"
        />
        </div>
    </div>
  );
}