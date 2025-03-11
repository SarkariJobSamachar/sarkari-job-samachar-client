"use client";

import React from "react";
import Image from "next/image";
import sarkari_job_samachar_Logo from "../../../../public/Images/png3.png";
import { JOBDATA, initialStates } from "./NavbarJobdata";
import Marquee from "react-fast-marquee";
import Latestjob from "@/app/latest-job-data/page";
import RandomColorList from "@/app/utils/RandomColor";
import SocialMediaLinks from "./SocialMediaLinks";
import SearchBar from "./Searchbar";

export default function Navbar() {
  //  const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500", "text-pink-500", "text-orange-500"];
  // return colors[Math.floor(Math.random() * colors.length)];
  const data = [
    "डेली अपडेट पाने के लिए हमारे Telegram एवं Whatsapp चैनल को Join करे और Instagram पर फॉलो भी करे।",
    "Join our Telegram and WhatsApp channels and follow us on Instagram to get daily updates.",
  ];
  // const handleclick(item?.value){
  //   console.log(item?.value);
  // }
  // const handleclick = (item) => {
  //   console.log(item?.value);
  // };
  // const datas = fetch("https://api.vercel.app/blog");
  // const posts = datas.json();
  // console.log(posts);

  return (
    //   {/* ----------------first navbar---------------- */}
    //   {/* where can put logo ,heading and website link */}
    <>
      <div className="text-white h-[100px] md:h-[130px] lg:h-[150px] w-full bg-[#1A365D] flex justify-center  p-[10px] gap-[5px] md:gap-[30px] lg:gap-[10px]">
        <div className="flex items-center justify-center lg:w-[30%] md:w-[22%] w-[25%] h-full ">
          <Image
            src={sarkari_job_samachar_Logo}
            alt="sarkari job samachar - Logo"
            width={140}
            height={38}
            priority
            // onClick={() => window.location.reload()}
          />
        </div>
        <div className="text-center  lg:w-[70%] md:w-[78%] w-[75%] flex flex-col justify-center">
          <h1 className="text-[20px] md:text-[25px] lg:text-[35px] font-bold font-">
            Sarkari Job Samachar
          </h1>

          <p className="text-[12px] md:text-[15px] lg:text-[17px] text-[#FFFF12] font-sans">
            Connecting Talent with Opportunity
          </p>
        </div>
      </div>
      {/* JOBDATA */}
      <div className="text-white w-full h-[40px] bg-[#000000] flex items-start justify-start ">
        {JOBDATA?.map((item, index) => {
          return (
            <>
              <div
                key={item?.id || index}
                className="w-[40%] md:w-[80%] lg:w-[60%] h-[40px] flex items-center justify-center "
              >
                <p
                  className="text-[12px] md:text-[15px] lg:text-[20px] font-bold cursor-pointer"
                  onClick={() => console.log(item?.value)}
                >
                  {item?.label}
                </p>
                {/* <button onClick={() => console.log(item?.value)}>
                  {" "}
                  {item?.label}
                </button> */}
              </div>

              {/* Insert Select Dropdown Between "All Jobs" and "Results" */}
              {item.value === "alljobs" && (
                //
                <select
                  onChange={(e) => console.log(e.target.value)}
                  className="p-3 lg:p-2 text-[12px] md:text-[15px] lg:text-[20px] font-bold w-[40%]  lg:w-[60%] "
                >
                  <option value="" className="text-black">
                    State Jobs
                  </option>
                  {initialStates.map((state, i) => (
                    <option key={i} value={state} className="text-black">
                      {state}
                    </option>
                  ))}
                </select>
              )}
            </>
          );
        })}
      </div>
      {/* latest job data */}
      <div>
        <Latestjob />
      </div>
      {/* marquee */}
      <div className="p-4 ">
        <RandomColorList data={data} />
      </div>
      {/* heading */}
      <div>
        <h1 className="text-red-500 flex text-[25px] justify-center font-bold">
          Welcome to sarkari job samachar portal
        </h1>
      </div>
      {/* search bar */}
      <div className="p-4">
        <SearchBar />
      </div>
      {/* SocialMediaLinks */}
      <div className="p-4">
        <SocialMediaLinks />
      </div>
    </>
  );
}
