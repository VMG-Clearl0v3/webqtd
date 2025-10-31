import Footer from "@/app/component/Footer";
import ContactHeader from "@/app/component/ContactHeader";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      <ContactHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}