import Footer from "@/components/provider/Footer";
import Header from "@/components/provider/Header";
import HowItWorks from "@/components/provider/HowItWorks";

function page() {
  return (
    <div className="page p-2 pt-1 gap-2 flex flex-col overflow-x-hidden h-screen">
      <Header />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default page;
