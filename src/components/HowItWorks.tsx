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
      <div className="w-full flex justify-between items-center flex-col lg:flex-row">
        <div className="py-8 px-4 lg:px-8 *:h-full flex flex-col gap-5 lg:flex-row justify-between items-center w-full">
          {features.map((feature, index) => (
            <div key={index} className="shadow-lg rounded-xl flex flex-col justify-center lg:justify-between items-center text-center px-8 w-full sm:w-3/4 md:w-1/2 pt-8 pb-8 lg:pb-12">
              <div className="w-[182px] h-[120px] flex justify-center items-center">
                <Image src={feature.src} alt={feature.alt} width={100} height={150} />
              </div>
              <div className="font-bold text-xl text-[#242424] w-full">{feature.title}</div>
              <div className="text-center text-xs lg:text-base text-[#484848] lg:pt-2 h-10 sm:w-1/2 lg:w-full">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
