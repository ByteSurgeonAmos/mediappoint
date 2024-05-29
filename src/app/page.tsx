import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className=" p-2 gap-2 flex flex-col ">
      <Header />
      <HowItWorks />
      <Footer />
    </div>
  );
}
