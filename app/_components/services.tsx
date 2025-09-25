"use client";

import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";
import { ShieldCheck, ShieldUser, Sprout } from "lucide-react";

export function Services() {
  const produkUnitlink = produk_unitlink.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={false} />
  ));

  const produkTradisional = produk_tradisional.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={false} />
  ));

  const produkKesehatan = produk_kesehatan.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={false} />
  ));

  return (
    <div id="services" className="bg-gray-100">
      <div className="container mx-auto w-full h-full py-10 px-4 sm:px-0">
        <h2 className="mx-auto text-3xl md:text-5xl font-bold text-blue-950 font-sans text-left">
          Layanan Kami
        </h2>
        <p className="text-left text-gray-600 mt-2">
          Temukan berbagai layanan asuransi kami yang dapat disesuaikan dengan kebutuhan Anda
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-blue-800 p-2 rounded-full">
              <ShieldUser className="text-white font-normal" size={"26px"}/>
            </div>
            <span>Produk Tradisional</span>
          </h2>
          <Carousel items={produkTradisional} />
        </div>

        <div className="border-t pt-8 mt-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-blue-800 p-2 rounded-full">
              <ShieldCheck className="text-white font-normal" size={"26px"}/>
            </div>
            <span>Produk Kesehatan</span>
          </h2>
          <Carousel items={produkKesehatan} />
        </div>

        <div className="border-t pt-8 mt-8">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-blue-800 p-2 rounded-full">
              <Sprout className="text-white font-normal" size={"26px"}/>
            </div>
            <span>Produk Unitlink</span>
          </h2>
          <Carousel items={produkUnitlink} />
        </div>
      </div>
    </div>
  );
}

const produk_unitlink = [ 
  {
    category: "Maestro Prestige Link",
    title: "Produk asuransi jiwa dan investasi yang memberikan perindungan sekaligus mengembangkan dana anda.",
    src: "/pdf/Maestro Prestige Link.pdf",
    thumbnail: "/assets/thumbnail-pdf/9.png"
  },
  {
    category: "AXA Link Protector - Premier",
    title: "AXA Link Protector, solusi perlindungan jiwa unit link yang akan memberikan manfaat perlindungan yang lengkap dan manfaat bonus dana investasi yang dapat membantu Anda untuk keberlangsungan proteksi yang Anda miliki.",
    src: "/pdf/axa-link-protector.pdf",
    thumbnail: "/assets/thumbnail-pdf/14.png"
  },
  {
    category: "AXA Link Protector - Executive",
    title: "AXA Link Protector, solusi perlindungan jiwa unit link yang akan memberikan manfaat perlindungan yang lengkap dan manfaat bonus dana investasi yang dapat membantu Anda untuk keberlangsungan proteksi yang Anda miliki.",
    src: "/pdf/axa-link-protector.pdf",
    thumbnail: "/assets/thumbnail-pdf/14.png"
  },
]

const produk_kesehatan = [
  {
    category: "AXA Health Protector",
    title: "axa health protector adalah produk asuransi kesehatan rawat inap dan pembedahan, manfaat rawat jalan, serta manfaat tambahan lainnya",
    src: "/pdf/axa-health-protector.pdf",
    thumbnail: "/assets/thumbnail-pdf/12.png"
  },
  {
    category: "Maestro Optima Care",
    title: "Asuransi kesehatan komprehensif yang memberikan perlindungan yang terbaik bagi anda dan keluarga tercinta.",
    src: "/pdf/Maestro Optima Care Revamp - Agustus 2025 (2).pdf",
    thumbnail: "/assets/thumbnail-pdf/8.png"
  },
  {
    category: "AXA Critical Elite Protector",
    title: "AXA Critical Elite Solution hadir memberikan kemudahan dengan masa pembayaran premi selama 5 tahun pertama, pengembalian premi pada akhir tahun ke 10 dengan 15 tahun masa perlindungan atas penyakit kritis",
    src: "/pdf/axa-critical-elite-solution.pdf",
    thumbnail: "/assets/thumbnail-pdf/13.png"
  },
  {
    category: "AXA Critical Protector",
    title: "AXA Critical Protector yang memberikan proteksi menyeluruh untuk manfaat Penyakit Kritis di segala tahapan mulai dari Penyakit Kritis Tahap Awal, Tahap Menengah dan Tahap Akhir",
    src: "/pdf/axa critical protector.pdf",
    thumbnail: "/assets/thumbnail-pdf/1.png"
  },
]

const produk_tradisional = [
  {
    category: "AXA Future Protector",
    title: "Perlindungan jiwa yang dirancang dengan sentuhan inovasi dan kebebasan memilih cara melindungi mereka yang paling anda cintai.",
    src: "/pdf/Brosur_AXA Future Protector_120925.pdf",
    thumbnail: "/assets/thumbnail-pdf/5.png"
  },
  {
    category: "AXA Long Term Life Protector",
    title: "Solusi proteksi jiwa yang bikin hidup makin tenang",
    src: "/pdf/AXA Long Term Life Protector_All Plan_02Des2024.pdf",
    thumbnail: "/assets/thumbnail-pdf/2.png"
  },
  {
    category: "Axa Smart Edu Protector",
    title: "Produk asuransi jiwa dwiguna yang memberikan solusi persiapan dana pendidikan buah hati sekaligus proteksi jiwa anda.",
    src: "/pdf/AXA Smart Edu Protector_291024.pdf",
    thumbnail: "/assets/thumbnail-pdf/3.png"
  },
  {
    category: "Axa Term Protector",
    title: "Produk AXA Term Protector merupakan solusi perlindungan jiwa berjangka yang memberikan manfaat meninggal dunia.",
    src: "/pdf/axa-term-protector.pdf",
    thumbnail: "/assets/thumbnail-pdf/11.png"
  },
  {
    category: "AXA Wealth Protector",
    title: "suransi Jiwa Dwiguna Kombinasi simple & hebat",
    src: "/pdf/AXA Wealth Protector Des2023.pdf",
    thumbnail: "/assets/thumbnail-pdf/4.png"
  },
  {
    category: "Maestro Infinite Protection",
    title: "Asuransi jiwa komprehensif untuk kesejahteraan orang-orang tercina.",
    src: "/pdf/Brosur AXA Infinite Protection Update2023.pdf",
    thumbnail: "/assets/thumbnail-pdf/6.png"
  },
]
