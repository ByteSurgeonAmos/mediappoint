"use client";
import Image from "next/image";
import Button from "../Button";
import { useRouter, usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const handleJoinNowClick = () => {
    document.getElementById("footer2")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pb-[2rem] header-bg-opacity-provider bg-cover bg-center header h-max bg-black-opacity-10 space-y-3 flex flex-col max-md:w-screen">
      <div className="flex justify-between h-[50px]">
        <Image src="/4.png" alt="mediappointlogo" height={50} width={100} />
        <Button text="Join Now " handleScrollToView={handleJoinNowClick} />
      </div>
      <div className="w-full h-[12px] flex justify-center items-center">
        <TooltipProvider>
          <Tooltip>
            <div className="w-[25px] h-[10px] flex justify-between">
              <TooltipTrigger>
                <div
                  className={`w-[10px] h-[10px] rounded-full border ${
                    pathname === "/" ? "bg-white" : ""
                  } cursor-pointer`}
                  onClick={() => router.push("/")}
                >
                  <TooltipContent>
                    <p className="text-white">Explore as a patient.</p>
                  </TooltipContent>
                </div>
              </TooltipTrigger>

              <div
                className={`w-[10px] h-[10px] rounded-full border ${
                  pathname === "/provider" ? "bg-white" : ""
                } cursor-pointer`}
                onClick={() => router.push("/provider")}
              ></div>
            </div>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="w-full  max-md:w-screen">
        <div className="w-full  center flex flex-col justify-center items-center max-md:w-screen">
          <div className="w-full  max-md:text-2xl text-white text-balance text-center font-[700] pt-4 max-md:w-screen">
            <p className="sm:text-[64px]">Grow Your Practice with</p>
            <p className="sm:text-[64px]">Med Appoint</p>
          </div>
          <div className="w-full  sm:text-[24px] text-center text-white max-md:w-full">
            Join Our Network of Trusted Healthcare Providers
          </div>
        </div>
        <div className="">
          <div className="w-full  flex justify-center items-center p-2">
            <button
              onClick={handleJoinNowClick}
              className="w-[424px] h-[50px] max-md:w-[212px] font-semibold p-[15px] text-[16px] text-white flex justify-center items-center bg-[#098CE9] hover:bg-blue-500 rounded-[12px]"
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-max pt-[20px] flex flex-col items-center justify-center text-white max-md:w-screen">
        <div className="w-full h-max font-[700] sm:text-[64px] max-md:text-2xl text-center flex items-center justify-center max-md:w-screen">
          What we do for you
        </div>
        <div className="w-full text-[24px] h-max font-[400] sm:text-[16px] max-md:text-sm text-wrap text-center  p-1">
          Med Appoint makes it easier for patients to find, book and return to
          your practice
        </div>
      </div>
      <div className="w-full  h-max sm:text-[64px] text-center text-white font-[700]">
        Key Features
      </div>
    </div>
  );
}

export default Header;
