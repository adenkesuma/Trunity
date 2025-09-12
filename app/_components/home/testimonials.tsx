"use client";
 
import { InfiniteMovingCards } from "./../infinite-moving-cards";
 
export function Testimonials() {
  return (
    <div className="bg-gradient-to-bl from-blue-900 to-blue-600 py-6">
      <div className="container mx-auto my-20">
        <div className="flex flex-col items-center gap-2 mb-4">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-5xl font-bold text-left text-white font-sans tracking-tight">
            Testimonials
          </h2>
          <p className="text-sm text-gray-300">Dengar langsung dari mereka yang telah merasakan manfaat dan hasilnya. Setiap cerita adalah bukti nyata komitmen kami.</p>
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
    quote: "Waktu mobil saya tabrakan, saya sempat panik. Tapi proses klaimnya jauh lebih cepat dan mudah dari yang saya bayangkan. Dalam 3 hari semua sudah beres, dan saya bisa pakai mobil lagi. Terima kasih untuk agen yang sangat membantu.",
    name: "Budi Santoso",
    title: "Nasabah Asuransi Kendaraan",
  },
  {
    quote: "Awalnya ragu mau beli asuransi kesehatan, tapi ternyata sangat membantu saat anak saya dirawat di rumah sakit. Tidak perlu pusing urus administrasi atau biaya, fokus saja pada kesembuhan anak.",
    name: "Siti Aisyah",
    title: "Ibu Rumah Tangga",
  },
  {
    quote: "Sebagai freelancer, saya tidak punya jaminan kesehatan dari perusahaan. Asuransi ini pilihan yang tepat untuk melindungi income saya. Klaim rawat jalan pun prosesnya mudah lewat aplikasi.",
    name: "Ahmad Rizky",
    title: "Desainer Grafis",
  },
  {
    quote: "Kebakaran di rumah tetangga membuat saya sadar akan pentingnya asuransi properti. Alhamdulillah, saya sudah terlindungi. Proses survey kerusakan dan pencairan klaimnya transparan dan adil.",
    name: "Dewi Lestari",
    title: "Pemilik Toko",
  },
  {
    quote: "Kecelakaan di jalan tol bikin rugi banyak kalau tidak ada asuransi. Penggantian kerugian untuk pihak ketiga dan perbaikan mobil sendiri berjalan lancar. Hanya perlu telepon satu kali, sisanya dihandle sampai selesai.",
    name: "Joko Wijaya",
    title: "Karyawan Swasta",
  }
];
