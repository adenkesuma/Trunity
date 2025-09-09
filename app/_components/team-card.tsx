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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-white/40 relative group/card h-auto rounded-xl border">
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center border-b">
            <Image
              src={Cindy}
              height="1000"
              width="1000"
              className="h-96 w-60 object-cover rounded-xl group-hover/card:shadow-none"
              alt="thumbnail"
            />
          </CardItem>
          <div className="p-6 flex flex-col items-center justify-between">
            <CardItem
              className="text-xl md:text-2xl text-white"
            >
              Cindy Veronica
            </CardItem>
            <CardItem className="text-base">
              Executive Business Partner
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-white/40 relative group/card h-auto rounded-xl border">
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center border-b">
            <Image
              src={Vero}
              height="1000"
              width="1000"
              className="h-96 w-60 object-cover rounded-xl group-hover/card:shadow-none"
              alt="thumbnail"
            />
          </CardItem>
          <div className="p-6 flex flex-col items-center justify-between">
            <CardItem
              className="text-xl md:text-2xl text-white"
            >
              Veronica
            </CardItem>
            <CardItem className="text-base">
              Executive Business Partner
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-white/40 relative group/card h-auto rounded-xl border">
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center border-b">
            <Image
              src={Sanny}
              height="1000"
              width="1000"
              className="h-96 w-60 object-cover rounded-xl group-hover/card:shadow-none"
              alt="thumbnail"
            />
          </CardItem>
          <div className="p-6 flex flex-col items-center justify-between">
            <CardItem
              className="text-xl md:text-2xl text-white"
            >
              Sanny
            </CardItem>
            <CardItem className="text-base">
              Executive Business Partner
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-white/40 relative group/card h-auto rounded-xl border">
          <CardItem translateZ="100" className="w-full mt-4 flex justify-center border-b">
            <Image
              src={Hendrik}
              height="1000"
              width="1000"
              className="h-96 w-60 object-cover rounded-xl group-hover/card:shadow-none"
              alt="thumbnail"
            />
          </CardItem>
          <div className="p-6 flex flex-col items-center justify-between">
            <CardItem
              className="text-xl md:text-2xl text-white"
            >
              Hendrik
            </CardItem>
            <CardItem className="text-base">
              Executive Business Partner
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
