"use client"

import React from 'react'
import { CardBody, CardContainer, CardItem } from "../three-d-card";
import { TeamCard } from '../team-card'
import Image from 'next/image';
import Founder from "@/public/assets/angelia-2.png"
import { ArrowUpRight, Instagram, Mail } from 'lucide-react';

const Team = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:trunityagency@gmail.com';
  }; 

  return (
    <div id='team' className=''>
      <div className="container mx-auto py-10 px-4 sm:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className='flex flex-col gap-6'>
            <div className="flex flex-col gap-6">
              <h2 className="relative z-20 text-3xl md:text-5xl font-bold text-left text-blue-950 font-sans tracking-tight">
                Tim di Balik Trunity Agency
              </h2>
              <p className="text-sm text-gray-500">
                Di balik polis asuransi yang hebat, ada tim yang lebih hebat lagi. Kenali para profesional kami yang akan mendampingi Anda <br /> dengan saran ahli dan dukungan personal untuk memberdayakan keputusan Anda.
              </p>
              <div className="flex flex-wrap items-center gap-4">
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
          <div className="inter-var w-full md:w-96">
            <div className="bg-gray-50 relative group/card h-auto rounded-xl border">
              <div className="w-full mt-4 flex justify-center">
                <Image
                  src={Founder}
                  height="1000"
                  width="1000"
                  className="h-72 xl:h-96 w-44 xl:w-60 object-cover rounded-xl group-hover/card:shadow-none"
                  alt="thumbnail"
                />
              </div>
              <div className="bg-blue-950 rounded-b-xl p-6 flex flex-col items-center justify-between">
                <div
                  className="text-3xl text-white font-bold font-sans"
                >
                  Angelia Chen
                </div>
                <div className='text-lg font-normal mt-2 text-white/90'>
                  Founder Trunity Agency
                </div>
                <div className="text-sm text-gray-300 mt-4 text-center">
                  10 tahun di industri perbankan dan 8 tahun di industri asuransi. <span className='font-bold'>7x MDRT and 1x COT</span>
                </div>
                <a href="https://www.instagram.com/angeliach3n/" target='_blank' className="mt-4 w-full py-2 px-4 rounded-xl flex justify-center cursor-pointer items-center gap-2 bg-white text-blue-700">
                  <Instagram size={"14px"} className='shrink-0' />
                  <span className='shrink-0 text-sm'>Follow Instagram Founder</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <TeamCard />
      </div>
    </div>
  )
}

export default Team
