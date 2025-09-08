import React from 'react'
import { BoxesCore } from '../background-boxes'
import { Lamp, MessageCircleMore, UserPlus } from 'lucide-react'

const StepByStep = () => {
  return (
    <div className="h-60 relative w-full overflow-hidden bg-blue-600 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-blue-600 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <BoxesCore />
      <div className="container mx-auto w-full flex items-center gap-10 justify-between">
        <div className="flex flex-col gap-1 items-center z-50">
          <UserPlus className='text-white mb-4' size={"40px"} />
          <p className='font-bold text-xl text-white'>Create an account</p>
          <span className='text-white'>You can easily create your account in our website</span>
        </div>
        <div className="flex flex-col gap-1 items-center z-50">
          <MessageCircleMore className='text-white mb-4' size={"40px"} />
          <p className='font-bold text-xl text-white'>Consulting with us</p>
          <span className='text-white'>You can select our campaign by your choice</span>
        </div>
        <div className="flex flex-col gap-1 items-center z-50">
          <Lamp className='text-white mb-4' size={"40px"} />
          <p className='font-bold text-xl text-white'>Get your solution</p>
          <span className='text-white'>After selecting your fund starting donating</span>
        </div>
      </div>
    </div>
  )
}

export default StepByStep
