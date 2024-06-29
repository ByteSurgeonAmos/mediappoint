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
    <div className="pb-[2rem] header-bg-opacity text-xs bg-cover bg-center header bg-black-opacity-10 flex flex-col gap-8 max-md:w-screen">
      <div className="flex items-center justify-between h-fit mx-1 md:mx-2 lg:mx-4">
        <div className="h-full mt-4 ml-1 md:2 lg:ml-4">
          <Image
            src="/MedAppointBlue.png"
            alt="mediappointlogo"
            width={100}
            height={100}
            className=""
          />
        </div>
        <div className="w-3/5 sm:w-[40%] xl:w-[35%] flex items-center justify-between h-full">
          <button
            className=" text-white text-xs font-bold"
            onClick={() => router.push("/provider")}
          >
            For Health Practitioners
          </button>
            <Button text="Join Now " handleScrollToView={handleJoinNowClick} />
        </div>
      </div>
      <div className="absolute top-20 w-full h-[12px] flex justify-center items-center">
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
      <div className="w-full max-md:w-screen">
        <div className="w-full h-max center flex flex-col justify-center items-center max-md:w-screen">
          <div className="w-full h-max max-md:text-2xl leading-tight text-white text-balance text-center font-bold pt-4 max-md:w-screen">
            <p className="sm:text-6xl">Schedule your next Appointment 
              <br/>
              Hassle free
            </p>
          </div>
          <div className="w-[713px]  sm:text-lg font-400 text-center text-white max-md:w-screen">
            Find and Book your favorite Healthcare Professional near you
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full  flex justify-center items-center p-2">
          <button
            onClick={handleJoinNowClick}
            className="w-[315px] h-[50px] max-md:w-[212px] font-semibold p-[15px] text-[16px] text-white flex justify-center items-center bg-[#098CE9] hover:bg-[#0A74C8] rounded-xl"
          >
            Join the waitlist
          </button>
        </div>
      </div>
      <div className="*:w-full h-[136px] pt-[20px] flex flex-col items-center justify-center text-white max-md:w-screen">
        <div className="sm:h-[77px] font-bold sm:text-6xl max-md:text-2xl text-center flex items-center justify-center max-md:w-screen">
          Easy as 1-2-3
        </div>
        <div className="sm:w-1/2 bottom-header max-md:w-full sm:h-[38px] sm:text-lg max-md:text-xs text-center pt-2">
          Discover, book and experience personalized healthcare effortlessly
          with our 
          <br/>User-friendly Doctor Appointment Website
        </div>
      </div>
    </div>
  );
}

export default Header;
