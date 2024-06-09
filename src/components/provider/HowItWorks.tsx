import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="pb-3">
      <div className="w-full sm:h-[400px] flex justify-center items-center flex-col sm:flex-row">
        <div className="w-full flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="sm:shadow-lg shadow-md rounded-[24px] gap-4 h-full sm:h-[300px] flex flex-col justify-center items-center p-4">
            <div className="w-[182px] flex justify-center items-center">
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
            <div className="w-[308px] text-center text-[16px]">
              Reach more patients by showcasing your services
            </div>
          </div>
          <div className="sm:shadow-lg shadow-md rounded-[24px] gap-4 h-full sm:h-[300px] flex flex-col justify-center items-center p-4">
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
            <div className="w-[308px] text-center text-[16px]">
              Improve patient satisfaction with easy scheduling options,
              communications, and timely reminders.
            </div>
          </div>
          <div className="sm:shadow-lg shadow-md rounded-[24px] gap-4 h-full sm:h-[300px] flex flex-col justify-center items-center p-4">
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
            <div className="w-[308px] text-center text-[16px]">
              Manage your appointments seamlessly with our intuitive platform
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
