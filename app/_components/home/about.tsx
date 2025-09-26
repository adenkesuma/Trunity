import React from "react";
import { Timeline } from "./../timeline";
import Image from "next/image";
import AboutAsset from "@/public/assets/about-2.jpg";
import Visi from "@/public/assets/vision.jpg"
import { Quote } from "lucide-react";

export function About() {
  const data = [
    {
      title: "Tentang Trunity Agency",
      content: (
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 bg-white p-6 rounded-3xl">
          <div className="w-full lg:w-1/2">
            {/* <Image
              src={About1}
              alt="startup template"
              width={500}
              height={500}
              className="border-8 rounded-xl border-white/30 h-40 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72 lg:h-96"
            /> */}
            <Image
              src={AboutAsset}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-xl h-40 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72 lg:h-96"
            />
          </div>
          <p className="w-full lg:w-1/2 text-lg lg:text-2xl font-normal text-gray-800">
            <Quote className="mb-3 rotate-180 text-gray-400" />
            Kami adalah agency yang berkomitmen menumbuhkan kepemimpinan, kolaborasi dan solidaritas serta memasterkan setiap potensial team yang bergabung dengan kami 
            <Quote className="mt-3 text-gray-400" />
          </p>
        </div>
      ),
    },
    {
      title: "Visi Trunity Agency",
      content: (
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 bg-white p-6 rounded-3xl">
          <div className="w-full lg:w-1/2">
            <Image
              src={Visi}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-xl h-40 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72 lg:h-96"
            />
            {/* <Image
              src={Visi2}
              alt="startup template"
              width={500}
              height={500}
              className="border-8 rounded-xl border-white/30 h-40 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72 lg:h-96"
            /> */}
          </div>
          <p className="w-full lg:w-1/2 text-lg lg:text-2xl font-normal text-gray-800">
            <Quote className="mb-3 rotate-180 text-gray-400" />
            Menjadi perusahaan agency terpercaya dengan memberikan solusi dan pelayanan terbaik kepada nasabah, serta menciptakan ekosistem kerja yang mendorong pertumbuhan tanpa batas.
            <Quote className="mt-3 text-gray-400" />
          </p>
        </div>
      ),
    },
    {
      title: "Misi Trunity Agency",
      content: (
        <div>
          <div className="mb-8 flex flex-col gap-4 bg-white p-8 rounded-3xl">
            <div className="flex items-start gap-2 text-xs text-gray-800">
              <div className="text-xl lg:text-2xl font-bold text-gray-800">1.</div>
              <div className="flex flex-col pl-2">
                <span className="text-lg lg:text-xl font-semibold text-gray-800">Mendorong Pertumbuhan Agen</span>
                <span className="text-base font-regular text-gray-600">Menciptakan lingkungan yang mendukung pertumbuhan agen melalui pelatihan, mentoring, dan sistem yang terbukti efektif.</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-800">
              <div className="text-xl lg:text-2xl font-bold text-gray-800">2.</div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-semibold text-gray-800">Membangun Komunitas Yang Solid</span>
                <span className="text-base font-regular text-gray-600">Menumbuhkan budaya kerja yang kolaboratif, saling mendukung, dan berbagi pengalaman demi pertumbuhan bersama.</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-800">
              <div className="text-xl lg:text-2xl font-bold text-gray-800">3.</div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-semibold text-gray-800">Meningkatkan Kesejahteraan Agen</span>
                <span className="text-base font-regular text-gray-600">Memberikan peluang karier dengan insentif yang menarik, serta jenjang karier yang jelas untuk kesejahteraan jangka panjang.</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-800">
              <div className="text-xl lg:text-2xl font-bold text-gray-800">4.</div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-semibold text-gray-800">Apresiasi Kepada Team</span>
                <span className="text-base font-regular text-gray-600">Memberikan berbagai bentuk penghargaan, baik secara finansial maupun non-finansial, sebagai bentuk apresiasi atas prestasi agen dan leader.</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-800">
              <div className="text-xl lg:text-2xl font-bold text-gray-800">5.</div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-semibold text-gray-800">Memberikan Pelayanan Terbaik</span>
                <span className="text-base font-regular text-gray-600">Melayani dengan sepenuh hati dengan memberikan pelayanan cepat dan akurat.</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="about" className="relative w-full overflow-clip bg-gradient-to-tl from-blue-950 to-blue-600">
      <Timeline data={data} />
    </div>
  );
}
