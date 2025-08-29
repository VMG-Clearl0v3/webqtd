import "@/app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import ScrollToTop from "@/app/component/ScrollToTop";
// import FloatingSupport from "@/app/component/FloatingSupport";
// import CrispChat from "@/app/component/CrispChat";

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
    <html lang="vi">
      <link rel="icon" href="/image/icon.png" sizes="100x100" />
      <body className="bg-white text-gray-900">{children}
         <ScrollToTop />
      </body>
    </html>
  );
}
