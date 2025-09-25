import Image from "next/image";
import React from "react";
import MasterDay from "@/public/assets/about-2.jpg"
import { ArrowUpRight } from "lucide-react";

export function WhatWeDo() {
  return (
    <div id="activity" className="h-full py-14 md:py-20 w-full bg-gradient-to-bl from-blue-950 to-blue-600 mt-18">
      <h2 className="text-3xl md:text-5xl font-sans font-bold text-white text-center mb-4">Kegiatan Trunity Agency</h2>
      <p className="text-center text-blue-100 max-w-2xl mx-auto px-4 mb-10">Program-program berkualitas untuk membangun tim agen asuransi AXA yang profesional dan sukses</p>
      
      <div className="container mx-auto my-10 px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Trunity Fast-Track */}
        <div className="flex flex-col justify-between rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">BOOTCAMP INTENSIF</div>
            <h3 className="text-xl mb-3 font-bold text-gray-900">Trunity Fast-Track</h3>
            <p className="text-sm text-gray-700 mb-4">Program pelatihan intensif 2 hari yang dirancang khusus untuk mentransformasi agen baru menjadi profesional yang siap menghasilkan sejak hari pertama.</p>
            <div className="mt-2">
              <span className="text-sm font-semibold text-gray-900 mb-2 block">Materi Unggulan:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">Profil AXA & Trunity</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">Blueprint Sukses Agen</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">Fundamental Asuransi</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">Analisis Kebutuhan Klien</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">Presentasi Solusi</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">Closing Techniques</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">After Sales Excellence</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={MasterDay} alt="Trunity Fast-Track Training" className="h-72 object-cover rounded-b-2xl"/>
            <button className="flex items-center gap-2 py-2 px-4 rounded-xl absolute bottom-6 left-6 bg-white text-blue-800 font-semibold cursor-pointer hover:bg-blue-50 transition-colors shadow-md">
              <span>Lihat Video</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Master Day */}
        <div className="flex flex-col justify-between rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-xs font-semibold mb-3">SETIAP SENIN</div>
            <h3 className="text-xl mb-3 font-bold text-gray-900">Master Day</h3>
            <p className="text-sm text-gray-700 mb-4">Kickstart minggu Anda dengan energi positif! Sesi mingguan untuk mempertajam mindset, meningkatkan motivasi, dan berbagi strategi sukses terbaru.</p>
            <div className="mt-2">
              <span className="text-sm font-semibold text-gray-900 mb-2 block">Fokus Pembahasan:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">Mindset Juara</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">Boost Motivasi</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">Handling Objection</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">Sales Strategy</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">Expert Talkshow</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={MasterDay} alt="Master Day Session" className="h-72 object-cover rounded-b-2xl"/>
            <button className="flex items-center gap-2 py-2 px-4 rounded-xl absolute bottom-6 left-6 bg-white text-green-800 font-semibold cursor-pointer hover:bg-green-50 transition-colors shadow-md">
              <span>Lihat Video</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Potential Day */}
        <div className="flex flex-col justify-between rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-3">SETIAP RABU</div>
            <h3 className="text-xl mb-3 font-bold text-gray-900">Potential Day</h3>
            <p className="text-sm text-gray-700 mb-4">Deep dive session untuk menguasai produk AXA secara mendalam. Jadilah expert yang percaya diri dalam memberikan solusi terbaik untuk klien.</p>
            <div className="mt-2">
              <span className="text-sm font-semibold text-gray-900 mb-2 block">Konten Utama:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-purple-100 text-purple-800 border border-purple-200">Product Mastery</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-purple-100 text-purple-800 border border-purple-200">Case Study</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-purple-100 text-purple-800 border border-purple-200">Solution Design</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-purple-100 text-purple-800 border border-purple-200">Q&A Session</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={MasterDay} alt="Potential Day Workshop" className="h-72 object-cover rounded-b-2xl"/>
            <button className="flex items-center gap-2 py-2 px-4 rounded-xl absolute bottom-6 left-6 bg-white text-purple-800 font-semibold cursor-pointer hover:bg-purple-50 transition-colors shadow-md">
              <span>Lihat Video</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Unity Day */}
        <div className="flex flex-col justify-between rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold mb-3">BUILDING CONNECTION</div>
            <h3 className="text-xl mb-3 font-bold text-gray-900">Unity Day</h3>
            <p className="text-sm text-gray-700 mb-4">Bangun hubungan yang bermakna beyond business. Kegiatan kebersamaan yang memperkuat ikatan tim dan hubungan dengan nasabah.</p>
            <div className="mt-2">
              <span className="text-sm font-semibold text-gray-900 mb-2 block">Aktivitas Seru:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-orange-100 text-orange-800 border border-orange-200">Movie Night</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-orange-100 text-orange-800 border border-orange-200">Coffee Gathering</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-orange-100 text-orange-800 border border-orange-200">Health & Fun Run</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-orange-100 text-orange-800 border border-orange-200">Community Service</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-orange-100 text-orange-800 border border-orange-200">Networking Event</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={MasterDay} alt="Unity Day Activities" className="h-72 object-cover rounded-b-2xl"/>
            <button className="flex items-center gap-2 py-2 px-4 rounded-xl absolute bottom-6 left-6 bg-white text-orange-800 font-semibold cursor-pointer hover:bg-orange-50 transition-colors shadow-md">
              <span>Lihat Video</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* BOS & Gathering */}
        <div className="flex flex-col justify-between rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-xs font-semibold mb-3">SPECIAL EVENT</div>
            <h3 className="text-xl mb-3 font-bold text-gray-900">BOS & Gathering</h3>
            <p className="text-sm text-gray-700 mb-3"><strong>Business Optimization Session:</strong> Program pengembangan leadership dan advanced skills untuk agen dan leader berpengalaman.</p>
            <p className="text-sm text-gray-700 mb-4"><strong>Client Gathering:</strong> Acara eksklusif untuk edukasi nasabah tentang pentingnya proteksi dan manfaat produk AXA.</p>
            <div className="mt-2">
              <span className="text-sm font-semibold text-gray-900 mb-2 block">Highlight Acara:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200">Advanced Training</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200">Leadership Development</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200">Client Education</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200">Exclusive Benefits</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200">Industry Insights</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={MasterDay} alt="BOS & Gathering Events" className="h-72 object-cover rounded-b-2xl"/>
            <button className="flex items-center gap-2 py-2 px-4 rounded-xl absolute bottom-6 left-6 bg-white text-red-800 font-semibold cursor-pointer hover:bg-red-50 transition-colors shadow-md">
              <span>Lihat Video</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Mentoring 90 Days */}
        <div className="flex flex-col justify-between rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold mb-3">MENTORSHIP PROGRAM</div>
            <h3 className="text-xl mb-3 font-bold text-gray-900">Mentoring 90 Days</h3>
            <p className="text-sm text-gray-700 mb-4">Program pendampingan eksklusif selama 90 hari dimana para leader berpengalaman membimbing agen baru melalui 12 batch mentoring untuk memastikan kesuksesan berkelanjutan.</p>
            <div className="mt-2">
              <span className="text-sm font-semibold text-gray-900 mb-2 block">Program Intensif:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-teal-100 text-teal-800 border border-teal-200">Weekly Mentoring</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-teal-100 text-teal-800 border border-teal-200">Progress Monitoring</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-teal-100 text-teal-800 border border-teal-200">Personal Coaching</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-teal-100 text-teal-800 border border-teal-200">Performance Review</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-teal-100 text-teal-800 border border-teal-200">Success Roadmap</span>
                <span className="py-1 px-3 text-xs font-medium rounded-full bg-teal-100 text-teal-800 border border-teal-200">Accountability Partner</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={MasterDay} alt="90 Days Mentoring Program" className="h-72 object-cover rounded-b-2xl"/>
            <button className="flex items-center gap-2 py-2 px-4 rounded-xl absolute bottom-6 left-6 bg-white text-teal-800 font-semibold cursor-pointer hover:bg-teal-50 transition-colors shadow-md">
              <span>Lihat Video</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
