import Footer from "@/app/component/Footer";
import AboutusHeader from "@/app/component/AboutusHeader";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      <AboutusHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}