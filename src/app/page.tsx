import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="page p-2 gap-2 flex flex-col overflow-x-hidden">
      <Header />
      <HowItWorks />
      <Footer />
    </div>
  );
}
