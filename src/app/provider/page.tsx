import Footer from "@/components/provider/Footer";
import Header from "@/components/provider/Header";
import HowItWorks from "@/components/provider/HowItWorks";

function page() {
  return (
    <div className="page overflow-x-hidden">
      <Header />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default page;
