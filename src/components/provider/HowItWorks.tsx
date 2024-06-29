import React from "react";
import Image from "next/image";

const features = [
  {
    src: "/visibility.svg",
    alt: "visibility",
    title: "Increased Visibility",
    description: "Reach more patients by showcasing your services",
  },
  {
    src: "/patients.svg",
    alt: "patients",
    title: "Enhanced Patient Engagement",
    description: "Improve patient satisfaction with easy scheduling options, communications, and timely reminders.",
  },
  {
    src: "/efficiency.svg",
    alt: "efficiency",
    title: "Efficient Scheduling",
    description: "Manage your appointments seamlessly with our intuitive platform",
  },
];

const HowItWorks = () => {
  return (
    <div className="pb-3 pt-2 bg-[#F0F5FB1A]">
      <div className="w-full flex justify-center items-center flex-col sm:flex-row">
        <div className="w-full flex flex-col sm:flex-row justify-around items-center sm:space-x-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="shadow-lg rounded-[24px] flex flex-col justify-center items-center p-4 m-4 mt-0  w-[90%] sm:w-[30%] h-[300px]"
            >
              <div className="w-[182px] flex justify-center items-center h-[150px]">
                <Image src={feature.src} alt={feature.alt} width={100} height={150} />
              </div>
              <div className="font-bold text-[24px] text-center">{feature.title}</div>
              <div className="w-[308px] text-center text-[16px]">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;