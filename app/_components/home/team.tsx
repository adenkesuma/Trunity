import React from 'react'
import { CardBody, CardContainer, CardItem } from "../three-d-card";
import { TeamCard } from '../team-card'
import Image from 'next/image';
import Founder from "@/public/assets/angelia-2.png"

const Team = () => {
  return (
    <div className='bg-gradient-to-bl from-blue-950 to-blue-700'>
      <div className="container mx-auto py-10">
        <div className="flex items-center gap-20">
          <div className='flex flex-col gap-6'>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl relative z-20 md:text-4xl lg:text-5xl font-bold text-left text-black dark:text-white font-sans tracking-tight">
                Trunity Agency who are here to guide you through your insurance agency
              </h2>
              <p className="text-sm text-100-600">
                Our experienced professionals are here to guide you with expert advice, personalized support. and a commitment to helping you negative your insurance journey with confidence.
              </p>
              <button className="py-2 px-4 rounded-xl bg-white text-blue-600 font-semibold text-sm w-fit">Explore more</button>
            </div>
          </div>
          <CardContainer className="inter-var w-96">
            <CardBody className="bg-white/40 relative group/card h-auto rounded-xl border">
              <CardItem translateZ="100" className="w-full mt-4 flex justify-center border-b">
                <Image
                  src={Founder}
                  height="1000"
                  width="1000"
                  className="h-96 w-60 object-cover rounded-xl group-hover/card:shadow-none"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="p-6 flex flex-col items-center justify-between">
                <CardItem
                  className="text-4xl text-white"
                >
                  Angelia Chen
                </CardItem>
                <CardItem className="text-lg">
                  Founder
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <TeamCard />
      </div>
    </div>
  )
}

export default Team
