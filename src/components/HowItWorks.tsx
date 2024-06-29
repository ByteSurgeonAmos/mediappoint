import React from "react";
import Image from "next/image";

const features = [
  {
    src: "/doc.svg",
    alt: "doc",
    title: "Find a doctor",
    description: "Discover skilled & verified doctors based on specification and location",
  },
  {
    src: "/plan.svg",
    alt: "plan",
    title: "Book appointment",
    description: "Effortlessly book appointments at your convenience",
  },
  {
    src: "/calendar.svg",
    alt: "calendar",
    title: "Manage your schedule",
    description: "Receive reminders and manage your appointments in one place",
  },
];

const HowItWorks = () => {
  return (
    <div className="pb-3 py-4">
      <div className="w-full flex justify-between items-center flex-col sm:flex-row">
        <div className="py-8 px-4 *:h-full flex flex-col sm:flex-row justify-around items-center w-full sm:h-[300px] space-y-2 sm:space-y-0 sm:space-x-4">
          {features.map((feature, index) => (
            <div key={index} className="shadow-lg rounded-xl flex flex-col justify-center items-center px-4 py-6 w-[90%] sm:w-[30%]">
              <div className="w-[182px] h-[120px] flex justify-center items-center">
                <Image src={feature.src} alt={feature.alt} width={100} height={150} />
              </div>
              <div className="font-bold text-[24px] text-[#242424]">{feature.title}</div>
              <div className="w-[308px] text-center text-[16px] text-[#484848]">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
