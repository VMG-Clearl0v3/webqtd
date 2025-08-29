import "@/app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Metadata } from "next";
import ScrollToTop from "@/app/component/ScrollToTop";

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
