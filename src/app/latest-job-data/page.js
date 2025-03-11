"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { JObcategories } from "../utils/constants";

export default function Latestjob() {
  const router = useRouter();
  const handleClick = (category) => {
    const formattedSector = category.name.toLowerCase().replace(/\s+/g, "-"); // Replace spaces with hyphens
    router.push(`/latest-job?sector=${formattedSector}`);
  };

  return (
    <div className="max-w-full mx-auto p-2 bg-white shadow-md rounded-lg">
      <div className="flex flex-wrap gap-2 cursor-pointer">
        {JObcategories.map((category) => (
          <span
            key={category.id}
            onClick={() => handleClick(category)}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition duration-300"
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
}
