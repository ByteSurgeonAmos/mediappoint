import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="pb-3">
      <div className="w-full sm:h-[400px] flex justify-center items-center max-md:flex-col max-md:h-max  max-md:w-screen">
        <div className="w-[1000px] sm:h-[300px]  md-max:space-y-4 flex justify-between max-md:flex-col max-md:h-max max-md:w-max">
          <div className=" sm:shadow-lg gap-4 h-full max-md:h-max   flex flex-col justify-center items-center">
            <div className="w-[182px]   flex justify-center items-center  max-md:w-screen ">
              <Image src="/doc.svg" alt="doc" width={100} height={150} />
            </div>
            <div className=" font-bold text-[24px]">Find a doctor</div>
            <div className="w-[308px] h-[38px] text-center text-[16px]  text-wrap">
              Discover skilled & verified doctors based on specification and
              location
            </div>
          </div>
          <div className=" gap-4 h-full sm:shadow-lg  flex flex-col justify-center items-center">
            <div className="w-[182px]   flex justify-center items-center ">
              <Image src="/plan.svg" alt="plan" width={100} height={150} />
            </div>
            <div className=" font-bold text-[24px]">Book appointment</div>

            <div className="w-[308px] h-[38px] text-center text-[16px] text-wrap">
              Effortlessly book appointments at your convinience
            </div>
          </div>
          <div className=" gap-4 h-full sm:shadow-lg  flex flex-col justify-center items-center">
            <div className="w-[182px]   flex justify-center items-center ">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={100}
                height={150}
              />
            </div>
            <div className=" font-bold text-[24px]">Manage your schedule</div>

            <div className="w-[308px] text-[16px] h-[38px] text-center  text-wrap">
              Receive reminders and manage your appointments in one place
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
