"use client";

import React from "react";
import { socialMediaLinks } from "../../utils/constants";

import Link from "next/link";

export default function Footer() {

  return (
    <footer className="footer bg-[#EDF2F7]">
      {/* heading */}
      <div className="h-[100px] w-full  flex justify-center items-center text-black text-center">
        <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold ">
          Join our Channel On Telegram and Whatsapp For Latest Updates:
        </h1>
      </div>
      {/* social media links */}
      <div className="flex flex-row items-center justify-center">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <link.icon
              size={30}
              color="white"
              className={`mx-2 ${
                link.name === "Telegram"
                  ? "bg-blue-500"
                  : link.name === "Instagram"
                  ? "bg-red-500"
                  : link.name === "Whatsapp"
                  ? "bg-green-500"
                  : ""
              } lg:w-[45px] lg:h-[45px] lg:mx-4 rounded-full p-2 transition-transform duration-300 group-hover:scale-120`}
            />
            {/* <link.icon
              size={30}
              color="white"
              className={`mx-2 ${
                link.name === "Telegram"
                  ? "bg-blue-500"
                  : link.name === "Instagram"
                  ? "bg-red-500"
                  : link.name === "Whatsapp"
                  ? "bg-green-500"
                  : ""
              } lg:w-[45px] lg:h-[45px] lg:mx-4 rounded-full p-2 transition-transform duration-300 group-hover:scale-125`}
            /> */}
            {/* <span
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                   opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white 
                   text-xs rounded px-2 py-1 whitespace-nowrap"
            > */}
            {/* {link.name} */}
            {/* </span> */}
          </a>
        ))}
      </div>
      {/* social media links after heading */}
      <div className="h-[100px] w-full  flex justify-center items-center text-black text-center">
        <h1 className="lg:text-[20px] md:text-[25px] text-[18px] text- font-bold">
          Get the latest updates on government jobs directly in your favorite
          social media plateform.
        </h1>
      </div>
      {/* break line */}
      <div className="bg-gray-300 h-[1px] w-full" />
      {/* copyright and privacy policy and contact us  */}
      <div className="flex flex-col justify-center items-center text-black text-center pt-4 pb-4">
        <h3 className="lg:text-[18px] md:text-[25px] text-[18px]">
          <Link href={"/privacypolicy"}>Privacy Policy</Link>
          {" | "}
          <Link href={"/contactUs"}>Contact Us</Link>
        </h3>
        <p className="lg:text-[17px] md:text-[25px] text-[17px]">
          sarkarijobsamachar.com provides free job alert service to job seekers
          in India on latest government jobs, Admitcard availability and
          results. To get free job alerts daily, subscribe to our channel on
          Telegram and Whatsapp.
        </p>
        <p className="lg:text-[15px] md:text-[25px] text-[15px]">
          © {new Date().getFullYear()} Sarkari Job Samachar. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
