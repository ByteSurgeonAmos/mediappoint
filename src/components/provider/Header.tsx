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
            className="text-white text-xs sm:text-sm md:text-base font-semibold lg:font-bold"
            onClick={() => router.push("/")}
          >
            For Medical Appointments
          </button>
          <Button text="Join Now " handleScrollToView={handleJoinNowClick} />
        </div>
      </div>
      <div className="absolute top-16 w-full h-[12px] flex justify-center items-center">
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
      <div className="w-full max-md:w-screen">
        <div className="w-full h-max center flex flex-col justify-center items-center max-md:w-screen">
          <div className="w-full h-max text-white text-balance text-center font-bold pt-4 max-md:w-screen">
            <p className="text-2xl sm:text-4xl xl:text-6xl">Grow Your Pracitce with 
            <br/>
            Med-Appoint
            </p>
          </div>
          <div className="w-[713px] xl:text-lg font-400 text-center text-white max-md:w-screen pt-2">
            Join Our Network of Trusted Healthcare Providers
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
            <p className="text-2xl sm:text-4xl xl:text-6xl">
              Key Features
            </p>
          </div>
          <div className="w-[713px] xl:text-lg font-400 text-center text-white max-md:w-screen pt-2">
            Med Appoint makes it easier for patients to,
            <br/>Find and Book appointments with you. 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
