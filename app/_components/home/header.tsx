import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <h1 className='text-blue-950 text-6xl font-bold'>Your Trusted Partner in Insurance</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600' size={'18px'} />
              <span className='text-gray-700 text-sm font-semibold'>Reliable Insurance Solutions</span>
          </div>
          <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600' size={'18px'} />
              <span className='text-gray-700 text-sm font-semibold'>Independent Advice</span>
          </div>
          <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600' size={'18px'} />
              <span className='text-gray-700 text-sm font-semibold'>Free of Charge</span>
          </div>
        </div>
        <p className='text-sm font-normal text-gray-600'>Trunity Agency simplifies insurance with clear, tailored solutions for your needs in Indonesia. Get unblased advice and the best coverage at competitive prices</p>
        <button className='py-2 px-3 rounded-xl bg-blue-600 text-white text-sm w-fit font-semibold'>
          Request a Consultation
        </button>

        <div className="flex items-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <h2 className='text-5xl text-blue-950 font-bold'>22+</h2>
            <span className='text-sm text-gray-500'>Over 22 Years of Expertise in <br /> Insurance Consulting</span>
          </div>
          <div className="flex items-center gap-2">
            <h2 className='text-5xl text-blue-950 font-bold'>2x</h2>
            <span className='text-sm text-gray-500'>Faster then any other <br /> Insurance Services</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
