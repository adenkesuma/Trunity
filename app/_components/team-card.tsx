"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./three-d-card";
import Image from "next/image";
import Vero from "@/public/assets/Vero.png"
import Cindy from "@/public/assets/cindy.png"
import Sanny from "@/public/assets/Sanny.png"
import Hendrik from "@/public/assets/Hendrik.png"

export function TeamCard() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-4 md:gap-6 xl:gap-10">
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-gray-50 relative group/card h-auto rounded-xl border">
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src={Cindy}
              height="1000"
              width="1000"
              className="h-72 xl:h-96 w-44 xl:w-60 object-cover rounded-xl group-hover/card:shadow-none"
              alt="thumbnail"
            />
          </CardItem>
            <div className='border border-blue-950/10 py-1 px-3 rounded-lg bg-blue-300/30 text-blue-600 font-bold absolute top-2 right-2 text-sm font-sans'>EBP</div>
          <div className="bg-blue-950 p-4 md:p-6 flex flex-col items-center justify-between rounded-b-xl">
            <CardItem
              className="text-lg text-center md:text-xl lg:text-2xl text-white font-sans font-bold"
            >
              Cindy Veronica
            </CardItem>
            <CardItem className="text-xs md:text-sm text-gray-300 mt-2 md:mt-4 text-center">
              Pengalaman 10 Tahun sebagai Business Manager di perbankan dan 4 tahun di industri asuransi.
              <span className="font-bold"> 4x MDRT</span>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-gray-50 relative group/card h-auto rounded-xl border">
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src={Vero}
              height="1000"
              width="1000"
              className="h-72 xl:h-96 w-44 xl:w-60 object-cover rounded-xl group-hover/card:shadow-none"
              alt="thumbnail"
            />
          </CardItem>
          <div className='border border-blue-950/10 py-1 px-3 rounded-lg bg-blue-300/30 text-blue-600 font-bold absolute top-2 right-2 text-sm font-sans'>EBP</div>
          <div className="bg-blue-950 p-4 md:p-6 flex flex-col items-center justify-between rounded-b-xl">
            <CardItem
              className="text-lg md:text-xl lg:text-2xl text-white font-sans font-bold"
            >
              Veronica
            </CardItem>
            <CardItem className="text-xs md:text-sm text-gray-300 mt-2 md:mt-4 text-center">
              Sejak 2013 berdedikasi sebagai Konsultan Bisnis Eksekutif di bidang perencanaan keuangan.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-gray-50 relative group/card h-auto rounded-xl border">
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src={Sanny}
              height="1000"
              width="1000"
              className="h-72 xl:h-96 w-44 xl:w-60 object-cover rounded-xl group-hover/card:shadow-none"
              alt="thumbnail"
            />
          </CardItem>
          <div className='border border-blue-950/10 py-1 px-3 rounded-lg bg-blue-300/30 text-blue-600 font-bold absolute top-2 right-2 text-sm font-sans'>EBP</div>
          <div className="bg-blue-950 p-4 md:p-6 flex flex-col items-center justify-between rounded-b-xl">
            <CardItem
              className="text-lg md:text-xl lg:text-2xl text-white font-sans font-bold"
            >
              Sanny
            </CardItem>
            <CardItem className="text-xs md:text-sm text-gray-300 mt-2 md:mt-4 text-center">
              Pengalaman 11 Tahun berkarir di industri perbankkan dan 4 tahun di industri asuransi.
              <span className="font-bold"> 1x MDRT</span>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-gray-50 relative group/card h-auto rounded-xl border">
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
            <Image
              src={Hendrik}
              height="1000"
              width="1000"
              className="h-72 xl:h-96 w-44 xl:w-60 object-cover rounded-xl group-hover/card:shadow-none"
              alt="thumbnail"
            />
          </CardItem>
          <div className='border border-blue-950/10 py-1 px-3 rounded-lg bg-blue-300/30 text-blue-600 font-bold absolute top-2 right-2 text-sm font-sans'>EBP</div>
          <div className="bg-blue-950 p-4 md:p-6 flex flex-col items-center justify-between rounded-b-xl">
            <CardItem
              className="text-lg md:text-xl lg:text-2xl text-white font-sans font-bold"
            >
              Hendrik
            </CardItem>
            <CardItem className="text-xs md:text-sm text-gray-300 mt-2 md:mt-4 text-center">
              Sejak 2010, saya mengabdi di industri perbankan dan memahami betul kebutuhan masyarakat.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
