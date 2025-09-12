import React from 'react'
import { Instagram, Mail } from 'lucide-react'
import CTA from '../cta'

const Footer = () => {
  return (
    <div className="bg-gradient-to-bl py-10 from-blue-950 to-blue-700">
      <div className="container mx-auto">
        <CTA />
        <div className="flex items-center justify-between">
          <span className="text-white text-base">
            Copyright &copy; 2025 Trunity Agency -  All Rights Reserved.
          </span>
          <ul className='flex items-center gap-8'>
            <li>
              <a href='#' className='text-sm font-semibold text-white'>About Trunity</a>
            </li>
            <li>
              <a href='#' className='text-sm font-semibold text-white'>Focus</a>
            </li>
            <li>
              <a href='#' className='text-sm font-semibold text-white'>What We Do</a>
            </li>
            <li>
              <a href='#' className='text-sm font-semibold text-white'>Team</a>
            </li>
            <li>
              <a href='#' className='text-sm font-semibold text-white'>Testimonials</a>
            </li>
            <li>
              <a href='#' className='text-sm font-semibold text-white'>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
