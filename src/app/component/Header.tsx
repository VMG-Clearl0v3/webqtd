

// import Image from "next/image";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header>
//     </header>
//   );
// }
"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeaderBanner() {
  const banners = [
    {
      id: 1,
      src: "/image/banner_1.jpg",
      title: "",
    },
    {
      id: 2,
      src: "/image/banner_2.jpg",
      title: "",
    },
    {
      id: 3,
      src: "/image/banner_3.jpg",
      title: "",
    },
  ];

  return (
    <header className="flex flex-col w-full z-10">
      {/* Desktop menu */}
       <div className={"${inter.className} absolute z-30 top-0 left-0 w-full flex flex-col p-8 text-2xl text-white pointer-events-none"}>
        <nav className="hidden ml-10 md:flex gap-6 pointer-events-auto">
          <Link href="#" className="mt-[-20px]"><Image src ="/image/logo.png" alt ="icon" width={80} height={80}/></Link>
          <Link href="#">Trang chủ</Link>
          <Link href="#">Giới thiệu</Link>
          <Link href="#">Sản phẩm</Link>
          <Link href="#">Tin tức</Link>
        </nav>
        <div className="p-4  ml-10 mt-5 font-bold text-4xl leading-normal pointer-events-auto"> GIẢI PHÁP <br/> TÀI CHÍNH <br/> THÔNG MINH <br/> CHO BẠN</div>
        <div><button className="px-4 py-2 ml-14 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors pointer-events-auto">Tìm hiểu ngay</button>
        </div>
      </div>
      <div className="relative w-full h-[550px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full relative"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[550px]">
              {/* Ảnh nền */}
              <Image
                src={banner.src}
                alt={banner.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={banner.id === 1}
                loading={banner.id === 1 ? "eager" : "lazy"}
              />             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </header>
  );
}