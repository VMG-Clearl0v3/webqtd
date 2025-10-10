import Image from "next/image";
import Header from "@/app/component/Header";

export default function AboutusHeader() {
  return (
    <div className="relative">
      {/* Kế thừa header gốc */}
      <Header />

      {/* Banner riêng cho trang tin tức */}
       <div className="w-full relative h-100">
        <Image
          src="/image/banner_aboutus.jpg"
          alt="Về chúng tôi"
          fill            
          className="object-cover object-center" 
          priority
        />
        </div>
    </div>
  );
}
