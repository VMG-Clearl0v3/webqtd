import Image from "next/image";
import Header from "@/app/component/Header";
interface DetailProductHeaderProps {
  title: string;
  image: string | null;
}

export default function DetailProductHeader({title, image}: DetailProductHeaderProps) {
  return (
    <div className="relative w-full">
      {/* Kế thừa header gốc */}
    <Header/>
     <div className="absolute inset-0">
    <Image
      src="/image/detailproductheader.jpg"
      alt="background"
      fill
      className="object-cover opacity-60"
    />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-10 mt-20">
    <div className="w-full md:w-[350px] aspect-[4/3] md:h-[250px] relative rounded-lg overflow-hidden shadow-lg order-1 md:order-2 mb-4 md:mb-0">
      <Image
        src={image || "/image/noimage.jpg"}
        alt={title}
        fill
        className="object-cover"
      />
    </div>

    {/* Chữ */}
    <h1
      className="
       text-3xl font-bold text-[#00377B] drop-shadow-lg max-w-lg
        text-center md:text-left order-2 md:order-1
      "
    >
      {title}
    </h1>
  </div>
</div>
  );
}