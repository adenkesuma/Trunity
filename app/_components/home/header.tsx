import { CircleCheckBig, Instagram, Mail } from 'lucide-react'
import React from 'react'
import { Spotlight } from '../spotlight'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Logo from "@/public/assets/Trunity.png"

const Header = () => {
  return (
     <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]",
        )}
      /> */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
 
      {/* <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="lightblue"
      /> */}
      <Image src={Logo} alt="logo" className='opacity-[6%] w-full absolute'/>
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <div className="flex flex-col items-center gap-6">
          <h1 className='text-blue-950 text-6xl font-bold text-center font-sans mb-4'>One Stop Solution for Insurance & Financial Growth</h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-sm font-semibold'>Amankan Nilai Aset</span>
            </div>
            <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-sm font-semibold'>Genjot Pertumbuhan</span>
            </div>
            <div className="flex items-center gap-2">
                <CircleCheckBig className='text-blue-600' size={'18px'} />
                <span className='text-gray-700 text-sm font-semibold'>Wariskan Kekayaan</span>
            </div>
          </div>
          <p className='text-sm font-normal text-gray-600 text-center'>Dipimpin oleh Financial Advisor Berprestasi 7x MDRT Award-Winner dan 1X COT. <br /> 18+ Tahun mendedikasikan expertise untuk merancang strategi finansial yang tak hanya melindungi, tapi juga mewariskan kekayaan.</p>
          {/* <a href="#" target='_blank' className='py-2 px-3 rounded-xl bg-blue-600 text-white text-sm w-fit font-semibold'>
            Ngobrol Bareng Founder
          </a> */}
          <div className="flex items-center gap-4">
            <button className="w-fit cursor-pointer py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-bl from-blue-400 to-blue-800">
              <span>Follow Instagram Trunity</span>
              <Instagram size={"18px"}/>
            </button>
            <div className="w-fit cursor-pointer py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-bl from-blue-400 to-blue-800">
              <span>Hubungi Trunity</span>
              <Mail size={"18px"} />
            </div>
          </div>
          {/* <div className="flex items-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <h2 className='text-5xl text-blue-950 font-bold'>100+</h2>
              <span className='text-sm text-gray-500'>Klien Terlindungi & <br /> Tercapai Goals Financialnya</span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className='text-5xl text-blue-950 font-bold'>18+</h2>
              <span className='text-sm text-gray-500'>Tahun Expertise di Dunia <br /> Perbankan & Asuransi</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header
