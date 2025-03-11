"use client";

import { useSearchParams } from "next/navigation";

export default function LatestJob() {
  const searchParams = useSearchParams();
  const sector = searchParams.get("sector"); // Get the sector query

  return (
    <div className="max-w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Latest Jobs for {sector ? decodeURIComponent(sector) : "All Sectors"}
      </h1>
      {/* Here, you can fetch & display job listings based on the sector */}
    </div>
  );
}
