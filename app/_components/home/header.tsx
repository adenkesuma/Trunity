"use client"

import { CircleCheckBig, Instagram, Mail } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Logo from "@/public/assets/Trunity.png"
import Founder from "@/public/assets/angelia.png"

const Header = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:trunityagency@gmail.com';
  }; 

  return (
     <div className="relative flex h-full lg:h-[40rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]",
        )}
      /> */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)]",
        )}
      />
 
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
 
      {/* <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="lightblue"
      /> */}
      {/* <Image src={Logo} alt="logo" className='opacity-[6%] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/> */}
      <div className="relative z-10 mx-auto w-full container p-4 pt-20 md:pt-0 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/2">
          <h1 className='text-blue-950 text-4xl md:text-5xl max-w-5xl font-bold text-center lg:text-left font-sans mb-2'>One Stop Solution for Insurance & Financial Growth</h1>
          {/* <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex flex-col gap-1">
              <div className='font-bold text-gray-900'>Perlindungan Aset</div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-xs md:text-sm font-medium'>Perlindungan Hutang (Modal Kerja)</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-xs md:text-sm font-medium'>KPR (Kredit Kepemilikan Rumah)</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-xs md:text-sm font-medium'>Leasing</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-gray-900">Wirausaha</div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-xs md:text-sm font-medium'>Memberikan percepatan income untuk orang-orang</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-xs md:text-sm font-medium'>Peluang passive income dari jaringan agen</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-xs md:text-sm font-medium'>Business yang scalable</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-bold text-gray-900">Perencanaan Warisan</div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-xs md:text-sm font-medium'>Perencanaan waris yang terstruktur</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-xs md:text-sm font-medium'>Perlindungan aset untuk generasi penerus</span>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-xs md:text-sm font-medium'>Pengelolaan kekayaan jangka panjang</span>
              </div>
            </div>
          </div> */}
          <p className='text-sm font-normal text-gray-600 text-center lg:text-left'>Dipimpin oleh Financial Advisor Berprestasi 7x MDRT Award-Winner dan 1X COT. <br className='hidden md:block' /> 18+ Tahun mendedikasikan expertise untuk merancang strategi finansial yang tak hanya melindungi, tapi juga mewariskan kekayaan.</p>
          {/* <a href="#" target='_blank' className='py-2 px-3 rounded-xl bg-blue-600 text-white text-sm w-fit font-semibold'>
            Ngobrol Bareng Founder
          </a> */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href='https://www.instagram.com/trunityagency/' className="w-fit cursor-pointer py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-bl from-blue-400 to-blue-800">
              <span>Follow Instagram Trunity</span>
              <Instagram size={"18px"}/>
            </a>
            <button onClick={handleEmailClick} className="w-fit cursor-pointer py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-bl from-blue-400 to-blue-800">
              <span>Hubungi Trunity</span>
              <Mail size={"18px"} />
            </button>
          </div>
          <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-0 flex-wrap gap-8 mt-8">
            <div className="flex items-center gap-2">
              <h2 className='text-5xl text-blue-950 font-bold'>100+</h2>
              <span className='text-sm text-gray-500'>Klien Terlindungi & <br /> Tercapai Goals Financialnya</span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className='text-5xl text-blue-950 font-bold'>18+</h2>
              <span className='text-sm text-gray-500'>Tahun Expertise di Dunia <br /> Asuransi</span>
            </div>
          </div>
        </div>
        
        <div className='w-full lg:w-1/2 flex justify-center relative'>
          <Image src={Founder} alt='founder' className='w-96 -mb-6'/>
          <div className="bg-blue-50 border border-blue-200 lg:border-none lg:bg-transparent p-2 lg:p-0 rounded-xl lg:rounded-none flex flex-col absolute h-fit top-42 lg:top-20 right-0 lg:right-6">
            <h3 className='text-sm lg:text-2xl font-semibold'>Angelia Chen</h3>           
            <span className='text-xs text-gray-600 lg:text-base'>Founder Trunity Agency</span>
          </div>
          <div className="flex flex-col gap-1 bg-blue-50 border border-blue-200 p-4 rounded-xl absolute h-fit bottom-63 left-4 lg:left-10">
            <div className='font-bold text-gray-900 text-xs'>Perlindungan Aset</div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600 shrink-0' size={'14px'} />
              <span className='text-gray-700 text-[10px] xl:text-xs font-medium'>Perlindungan Hutang (Modal Kerja)</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600 shrink-0' size={'14px'} />
              <span className='text-gray-700 text-[10px] xl:text-xs font-medium'>KPR (Kredit Kepemilikan Rumah)</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600 shrink-0' size={'14px'} />
              <span className='text-gray-700 text-[10px] xl:text-xs font-medium'>Leasing</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-blue-50 border border-blue-200 p-4 rounded-xl absolute bottom-5 left-2 lg:left-10">
            <div className="font-bold text-gray-900 text-xs">Wirausaha</div>
            <div className="flex items-center gap-2 text-xs">
              <CircleCheckBig className='text-blue-600 shrink-0' size={'14px'} />
              <span className='text-gray-700 text-[10px] xl:text-xs font-medium'>Memberikan percepatan income untuk orang-orang</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600 shrink-0' size={'14px'} />
              <span className='text-gray-700 text-[10px] xl:text-xs font-medium'>Peluang passive income dari jaringan agen</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600 shrink-0' size={'14px'} />
              <span className='text-gray-700 text-[10px] xl:text-xs font-medium'>Business yang scalable</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-blue-50 border border-blue-200 p-4 rounded-xl absolute bottom-34 xl:bottom-40 right-0">
            <div className="font-bold text-gray-900 text-xs">Perencanaan Warisan</div>
            <div className="flex items-center gap-2 text-xs">
              <CircleCheckBig className='text-blue-600 shrink-0' size={'14px'} />
              <span className='text-gray-700 text-[10px] xl:text-xs font-medium'>Perencanaan waris yang terstruktur</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600 shrink-0' size={'14px'} />
              <span className='text-gray-700 text-[10px] xl:text-xs font-medium'>Perlindungan aset untuk generasi penerus</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600 shrink-0' size={'14px'} />
              <span className='text-gray-700 text-[10px] xl:text-xs font-medium'>Pengelolaan kekayaan jangka panjang</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
