import React from 'react'
import CTA from '../cta'

const Footer = () => {
  return (
    <div className="bg-gradient-to-bl py-10 from-blue-950 to-blue-700">
      <div className="container mx-auto px-4 sm:px-0">
        <CTA />
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col">
            <span className="text-white text-sm md:text-base font-semibold">
              Copyright &copy; 2025 Trunity Agency -  All Rights Reserved.
            </span>
            <span className='text-gray-300 text-sm md:text-base font-normal'>
              Trunity - One Stop Solution for Insurance & Financial Growth
            </span>
          </div>
          <div className='flex flex-wrap justify-center md:justify-end mt-4 md:mt-0 items-center gap-8 md:gap-14'>
            <ul className="flex flex-col">
              <li>
                <a href='#about' className='text-xs md:text-sm font-normal text-white'>Tentang Trunity</a>
              </li>
              <li>
                <a href='#focus' className='text-xs md:text-sm font-normal text-white'>Fokus</a>
              </li>
              <li>
                <a href='#activity' className='text-xs md:text-sm font-normal text-white'>Kegiatan Trunity</a>
              </li>
              <li>
                <a href='#services' className='text-xs md:text-sm font-normal text-white'>Layanan</a>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li>
                <a href='#team' className='text-xs md:text-sm font-normal text-white'>Tim Trunity</a>
              </li>
              <li>
                <a href='#testimonials' className='text-xs md:text-sm font-normal text-white'>Testimonial</a>
              </li>
              <li>
                <a href='#map' className='text-xs md:text-sm font-normal text-white'>Lokasi</a>
              </li>
              <li>
                <a href='#faq' className='text-xs md:text-sm font-normal text-white'>FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
