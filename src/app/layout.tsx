import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FloatingSupport from "@/app/component/FloatingSupport";
import CrispChat from "@/app/component/CrispChat";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'], // Chọn độ đậm
  });
  export const metadata: Metadata = {
  title: "Quỹ TDND Trung Sơn",
  description: "Website chính thức của quỹ tín dụng nhân dân Trung Sơn-Ninh Bình",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    //     {children}
    //   </body>
    // </html>
    <html lang="vi">
      <link rel="icon" href="/image/logo.png" sizes="32x32" />
      <body className="bg-white text-gray-900">{children}
      <CrispChat />
      <FloatingSupport
        hotline="02293.864.329"
        crispWebsiteId="http://localhost:3000/"  // bỏ nếu chưa dùng Crisp
        zaloUrl="https://zalo.me/0912345678"   // tuỳ chọn
        whatsapp="+84912345678"                // tuỳ chọn
        position="right"                       // hoặc "left"
      />
      </body>
    </html>
  );
}
