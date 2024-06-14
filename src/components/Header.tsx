"use client";
import Image from "next/image";
import Button from "./Button";

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
    document.getElementById("footer1")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="pb-[2rem] header-bg-opacity bg-cover bg-center header bg-black-opacity-10 space-y-3 flex flex-col max-md:w-screen">
      <div className="flex justify-between h-[50px]">
        <Image src="/4.png" alt="mediappointlogo" height={150} width={150} />
        <Button text="Join Now " handleScrollToView={handleJoinNowClick} />
      </div>
      <div className="w-full h-[12px] flex justify-center items-center">
        <div className="w-[25px] h-[10px] flex justify-between">
          <div
            className={`w-[10px] h-[10px] rounded-full ${
              pathname === "/" ? "bg-white" : ""
            } cursor-pointer border`}
            onClick={() => router.push("/")}
          ></div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={`w-[10px] h-[10px] rounded-full ${
                    pathname === "/provider" ? "bg-white" : ""
                  } cursor-pointer border`}
                  onClick={() => router.push("/provider")}
                >
                  <TooltipContent>
                    <p className="text-white">Explore as a provider.</p>
                  </TooltipContent>
                </div>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="w-full  max-md:w-screen">
        <div className="w-full h-max center flex flex-col justify-center items-center max-md:w-screen">
          <div className="w-full h-max max-md:text-2xl text-white text-balance text-center font-[700] pt-4 max-md:w-screen">
            <p className="sm:text-[64px]">Schedule your next Appointment</p>
            <p className="sm:text-[64px]">Hassle free</p>
          </div>
          <div className="w-[713px]  sm:text-[24px] font-600 text-center text-white max-md:w-screen">
            Find and Book your favorite Healthcare Professional near you
          </div>
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
      <div className="w-full h-[136px] pt-[20px] flex flex-col items-center justify-center text-white max-md:w-screen">
        <div className="w-[425px] sm:h-[77px] font-semibold sm:text-[64px] max-md:text-2xl text-center flex items-center justify-center max-md:w-screen">
          Easy as 1-2-3
        </div>
        <div className="sm:w-[508px] bottom-header sm:h-[38px] font-[400] sm:text-[16px] max-md:text-sm text-wrap text-center max-md:w-[90%] p-1">
          Discover, book and experience personalized healthcare effortlessly
          with our user-friendly Doctor Appointment Website
        </div>
      </div>
    </div>
  );
}

export default Header;
