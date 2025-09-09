import React from 'react'
import { TextHoverEffect } from '../text-hover-effect'
import { Instagram, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <div className="bg-gradient-to-br py-10 from-blue-950 to-blue-700">
      <div className="container mx-auto">
        <TextHoverEffect text='Trunity' />
        <div className="flex items-center justify-between">
          <span className="text-white text-base">
            &copy; 2025 Copyright All Reserved Trunity Agency
          </span>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-white/20">
              <Instagram />
            </div>
            <div className="p-2 rounded-xl bg-white/20">
              <Mail /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
