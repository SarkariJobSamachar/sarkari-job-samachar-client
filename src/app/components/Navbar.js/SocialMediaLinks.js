import React from "react";
import { socialMediaLinks } from "../../utils/constants";

export default function SocialMediaLinks() {
  return (
    <div className="flex flex-row items-center justify-center">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
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
            } lg:w-[45px] lg:h-[45px] lg:mx-4 rounded-full p-2 transition-transform duration-300 group-hover:scale-120`}
          /> */}
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
            } lg:w-[45px] lg:h-[45px] lg:mx-4 rounded-full p-2 transition-transform duration-300 group-hover:scale-125`}
          />
          <span
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                     opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white 
                     text-xs rounded px-2 py-1 whitespace-nowrap"
          >
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
}
