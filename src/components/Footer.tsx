"use client";
import { baseURL } from "@/constants/baseURL";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setDisabled(true);

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
      setDisabled(false);
      setJoined(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setDisabled(false);
    }
  };

  return (
    <div className="relative w-full" id="footer1">
      <motion.div
        className="absolute w-full h-full"
        initial={{ x: 0 }}
        animate={{ x: joined ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="bg-[#098CE9] w-full py-3 pb-6 flex flex-col justify-center items-center gap-3">
          <div className="font-bold text-2xl md:text-4xl xl:text-6xl text-center text-white flex justify-center items-center w-full mt-[1rem]">
            We are Launching Soon!
          </div>
          <div className="text-center text-xs md:text-sm text-white">
            <p> Experience Our Revolutionary Healthcare Platform </p>
            <p> All at no cost to you! </p>
          </div>
          <div className="h-[32px] md:h-[48px] border mt-[1rem] flex rounded-l-[8px] md:rounded-l-xl rounded-r-[8px] md:rounded-r-xl ">
            <input
              type="email"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-[130px] sm:w-[239px] h-full rounded-l-[8px] md:rounded-l-xl text-xs md:text-base text-[#484848] indent-3 focus:outline-none"
            />
            <button
              className="px-3 md:px-5 h-full text-white text-xs md:text-base md:font-medium rounded-r-[8px] md:rounded-r-xl hover:bg-[#0A74C8]"
              disabled={disabled}
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
          <div className="bg-[#098CE9] w-full py-3 pb-6 flex flex-col justify-center items-center gap-3">
            <div className="font-bold text-6xl text-center text-white flex justify-center items-center w-full mt-[1rem]">
              Product Survey!
            </div>
            <div className="text-center text-sm text-white">
              <p className="font-bold text-xl">We Value Your Feedback! </p>
              <p>Please take a few minutes to complete our product survey.</p>
              <p>Your insights will help us tailor our solutions </p>
              <p>To better meet your needs.</p>
            </div>
            <div className="mt-[1rem]">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5nLevZaNQ0WpFrMVsSPwChbT_GguRyIeJSkhJlz-Kg6MloA/viewform">
                <button className="bg-[#098CE9] hover:bg-[#0A74C8] border p-6 px-14 font-bold h-11 rounded-xl text-white flex items-center justify-center">
                  Survey Link
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Footer;
