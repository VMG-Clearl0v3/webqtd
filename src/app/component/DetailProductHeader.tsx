import Image from "next/image";
import Header from "@/app/component/Header";
import { getImageUrl } from "@/services/product";

interface DetailProductHeaderProps {
  title: string;
  image?: string | null;
}

export default function DetailProductHeader({title, image}: DetailProductHeaderProps) {
  const imageUrl = image ? getImageUrl([{ url: image }]) : "/image/noimage.jpg";
  return (
    <div className="relative w-full h-[450px]">
      {/* Kế thừa header gốc */}
    <Header/>
     <div className="absolute inset-0">
        <Image
          src="/image/banner_1.jpg" 
          alt="background"
          fill
          className="object-cover opacity-40" // nền mờ
        />
      </div>
    <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-between px-6 mt-20">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg max-w-lg">
          {title}
        </h1>
        {imageUrl && (
          <div className="w-[350px] h-[250px] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
     </div>
  );
}