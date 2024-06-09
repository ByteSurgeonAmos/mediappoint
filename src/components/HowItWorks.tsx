import React from "react";

import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="pb-3 bg-[#F0F5FB1A]">
      <div className="w-full sm:h-[400px]  flex justify-center items-center flex-col sm:flex-row">
        <div className="flex flex-col sm:flex-row justify-around items-center w-full sm:h-[300px] space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="shadow-lg rounded-[24px] flex flex-col justify-center items-center p-4 m-4 w-[90%] sm:w-[30%]">
            <div className="w-[182px] flex justify-center items-center">
              <Image src="/doc.svg" alt="doc" width={100} height={150} />
            </div>
            <div className="font-bold text-[24px]">Find a doctor</div>
            <div className="w-[308px] h-[38px] text-center text-[16px]">
              Discover skilled & verified doctors based on specification and
              location
            </div>
          </div>
          <div className="shadow-lg rounded-[24px] flex flex-col justify-center items-center p-4 m-4 w-[90%] sm:w-[30%]">
            <div className="w-[182px] flex justify-center items-center">
              <Image src="/plan.svg" alt="plan" width={100} height={150} />
            </div>
            <div className="font-bold text-[24px]">Book appointment</div>
            <div className="w-[308px] h-[38px] text-center text-[16px]">
              Effortlessly book appointments at your convenience
            </div>
          </div>
          <div className="shadow-lg rounded-[24px] flex flex-col justify-center items-center p-4 m-4 w-[90%] sm:w-[30%]">
            <div className="w-[182px] flex justify-center items-center">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={100}
                height={150}
              />
            </div>
            <div className="font-bold text-[24px]">Manage your schedule</div>
            <div className="w-[308px] h-[38px] text-center text-[16px]">
              Receive reminders and manage your appointments in one place
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
