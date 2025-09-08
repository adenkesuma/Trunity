import { cn } from "@/lib/utils";
import React from "react";
import Founder from "@/public/assets/angelia.png";
import Line from "@/public/assets/Line.png";
import Image from "next/image";
import { Star } from "lucide-react";

export function DotBackground() {
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

      <div className="relative z-20 bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text py-8 mt-96">
        <div className="bg-blue-600 rounded-2xl w-[450px] h-60 flex justify-center">
          <Image src={Founder} alt="founder image" className="w-96 bg-cover object-cover bottom-8 absolute" />
        </div>
      </div>

      <div className="absolute left-28 top-52 backdrop-blur p-4 rounded-xl border border-blue-200 bg-blue-600/5">
        <span className="text-gray-600 font-semibold text-sm">4.5/5</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400" />
            <Star className="text-yellow-400" />
            <Star className="text-yellow-400" />
            <Star className="text-yellow-400" />
            <Star className="text-yellow-400" />
          </div>
          <span className="text-sm font-normal text-gray-600">Ratings</span>
        </div>
      </div>

      <div className="absolute left-24 bottom-60 backdrop-blur p-4 z-50 flex flex-col rounded-xl border border-blue-200 bg-blue-600/5">
        <span className="text-blue-600 font-semibold text-4xl">10.310</span>
        <span className="text-xs font-normal text-gray-600">Happy Nasabah</span>
      </div>

      <div className="absolute right-20 bottom-80 backdrop-blur p-4 z-50 flex flex-col rounded-xl border border-blue-200 bg-blue-600/5">
        <span className="text-xs font-normal text-gray-600">Customer Satisfaction</span>
        <div className="flex items-center gap-10">
          <span className="text-blue-600 font-semibold text-4xl">90%</span>
          <Image src={Line} alt="line" className="w-14" />
        </div>
      </div>
    </div>
  );
}
