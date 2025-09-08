import Image from "next/image";
import Header from "@/app/component/Header";

export default function NewsHeader() {
  return (
    <div className="relative">
      {/* Kế thừa header gốc */}
      <Header />

      {/* Banner riêng cho trang tin tức */}
       <div className="w-full h-50 relative">
        <Image
          src="/image/bgnews.jpg"
          alt="Tin tức"
          width={1200}
          height={192}
          className="object-cover w-full h-full"
        />
        </div>
    </div>
  );
}