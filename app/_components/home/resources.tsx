import React from 'react'
import { DotBackgroundResources } from '../dot-background-resources'
import { SearchCheck, ShieldCheck } from 'lucide-react'

const Resources = () => {
  return (
    <div className='flex items-center gap-8 mt-20'>
      <DotBackgroundResources />
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-4xl font-semibold text-blue-950">Why Trunity? <br /> Your trusted insurance partner</h2>
          <p className="mt-2 text-sm text-gray-600">At Trunity, we simplify insurance with transparent, independent advice and toilored solutions. OUr expert team ensures you receive the best covarage from a network of over 150 trusted providers</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <ShieldCheck size={"24px"} className='text-blue-600' />
            <h4 className='text-xl font-semibold text-blue-950'>Expert guidance & personalized solutions</h4>
          </div>
          <p className='text-sm text-gray-600'>
            At Trunity, our team of experts offers personalized advice to help you navigate the insurance landscape.
          </p>
        </div>
        <div className="w-full bg-gray-300 h-[1px]"></div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <SearchCheck size={"24px"} className='text-blue-600' />
            <h4 className='text-xl font-semibold text-blue-950'>Transparent & cost-free service</h4>
          </div>
          <p className='text-sm text-gray-600'>
            We pride ourselves on transparency and honesty. Our services are completely free, with no hidden fees or surprices.
          </p>
        </div>
        <button className="py-2 px-4 rounded-xl bg-blue-600 text-white text-sm w-fit font-semibold">Explore more</button>
      </div>
    </div>
  )
}

export default Resources
