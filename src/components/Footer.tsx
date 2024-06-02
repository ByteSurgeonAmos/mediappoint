"use client";
import { baseURL } from "@/constants/baseURL";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const promise = axios.post(baseURL, {
        email: email,
        role: "patient",
      });

      toast.promise(promise, {
        loading: "Joining waitlist...",
        success: "Joined successfully!",
        error: (error: any) => {
          if (error.response.data.message) {
            return error.response.data.message;
          }
          return "Error joining the list";
        },
      });

      const response = await promise;

      console.log(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
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
        <div className="w-[387px] h-[49px] border mt-[1rem] flex rounded-r-[16px]">
          <input
            type="email"
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-[239px] h-full indent-3 focus:outline-none"
          />
          <button
            className="w-[148px] h-full text-white "
            onClick={handleSubmit}
          >
            Join the waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
