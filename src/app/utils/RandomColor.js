"use client";

import Marquee from "react-fast-marquee";

const getRandomColor = () => {
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-orange-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function RandomColorList({ data }) {

  return (
    <div className="p-4">
      <Marquee>
        {data?.map((elem, index) => (
          <h4 key={index} className={`ml-2 ${getRandomColor()}`}>
            {elem}
          </h4>
        ))}
      </Marquee>
    </div>
  );
}
