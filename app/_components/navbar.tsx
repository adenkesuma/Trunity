import Image from 'next/image'
import Logo from "@/public/assets/Trunity.png"
import React from 'react'

const Navbar = () => {
  return (
    <nav className='mx-auto container mt-6 flex items-center justify-between gap-6'>
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
      <button className="py-2 px-3 rounded-xl h-fit font-semibold text-sm bg-blue-600 text-white">Contact Us</button>  
    </nav>
  )
}

export default Navbar
