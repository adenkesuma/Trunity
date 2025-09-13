"use client"

import Image from 'next/image'
import WhiteLogo from "@/public/assets/Trunity-white.png"
import { Instagram, Mail } from 'lucide-react'

const CTA = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:trunityagency@gmail.com';
  }; 

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-10 mb-6">
      <figure className='p-6 w-full lg:w-1/2'>
        <Image src={WhiteLogo} alt='white logo' />
      </figure>
      <div className='w-full lg:w-1/2 flex flex-col gap-6 p-10 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md'>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white font-sans">Ayo Konsultasi Gratis Ke Trunity Agency Sekarang Juga!</h2>
        <p className='text-white'>Mari melangkah untuk hal yang lebih baik demi mengamankan masa depan anak dan keluarga kamu bersama Trunity Agency.</p>
        <div className="flex items-center gap-4">
          <a href='https://www.instagram.com/trunityagency/' className="w-fit cursor-pointer py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold bg-white text-blue-600">
            <span>Follow Instagram Trunity</span>
            <Instagram size={"18px"}/>
          </a>
          <button onClick={handleEmailClick} className="w-fit cursor-pointer py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold bg-white text-blue-600">
            <span>Hubungi Trunity</span>
            <Mail size={"18px"} />
          </button> 
        </div>
      </div>
    </div>
  )
}

export default CTA
