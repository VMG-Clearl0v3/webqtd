
// import Link from 'next/link';
// import Image from "next/image";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header>
//       <div className={"${inter.className} flex flex-col bg-[#01274B] h-145 p-8 text-xl"}>
//         {/* Desktop menu */}
//         <nav className="hidden ml-10 md:flex gap-6">
//           <Link href="#" className="mt-[-20px]"><Image src ="/image/logo.png" alt ="icon" width={80} height={80}/></Link>
//           <Link href="#">Trang chủ</Link>
//           <Link href="#">Giới thiệu</Link>
//           <Link href="#">Sản phẩm</Link>
//           <Link href="#">Tin tức</Link>
//         </nav>
//         <div className="space-x-8 p-4  ml-10 mt-5 w-60 font-bold text-3xl leading-normal"> GIẢI PHÁP <br/> TÀI CHÍNH <br/> THÔNG MINH <br/> CHO BẠN</div>
//         <div><button className="px-4 py-2 ml-14 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors">Tìm hiểu ngay</button>
//   		</div>
//     </div>
//     </header>
//   );
// }
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeaderBanner() {
  const banners = [
    {
      id: 1,
      src: "/image/2_9.png",
      title: "Chào mừng đến với Quỹ Tín Dụng Trung Sơn",
      desc: "Đồng hành phát triển cùng bạn",
      btnText: "Tìm hiểu thêm",
    },
    {
      id: 2,
      src: "/image/news_1.jpg",
      title: "Dịch vụ tài chính an toàn",
      desc: "Nhanh chóng - Bảo mật - Uy tín",
      btnText: "Xem dịch vụ",
    },
    {
      id: 3,
      src: "/image/news_2.jpg",
      title: "Luôn vì lợi ích thành viên",
      desc: "Phát triển bền vững cùng cộng đồng",
      btnText: "Liên hệ ngay",
    },
  ];

  return (
    <header className="w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[500px]">
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

              {/* Lớp phủ tối */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />

              {/* Nội dung chữ với animation */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <motion.h1
                  className="text-3xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {banner.title}
                </motion.h1>

                <motion.p
                  className="text-lg md:text-2xl mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {banner.desc}
                </motion.p>

                <motion.a
                  href="#"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {banner.btnText}
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}