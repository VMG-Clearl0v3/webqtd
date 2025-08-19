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
          src="/image/banner_2.jpg"
          alt="Tin tức"
          width={1200}
          height={192}
          className="object-cover w-full h-full"
        />
        </div>
        <div className="">
        	<h1 className="relative justify-center text-center text-3xl font-bold text-blue-800 p-4">
          		Tin tức - Sự kiện
        	</h1>
      	</div>
    </div>
  );
}