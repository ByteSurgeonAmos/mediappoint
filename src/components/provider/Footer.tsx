import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#3454D1] w-full h-[341px] flex flex-col justify-center items-center gap-4 p-[20px] max-md:w-screen">
        <div className="font-bold text-4xl text-center text-white bg-none flex justify-center items-center w-full h-[77px]  mt-[2rem]">
          We are Launching Soon!
        </div>
        <div className="text-center text-sm text-wrap text-white">
          <p> Experience Our Revolutionary Healthcare Marketplace App </p>
          <p> All at no cost to you! </p>
        </div>
        <div className="w-[387px] h-[49px] border mt-[1rem] flex">
          <input
            type="email"
            name=""
            id=""
            placeholder="Your email address"
            className="w-[239px] h-full indent-3 focus:outline-none"
          />
          <button className="w-[148px] h-full text-white">
            Join the waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
