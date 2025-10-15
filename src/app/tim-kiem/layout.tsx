import Footer from "@/app/component/Footer";
import Header from "@/app/component/Header";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
    {/*<Header />*/}
      <main>{children}</main>
     {/*<Footer />*/}
    </div>
  );
}