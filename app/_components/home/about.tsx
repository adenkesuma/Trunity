import React from "react";
import { Timeline } from "./../timeline";
import Image from "next/image";
import About1 from '@/public/assets/about.jpg';
import About2 from "@/public/assets/about-2.jpg";
import Visi1 from "@/public/assets/visi.jpg"
import Visi2 from "@/public/assets/visi-2.jpg"

export function About() {
  const data = [
    {
      title: "Tentang Trunity",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Kami adalah agency yang berkomitmen menumbuhkan kepemimpinan, kolaborasi dan solidaritas serta memasterkan setiap potensial menciptakan pemimpin-pemimpin baru untuk meraih kesuksesan tanpa batas bersama 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={About1}
              alt="startup template"
              width={500}
              height={500}
              className="border-8 rounded-xl border-white/30 h-32 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72 lg:h-96"
            />
            <Image
              src={About2}
              alt="startup template"
              width={500}
              height={500}
              className="border-8 rounded-xl border-white/30 h-32 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72 lg:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Visi Trunity",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base dark:text-neutral-200">
            Menjadi perusahaan agency terpercaya dengan memberikan solusi dan pelayanan terbaik kepada nasabah, serta menciptakan ekosistem kerja yang mendorong pertumbuhan tanpa batas.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Visi1}
              alt="startup template"
              width={500}
              height={500}
              className="border-8 rounded-xl border-white/30 h-32 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72 lg:h-96"
            />
            <Image
              src={Visi2}
              alt="startup template"
              width={500}
              height={500}
              className="border-8 rounded-xl border-white/30 h-32 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-72 lg:h-96"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Misi Trunity",
      content: (
        <div>
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="text-3xl font-bold text-white">1.</div>
              <div className="flex flex-col pl-2">
                <span className="text-lg font-semibold text-white">Mendorong Pertumbuhan Agen</span>
                <span className="text-sm font-regular text-gray-300">Menciptakan lingkungan yang mendukung pertumbuhan agen melalui pelatihan, mentoring, dan sistem yang terbukti efektif.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="text-3xl font-bold text-white">2.</div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">Membangun Komunitas Yang Solid</span>
                <span className="text-sm font-regular text-gray-300">Menumbuhkan budaya kerja yang kolaboratif, saling mendukung, dan berbagi pengalaman demi pertumbuhan bersama.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="text-3xl font-bold text-white">3.</div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">Meningkatkan Kesejahteraan Agen</span>
                <span className="text-sm font-regular text-gray-300">Memberikan peluang karier dengan insentif yang menarik, serta jenjang karier yang jelas untuk kesejahteraan jangka panjang.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="text-3xl font-bold text-white">4.</div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">Apresiasi Kepada Team</span>
                <span className="text-sm font-regular text-gray-300">Memberikan berbagai bentuk penghargaan, baik secara finansial maupun non-finansial, sebagai bentuk apresiasi atas prestasi agen dan leader.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="text-3xl font-bold text-white">5.</div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">Memberikan Pelayanan Terbaik</span>
                <span className="text-sm font-regular text-gray-300">Melayani dengan sepenuh hati dengan memberikan pelayanan cepat dan akurat.</span>
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
