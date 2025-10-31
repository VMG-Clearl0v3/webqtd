import Footer from "@/app/component/Footer";
import MoneyTranferHeader from "@/app/component/MoneyTranferHeader";
import "@/app/globals.css";

export default function MoneyTranferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      <MoneyTranferHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}