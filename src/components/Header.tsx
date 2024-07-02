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
    <div className="pb-[2rem] header-bg-opacity text-xs bg-cover bg-center pt-2 bg-black-opacity-10 flex flex-col gap-6 max-md:w-screen">
      <div className="flex items-center justify-between h-fit mx-1 md:mx-2 lg:mx-4">
        <div className="h-full mt-3 ml-1 md:ml-2 lg:ml-4">
          <Image
            src="/MedAppointBlue.png"
            alt="mediappointlogo"
            width={100}
            height={100}
            className=""
          />
        </div>
        <div className="w-4/5 flex items-center justify-end gap-4 md:gap-8 lg:gap-16 h-full">
          <button
            className=" text-white text-xs sm:text-sm md:text-base font-semibold lg:font-bold"
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
          <div className="w-full h-max text-white text-balance text-center font-bold pt-4 max-md:w-screen">
            <p className="text-xl sm:text-2xl md:text-4xl xl:text-6xl">Schedule your next Appointment 
              <br/>
              Hassle free
            </p>
          </div>
          <div className="w-[713px] xl:text-lg font-400 text-center text-white max-md:w-screen pt-2">
            Find and Book your favorite Healthcare Professional near you
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full  flex justify-center items-center p-2">
          <button
            onClick={handleJoinNowClick}
            className="bg-[#098CE9] hover:bg-[#0A74C8] px-8 text-xs sm:px-16 lg:px-20 sm:text-sm md:text-base font-semibold lg:font-bold  h-8 sm:h-10 md:h-12 rounded-[8px] lg:rounded-xl text-white"
          >
            Join the waitlist
          </button>
        </div>
      </div>
      <div className="w-full max-md:w-screen">
        <div className="w-full h-max center flex flex-col justify-center items-center max-md:w-screen">
          <div className="w-full h-max text-white text-balance text-center font-bold pt-4 max-md:w-screen">
            <p className="text-xl sm:text-2xl md:text-4xl xl:text-6xl">
              Easy as 1-2-3
            </p>
          </div>
          <div className="w-[713px] xl:text-lg font-400 text-center text-white max-md:w-screen pt-2">
            Discover, book and experience personalized healthcare effortlessly
            with our 
            <br/>User-friendly Doctor Appointment Website
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
