import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="pb-3">
      <div className="w-full sm:h-[400px] flex justify-center items-center max-md:flex-col max-md:h-max  max-md:w-screen">
        <div className="w-[1000px] sm:h-[300px]  md-max:space-y-4 flex justify-between max-md:flex-col max-md:h-max max-md:w-max">
          <div className=" sm:shadow-lg gap-4 h-full max-md:h-max   flex flex-col justify-center items-center">
            <div className="w-[182px]   flex justify-center items-center  max-md:w-screen ">
              <Image
                src="/visibility.svg"
                alt="visibility"
                width={100}
                height={150}
              />
            </div>
            <div className=" font-bold text-[24px]">Increased Visibilty</div>
            <div className="w-[308px] h-[38px] text-center text-[16px]  text-wrap">
              Reach more patients by showcasing your services
            </div>
          </div>
          <div className=" gap-4 h-full sm:shadow-lg  flex flex-col justify-center items-center">
            <div className="w-[182px]   flex justify-center items-center ">
              <Image
                src="/patients.svg"
                alt="patients"
                width={100}
                height={150}
              />
            </div>
            <div className=" font-bold text-[24px]">
              Enhanced Patient Engagement
            </div>

            <div className="w-[308px] h-[38px] text-center text-[16px] text-wrap">
              Improve patient satisfaction with easy scheduling option,
              communications, and timely reminders.{" "}
            </div>
          </div>
          <div className=" gap-4 h-full sm:shadow-lg  flex flex-col justify-center items-center">
            <div className="w-[182px]   flex justify-center items-center ">
              <Image
                src="/efficiency.svg"
                alt="efficiency"
                width={100}
                height={150}
              />
            </div>
            <div className=" font-bold text-[24px]">Efficient Scheduling</div>

            <div className="w-[308px] text-[16px] h-[38px] text-center  text-wrap">
              Manage your appointments seamlessly with our intuitive platform
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
