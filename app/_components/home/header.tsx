import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <h1 className='text-blue-950 text-6xl font-bold font-sans'>Mitra Eksklusif Perlindungan dan Pertumbuhan Aset Anda</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600' size={'18px'} />
              <span className='text-gray-700 text-sm font-semibold'>Amankan Nilai Aset</span>
          </div>
          <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600' size={'18px'} />
              <span className='text-gray-700 text-sm font-semibold'>Genjot Pertumbuhan</span>
          </div>
          <div className="flex items-center gap-2">
              <CircleCheckBig className='text-blue-600' size={'18px'} />
              <span className='text-gray-700 text-sm font-semibold'>Wariskan Kekayaan</span>
          </div>
        </div>
        <p className='text-sm font-normal text-gray-600'>Dipimpin oleh Financial Advisor Berprestasi 7x MDRT Award-Winner dan 1X COT. 18+ Tahun mendedikasikan expertise untuk merancang strategi finansial yang tak hanya melindungi, tapi juga mewariskan kekayaan.</p>
        <a href="#" target='_blank' className='py-2 px-3 rounded-xl bg-blue-600 text-white text-sm w-fit font-semibold'>
          Ngobrol Bareng Founder
        </a>

        <div className="flex items-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <h2 className='text-5xl text-blue-950 font-bold'>100+</h2>
            <span className='text-sm text-gray-500'>Klien Terlindungi & <br /> Tercapai Goals Financialnya</span>
          </div>
          <div className="flex items-center gap-2">
            <h2 className='text-5xl text-blue-950 font-bold'>18+</h2>
            <span className='text-sm text-gray-500'>Tahun Expertise di Dunia <br /> Perbankan & Asuransi</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
