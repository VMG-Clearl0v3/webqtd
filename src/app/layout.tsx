import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
