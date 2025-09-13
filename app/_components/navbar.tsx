"use client"

import Image from 'next/image'
import Logo from "@/public/assets/Trunity.png"
import React, { useState } from 'react'
import { X } from 'lucide-react'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

  const messageOptions = [
    {
      id: 1,
      title: "Tanya informasi umum",
      message: `Halo admin, saya ingin bertanya tentang layanan yang tersedia. Bisa tolong berikan informasi umumnya?`
    },
    {
      id: 2,
      title: "Konsultasi kebutuhan",
      message: `Halo, saya sedang mempertimbangkan asuransi tapi belum yakin yang cocok. Bisa dibantu konsultasi?`
    },
    {
      id: 3,
      title: "Tanya proses pendaftaran",
      message: `Halo, saya tertarik untuk bergabung. Bisa dijelaskan proses pendaftarannya bagaimana?`
    },
    {
      id: 4,
      title: "Minta perbandingan produk",
      message: `Halo admin, saya ingin membandingkan beberapa pilihan produk. Bisa dibantu memberikan perbandingannya?`
    },
    {
      id: 5,
      title: "Tanya tentang klaim",
      message: `Halo, saya ingin tahu lebih detail tentang proses klaim. Bagaimana cara dan syaratnya?`
    },
    {
      id: 6,
      title: "Konsultasi keluarga",
      message: `Halo, saya ingin konsultasi untuk perlindungan keluarga. Bisa dibantu rekomendasinya?`
    },
    {
      id: 7,
      title: "Tanya promo terkini",
      message: `Halo, apakah saat ini ada promo atau penawaran khusus yang sedang berlangsung?`
    },
    {
      id: 8,
      title: "Minta contoh perhitungan",
      message: `Halo, saya ingin minta contoh perhitungan premi untuk usia saya. Bisa dibantu?`
    },
    {
      id: 9,
      title: "Tanya dokumen required",
      message: `Halo, dokumen apa saja yang perlu dipersiapkan untuk pendaftaran?`
    },
    {
      id: 10,
      title: "Konsultasi existing policy",
      message: `Halo, saya sudah punya polis tapi ingin konsultasi apakah sudah sesuai kebutuhan?`
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = '62811655228';
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    <nav className='relative mx-auto container mt-6 flex items-center justify-between gap-6'>
      <Image src={Logo} alt='logo' className='w-36 h-fit' />
      <ul className='flex items-center gap-8'>
        <li>
          <a href='#about' className='text-sm font-semibold text-gray-700'>Tentang Trunity</a>
        </li>
        <li>
          <a href='#focus' className='text-sm font-semibold text-gray-700'>Fokus</a>
        </li>
        <li>
          <a href='#activity' className='text-sm font-semibold text-gray-700'>Kegiatan Trunity</a>
        </li>
        <li>
          <a href='#services' className='text-sm font-semibold text-gray-700'>Layanan</a>
        </li>
        <li>
          <a href='#team' className='text-sm font-semibold text-gray-700'>Tim Trunity</a>
        </li>
        <li>
          <a href='#testimonials' className='text-sm font-semibold text-gray-700'>Testimonial</a>
        </li>
        <li>
          <a href='#map' className='text-sm font-semibold text-gray-700'>Lokasi</a>
        </li>
        <li>
          <a href='#faq' className='text-sm font-semibold text-gray-700'>FAQ</a>
        </li>
      </ul>
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer py-2 px-3 rounded-xl h-fit font-semibold text-sm bg-blue-600 text-white">Hubungi Kami</button>  

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl border border-gray-200 z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Pilih Topik Konsultasi</h3>
              <button className='cursor-pointer' onClick={() => setIsOpen(false)}>
                <X className='text-gray-900' size={"18px"} />
              </button>
            </div>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {messageOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleWhatsAppClick(option.message)}
                  className="w-full text-left p-3 rounded-xl hover:bg-gray-200 transition-colors bg-gray-100 border border-gray-300"
                >
                  <p className="text-sm font-medium text-gray-800">{option.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
