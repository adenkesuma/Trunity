import { cn } from "@/lib/utils";
import React from "react";
import Cindy from "@/public/assets/cindy.png";
import Line from "@/public/assets/Line.png";
import Image from "next/image";
import { Phone } from "lucide-react";

export function DotBackgroundResources() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,blue)]"></div>

      <div className="relative z-20 bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text py-8 mt-52">
        <div className="bg-blue-600 rounded-2xl w-[450px] h-96 flex justify-center">
          <Image src={Cindy} alt="founder image" className="w-96 bg-cover object-cover bottom-8 absolute" />
        </div>
      </div>

      <div className="flex items-center gap-3 absolute left-28 top-52 backdrop-blur p-4 rounded-xl border border-blue-200 bg-blue-600/5">
        <div className="bg-blue-600 rounded-full p-4 w-fit">
          <Phone />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600 font-semibold text-sm">Make a call</span>
          <span className="text-xl font-normal text-gray-600">0812738342343</span>
        </div>
      </div>

      <div className="absolute right-52 bottom-6 backdrop-blur p-4 z-50 rounded-xl border border-blue-200 bg-blue-600/5 flex flex-row items-center gap-10">
        <div className="flex flex-col items-center">
          <span className="text-blue-600 font-semibold text-4xl">256</span>
          <span className="text-xs font-normal text-gray-600">Total Client</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-blue-600 font-semibold text-4xl">$256k</span>
          <span className="text-xs font-normal text-gray-600">Total Revenue</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-blue-600 font-semibold text-4xl">200</span>
          <span className="text-xs font-normal text-gray-600">Total Review</span>
        </div>
      </div>
    </div>
  );
}
