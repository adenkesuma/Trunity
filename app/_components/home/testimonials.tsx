"use client";
 
import { InfiniteMovingCards } from "./../infinite-moving-cards";
 
export function Testimonials() {
  return (
    <div id="testimonials" className="bg-gradient-to-bl from-blue-900 to-blue-600 py-6">
      <div className="container mx-auto my-10 px-4 sm:px-0">
        <div className="flex flex-col items-center gap-2 mb-4">
          <h2 className="text-3xl relative z-20 md:text-5xl font-bold text-left text-white font-sans tracking-tight">
            Testimonials
          </h2>
          <p className="text-center text-sm text-gray-300">Dengar langsung dari mereka yang telah merasakan manfaat dan hasilnya. Setiap cerita adalah bukti nyata komitmen kami.</p>
        </div>
      </div>
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Saya bergabung di industri asuransi dan berhasil mencapai banyak penghargaan. Perjalanan ini membuktikan bahwa dengan konsistensi dan sistem yang tepat, peluang sukses terbuka lebar.",
    name: "Cindy Veronica",
    title: "Agen Asuransi Berprestasi",
  },
  {
    quote: "Sebagai ibu rumah tangga, saya awalnya ragu apakah bisa sukses di bidang asuransi. Namun berkat bimbingan dan sistem yang tepat, saya berhasil mencapai banyak penghargaan dan membantu banyak keluarga terlindungi.",
    name: "Veronica",
    title: "Agen Asuransi Berprestasi",
  },
  {
    quote: "Awalnya saya hanya karyawan perbankan biasa, namun setelah mencoba di dunia asuransi, saya mampu meraih banyak penghargaan dan prestasi yang tidak saya bayangkan sebelumnya.",
    name: "Sanny Wijaya",
    title: "Agen Asuransi",
  },
  {
    quote: "Sebagai seorang karyawan perbankan, saya ingin punya sumber income tambahan. Ternyata asuransi membuka jalan saya untuk sukses, bukan hanya dari sisi finansial tapi juga pengalaman hidup.",
    name: "Hendrik",
    title: "Agen Asuransi",
  },
  {
    quote: "Saya seorang ibu rumah tangga yang langsung closing setelah ikut fast-track 2 hari. Program Trunity membuat saya siap terjun jadi agen asuransi profesional dalam waktu singkat.",
    name: "Teacher Kusuma",
    title: "Agen Asuransi",
  },
  {
    quote: "Saya baru bergabung di dunia asuransi, dan langsung berhasil closing di bulan pertama. Kesempatan ini membuktikan bahwa siapa pun bisa sukses jika mengikuti sistem yang benar.",
    name: "Christina",
    title: "Agen Asuransi",
  },
];
