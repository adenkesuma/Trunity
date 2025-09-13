import React from 'react'
import CTA from '../cta'

const Footer = () => {
  return (
    <div className="bg-gradient-to-bl py-10 from-blue-950 to-blue-700">
      <div className="container mx-auto px-4 sm:px-0">
        <CTA />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="text-white text-sm md:text-base">
            Copyright &copy; 2025 Trunity Agency -  All Rights Reserved.
          </span>
          <ul className='flex flex-wrap justify-center mt-4 md:mt-0 items-center gap-4 md:gap-8'>
            <li>
              <a href='#about' className='text-sm font-semibold text-white'>Tentang Trunity</a>
            </li>
            <li>
              <a href='#focus' className='text-sm font-semibold text-white'>Fokus</a>
            </li>
            <li>
              <a href='#activity' className='text-sm font-semibold text-white'>Kegiatan Trunity</a>
            </li>
            <li>
              <a href='#services' className='text-sm font-semibold text-white'>Layanan</a>
            </li>
            <li>
              <a href='#team' className='text-sm font-semibold text-white'>Tim Trunity</a>
            </li>
            <li>
              <a href='#testimonials' className='text-sm font-semibold text-white'>Testimonial</a>
            </li>
            <li>
              <a href='#map' className='text-sm font-semibold text-white'>Lokasi</a>
            </li>
            <li>
              <a href='#faq' className='text-sm font-semibold text-white'>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
