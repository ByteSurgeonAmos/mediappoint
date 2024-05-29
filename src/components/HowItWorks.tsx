import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div>
      <div className="w-full h-[400px] flex justify-center items-center max-md:flex-col max-md:h-max  max-md:w-screen">
        <div className="w-[1000px] h-[300px]  flex justify-between max-md:flex-col max-md:h-max max-md:w-max">
          <div className=" gap-4 h-full border flex flex-col justify-center items-center">
            <div className="w-[182px]   flex justify-center items-center  max-md:w-screen ">
              <Image src="/doc.svg" alt="doc" width={100} height={150} />
            </div>
            <div className=" font-bold">Find a doctor</div>
            <div className="w-[308px] h-[38px] text-center text-sm text-wrap">
              Discover skilled & verified doctors based on specification and
              location
            </div>
          </div>
          <div className=" gap-4 h-full border  flex flex-col justify-center items-center">
            <div className="w-[182px]   flex justify-center items-center ">
              <Image src="/plan.svg" alt="plan" width={100} height={150} />
            </div>
            <div className=" font-bold">Book appointment</div>

            <div className="w-[308px] h-[38px] text-center text-sm text-wrap">
              Effortlessly book appointments at your convinience
            </div>
          </div>
          <div className=" gap-4 h-full border  flex flex-col justify-center items-center">
            <div className="w-[182px]   flex justify-center items-center ">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={100}
                height={150}
              />
            </div>
            <div className=" font-bold">Manage your schedule</div>

            <div className="w-[308px] h-[38px] text-center text-sm text-wrap">
              Receive reminders and manage your appointments in one place
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
