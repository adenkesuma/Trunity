"use client";

import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";

export function Services() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={false} />
  ));

  return (
    <div id="services" className="bg-gray-100">
      <div className="container mx-auto w-full h-full py-10 px-4 sm:px-0">
        <h2 className="mx-auto text-3xl md:text-5xl font-bold text-blue-950 font-sans text-center">
          Layanan Kami
        </h2>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
          Temukan berbagai layanan asuransi kami yang dapat disesuaikan dengan kebutuhan Anda
        </p>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const data = [
  {
    category: "AXA Critical Protector",
    title: "Asuransi Penyakit Kritis",
    src: "/assets/pdf/AXA Critical Protector.pdf",
  },
  {
    category: "AXA Long Term Life Protector",
    title: "Solusi proteksi jiwa yang bikin hidup makin tenang",
    src: "/assets/pdf/AXA Long Term Life Protector_All Plan_02Des2024.pdf",
  },
  {
    category: "Axa Smart Edu Protector",
    title: "Produk asuransi jiwa dwiguna yang memberikan solusi persiapan dana pendidikan buah hati sekaligus proteksi jiwa anda.",
    src: "/assets/pdf/AXA Smart Edu Protector_291024.pdf",
  },
  {
    category: "AXA Wealth Protector",
    title: "suransi Jiwa Dwiguna Kombinasi simple & hebat",
    src: "/assets/pdf/AXA Wealth Protector Des2023.pdf",
  },
  {
    category: "AXA Future Protector",
    title: "Perlindungan jiwa yang dirancang dengan sentuhan inovasi dan kebebasan memilih cara melindungi mereka yang paling anda cintai.",
    src: "/assets/pdf/Brosur_AXA Future Protector_120925.pdf",
  },
  {
    category: "Maestro Infinite Protection",
    title: "Asuransi jiwa komprehensif untuk kesejahteraan orang-orang tercina.",
    src: "/assets/pdf/Brosur AXA Infinite Protection Update2023.pdf",
  },
  {
    category: "AXA Link Protector",
    title: "Melengkapi perlindungan jiwa unit link dengan manfaat perlindungan yang lengkap dan manfaat bonus dana investasi untuk keberlangsungan proteksi.",
    src: "/assets/pdf/Brosur AXA Link Protector (1).pdf",
  },
  {
    category: "Maestro Optima Care",
    title: "Asuransi kesehatan komprehensif yang memberikan perlindungan yang terbaik bagi anda dan keluarga tercinta.",
    src: "/assets/pdf/Maestro Optima Care Revamp - Agustus 2025 (2).pdf",
  },
  {
    category: "Maestro Prestige Link",
    title: "Produk asuransi jiwa dan investasi yang memberikan perindungan sekaligus mengembangkan dana anda.",
    src: "/assets/pdf/Maestro Prestige Link.pdf",
  },
  {
    category: "AXA Health Protector",
    title: "AXA Health Protector adalah produk asuransi kesehatan perorangan yang memberikan manfaat utama berupa manfaat rawat inap dan pembedahan, manfaat rawat jalan, serta manfaat tambahan lainnya",
    src: "/assets/pdf/RIPLAY versi Umum AXA Health Protector 2.8_10 plan_.pdf",
  },
];
