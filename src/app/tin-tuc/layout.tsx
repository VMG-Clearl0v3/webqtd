import Footer from "@/app/component/Footer";
import NewsHeader from "@/app/component/NewsHeader";

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header riêng cho tin tức */}
      <NewsHeader/>

      {/* Nội dung tin tức */}
      <main>{children}</main>

      {/* Footer */}
      <Footer/>
   </div>
  );
}