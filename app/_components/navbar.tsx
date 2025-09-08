import Image from 'next/image'
import Logo from "@/public/assets/Trunity.png"
import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-2 px-4 mt-4 rounded-2xl border border-blue-200 bg-blue-600/5 flex items-center justify-between gap-6'>
      <Image src={Logo} alt='logo' className='w-28 h-fit' />
      <ul className='flex items-center gap-8'>
        <li>
          <a href='#' className='text-sm font-semibold text-gray-700'>About us</a>
        </li>
        <li>
          <a href='#' className='text-sm font-semibold text-gray-700'>Service</a>
        </li>
        <li>
          <a href='#' className='text-sm font-semibold text-gray-700'>Resources</a>
        </li>
        <li>
          <a href='#' className='text-sm font-semibold text-gray-700'>Contact Us</a>
        </li>
        <li>
          <a href='#' className='text-sm font-semibold text-gray-700'>Team</a>
        </li>
      </ul>
      <button className="py-2 px-3 rounded-xl h-fit font-semibold text-sm bg-blue-600 text-white">Contact Us</button>  
    </nav>
  )
}

export default Navbar
