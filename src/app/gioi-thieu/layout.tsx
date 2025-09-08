import Footer from "@/app/component/Footer";
import NewsHeader from "@/app/component/NewsHeader";

export default function AboutCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      <NewsHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}