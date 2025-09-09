import { cn } from "@/lib/utils";
import React from "react";
import Founder from "@/public/assets/angelia.png";
import Line from "@/public/assets/Line.png";
import Image from "next/image";
import { Star } from "lucide-react";
import Logo from "@/public/assets/Trunity.png"

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
      
      <div className="relative z-20 bg-clip-text">
        <Image src={Logo} alt="logo" className="w-full"/>
      </div>

      {/* <div className="relative z-20 bg-gradient-to-b from-blue-200 to-blue-500 bg-clip-text py-8 mt-96">
        <div className="bg-blue-600 rounded-2xl w-[450px] h-60 flex justify-center">
          <Image src={Founder} alt="founder image" className="w-96 bg-cover object-cover bottom-8 absolute" />
        </div>
      </div>

      <div className="absolute left-1 top-52 backdrop-blur p-4 rounded-xl border border-blue-200 bg-blue-600/5 flex flex-col">
        <span className="text-blue-600 font-bold text-4xl">7x <span className="text-2xl text-blue-950">MDRT Award</span></span>
        <span className="text-sm font-normal text-gray-600">Bukti Keahlian Kelas Dunia</span>
      </div>

      <div className="absolute left-6 bottom-80 backdrop-blur p-4 z-50 flex flex-col rounded-xl border border-blue-200 bg-blue-600/5">
        <span className="text-blue-600 font-bold text-4xl">1x <span className="text-2xl text-blue-950">COT</span></span>
        <span className="text-xs font-normal text-gray-600">Prestasi Tier Tertinggi</span>
      </div>

      <div className="absolute right-10 bottom-80 backdrop-blur p-4 z-50 flex flex-col rounded-xl border border-blue-200 bg-blue-600/5">
        <span className="text-blue-600 font-bold text-4xl">100%</span>
        <span className="text-xs font-normal text-gray-600">Nasihat Independen</span>
      </div> */}
    </div>
  );
}
