import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="pb-3">
      <div className="w-full sm:h-[400px] flex justify-center items-center max-md:flex-col max-md:h-screen max-md:w-screen">
        <div className="w-full sm:w-[1000px] sm:h-[300px] flex flex-col sm:flex-row justify-between max-md:space-y-4 sm:space-y-0 max-md:h-full max-md:w-screen">
          <div className="sm:shadow-lg gap-4 h-full max-md:h-max flex flex-col justify-center items-center">
            <div className="w-[182px] flex justify-center items-center max-md:w-full">
              <Image
                src="/visibility.svg"
                alt="visibility"
                width={100}
                height={150}
              />
            </div>
            <div className="font-bold text-[24px] text-center">
              Increased Visibility
            </div>
            <div className="w-[308px] h-[38px] text-center text-[16px] text-wrap">
              Reach more patients by showcasing your services
            </div>
          </div>
          <div className="gap-4 h-full sm:shadow-lg flex flex-col justify-center items-center">
            <div className="w-[182px] flex justify-center items-center">
              <Image
                src="/patients.svg"
                alt="patients"
                width={100}
                height={150}
              />
            </div>
            <div className="font-bold text-[24px] text-center">
              Enhanced Patient Engagement
            </div>
            <div className="w-[308px] h-[38px] text-center text-[16px] text-wrap">
              Improve patient satisfaction with easy scheduling options,
              communications, and timely reminders.
            </div>
          </div>
          <div className="gap-4 pt-2 h-full sm:shadow-lg flex flex-col justify-center items-center">
            <div className="w-[182px] flex justify-center items-center">
              <Image
                src="/efficiency.svg"
                alt="efficiency"
                width={100}
                height={150}
              />
            </div>
            <div className="font-bold text-[24px] text-center">
              Efficient Scheduling
            </div>
            <div className="w-[308px] h-[38px] text-center text-[16px] text-wrap">
              Manage your appointments seamlessly with our intuitive platform
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
