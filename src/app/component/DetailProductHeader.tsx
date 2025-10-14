import Image from "next/image";
import Header from "@/app/component/Header";

interface DetailProductHeaderProps {
  title: string;
  image: string | null;
}

export default function DetailProductHeader({ title, image }: DetailProductHeaderProps) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Header gốc */}
      <Header />

      {/* Ảnh nền sáng hơn */}
      <div className="absolute inset-0">
        <Image
          src="/image/detailproductheader.jpg"
          alt="background"
          fill
          priority
          className="object-cover brightness-[1.0]" // 🌤 Tăng sáng lên
        />
        {/* Overlay nhẹ để tạo chiều sâu mà không làm tối */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      </div>

      {/* Nội dung */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-20 gap-8 md:gap-12 mt-10">
        
        {/* Phần chữ */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-5xl font-bold text-[#00377B] leading-tight drop-shadow-sm">
            {title}
          </h1>
          <div className="mt-5 h-1 w-20 bg-[#ff0000] mx-auto md:mx-0 rounded-full"></div>
        </div>

        {/* Hình minh họa */}
        <div className="relative flex-1 max-w-sm w-full aspect-[4/3] md:h-[260px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white/30 backdrop-blur-sm">
          <Image
            src={image || "/image/noimage.jpg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}