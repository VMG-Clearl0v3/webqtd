import Image from "next/image";
import Header from "@/app/component/Header";

export default function NewsHeader() {
  return (
    <div className="relative">
      {/* Kế thừa header gốc */}
      <Header />

      {/* Banner riêng cho trang tin tức */}
    <div className="w-full relative h-50 md:h-80">
        <Image
          src="/image/bgnews.jpg"
          alt="Tin tức"
          fill            
          className="object-cover object-center" 
          priority
        />
    </div>
    </div>
  );
}