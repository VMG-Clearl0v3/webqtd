import Footer from "@/app/component/Footer";
import ProductHeader from "@/app/component/ProductHeader";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Nội dung tin tức */}
      <main>{children}</main>
      {/* Footer */}
      <Footer/>
   </div>
  );
}