import Image from "next/image";
import Header from "@/app/component/Header";

export default function NewsHeader() {
  return (
    <div className="relative">
      {/* Kế thừa header gốc */}
      <Header />

      {/* Banner riêng cho trang tin tức */}
    <div className="w-full relative h-100">
        <Image
          src="/image/newsbanner.svg"
          alt="Tin tức"
          fill            
          className="object-cover object-center" 
          priority
        />
    </div>
    </div>
  );
}