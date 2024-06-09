"use client";
import { baseURL } from "@/constants/baseURL";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

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

      await promise;
      setJoined(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="relative w-full h-[341px]" id="footer1">
      <motion.div
        className="absolute w-full h-full"
        initial={{ x: 0 }}
        animate={{ x: joined ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="bg-[#3454D1] w-full h-full flex flex-col justify-center items-center gap-4 p-[20px]">
          <div className="font-bold text-4xl text-center text-white bg-none flex justify-center items-center w-full h-[77px] mt-[2rem]">
            We are Launching Soon!
          </div>
          <div className="text-center text-sm text-wrap text-white">
            <p> Experience Our Revolutionary Healthcare Marketplace App </p>
            <p> All at no cost to you! </p>
          </div>
          <div className="h-[49px] border mt-[1rem] flex rounded-r-[16px] ">
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="sm:w-[239px] h-full indent-3 focus:outline-none"
            />
            <button
              className="sm:w-[148px] h-full text-white "
              onClick={handleSubmit}
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </motion.div>

      {joined && (
        <motion.div
          className="absolute w-full h-full"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="bg-[#3454D1] w-full h-full flex flex-col justify-center items-center gap-4 p-[20px]">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-white">
                Product Survey
              </h1>
              <div className="mb-6 text-white text-center text-wrap">
                Could you please take a few minutes to participate in our
                product survey?
                <p>
                  Your feedback will help us better understand your needs and
                  tailor our solutions to meet them.
                </p>
              </div>
              <a
                href="#"
                className="inline-block w-[224px]  p-[15px] rounded-[12px] border border-[#EAEAEA]  text-white bg-[#3454D1]  hover:bg-blue-500 justify-center items-center  transition duration-300"
              >
                Survey Link
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Footer;
