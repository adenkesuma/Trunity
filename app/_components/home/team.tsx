"use client"

import React from 'react'
import { CardBody, CardContainer, CardItem } from "../three-d-card";
import { TeamCard } from '../team-card'
import Image from 'next/image';
import Founder from "@/public/assets/angelia-2.png"
import { Instagram, Mail } from 'lucide-react';

const Team = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:trunityagency@gmail.com';
  }; 

  return (
    <div id='team' className=''>
      <div className="container mx-auto py-10 px-4 sm:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
          <div className='flex flex-col gap-6'>
            <div className="flex flex-col gap-6">
              <h2 className="relative z-20 text-3xl md:text-5xl font-bold text-left text-blue-950 font-sans tracking-tight">
                Tim di Balik Trunity Agency
              </h2>
              <p className="text-sm text-gray-500">
                Di balik polis asuransi yang hebat, ada tim yang lebih hebat lagi. Kenali para profesional kami yang akan mendampingi Anda <br /> dengan saran ahli dan dukungan personal untuk memberdayakan keputusan Anda.
              </p>
              <div className="flex items-center gap-4">
                <a href='https://www.instagram.com/trunityagency/' className="w-fit cursor-pointer py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-bl from-blue-400 to-blue-800">
                  <span>Follow Instagram Trunity</span>
                  <Instagram size={"18px"}/>
                </a>
                <button onClick={handleEmailClick} className="w-fit cursor-pointer py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-bl from-blue-400 to-blue-800">
                  <span>Hubungi Trunity</span>
                  <Mail size={"18px"} />
                </button> 
              </div> 
            </div>
          </div>
          <CardContainer className="inter-var w-full md:w-96">
            <CardBody className="bg-gray-50 relative group/card h-auto rounded-xl border">
              <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
                <Image
                  src={Founder}
                  height="1000"
                  width="1000"
                  className="h-96 w-60 object-cover rounded-xl group-hover/card:shadow-none"
                  alt="thumbnail"
                />
              </CardItem>
              <div className='border border-blue-950/10 py-1 px-3 rounded-lg bg-blue-300/30 text-blue-600 font-bold absolute top-2 right-2 text-sm font-sans'>Founder</div>
              <div className="bg-blue-950 rounded-b-xl p-6 flex flex-col items-center justify-between">
                <CardItem
                  className="text-2xl text-white font-bold font-sans"
                >
                  Angelia Chen
                </CardItem>
                <CardItem className="text-sm text-gray-300 mt-4 text-center">
                  10 tahun di industri perbankan dan 8 tahun di industri asuransi. <span className='font-bold'>7x MDRT and 1x COT</span>
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
