// components/provider/Header.tsx
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
    <div className="header-bg-opacity text-xs bg-cover bg-center pt-2 bg-black-opacity-10 flex flex-col gap-6 max-md:w-screen">
      <div className="flex items-center justify-between h-fit mx-4">
        <div className="h-full mt-4 ml-4">
          <Image
            src="/MedAppointBlue.png"
            alt="mediappointlogo"
            width={100}
            height={100}
            className=""
          />
        </div>
        <div className="w-[35%] flex justify-between h-full">
          <button
            className="text-white font-bold rounded-[12px]"
            onClick={() => router.push("/")}
          >
            For Medical Appointments
          </button>
          <Button text="Join Now " handleScrollToView={handleJoinNowClick} />
        </div>
      </div>
      <div className="absolute top-20 w-full h-[12px] flex justify-center items-center">
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
      <div className="w-full h-max center flex flex-col justify-center gap-3 items-center max-md:w-screen">
        <div className="w-full h-max max-md:text-2xl leading-tight text-white text-balance text-center font-bold pt-4 max-md:w-screen">
          <p className="sm:text-6xl">Grow Your Pracitce with 
            <br/>
            Med-Appoint
          </p>
        </div>
        <div className="w-[713px]  sm:text-lg font-400 text-center text-white max-md:w-screen">
          Join Our Network of Trusted Healthcare Providers
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
          Key Features
        </div>
        <div className="sm:w-1/2 bottom-header max-md:w-full sm:h-[38px] sm:text-lg max-md:text-xs text-center pt-2">
          Med Appoint makes it easier for patients to,
          <br/>Find and Book appointments with you. 
        </div>
      </div>
    </div>
  );
}

export default Header;
