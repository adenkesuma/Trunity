"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Apa saja jenis asuransi yang ditawarkan oleh agen asuransi Anda?",
      answer: "Kami menawarkan berbagai jenis asuransi termasuk asuransi kesehatan, asuransi jiwa, asuransi properti, asuransi kendaraan, asuransi perjalanan, dan asuransi bisnis. Setiap produk dirancang untuk memberikan perlindungan komprehensif sesuai kebutuhan Anda."
    },
    {
      id: 2,
      question: "Bagaimana cara mengajukan klaim asuransi?",
      answer: "Untuk mengajukan klaim, Anda dapat menghubungi agen kami melalui telepon, email, atau datang langsung ke kantor. Kami akan memandu Anda melalui proses pengajuan klaim dan memastikan semua dokumen yang diperlukan terpenuhi untuk proses yang cepat dan efisien."
    },
    {
      id: 3,
      question: "Apakah premi asuransi bisa dibayar secara cicilan?",
      answer: "Ya, kami menawarkan opsi pembayaran premi secara berkala (bulanan, kuartalan, atau tahunan) sesuai dengan kenyamanan Anda. Silakan berkonsultasi dengan agen kami untuk mengetahui opsi pembayaran yang tersedia untuk produk asuransi pilihan Anda."
    },
    {
      id: 4,
      question: "Apa yang membedakan agen asuransi Anda dengan yang lain?",
      answer: "Kami memiliki pengalaman lebih dari 15 tahun dalam industri asuransi, menawarkan produk dari berbagai perusahaan asuransi terkemuka, memberikan layanan konsultasi gratis, dan memiliki tim claims assistance yang siap membantu 24/7. Komitmen kami adalah memberikan perlindungan terbaik dengan nilai optimal."
    },
    {
      id: 5,
      question: "Bagaimana jika saya ingin mengubah cakupan polis asuransi?",
      answer: "Anda dapat mengubah cakupan polis kapan saja dengan menghubungi agen kami. Kami akan meninjajui polis Anda dan merekomendasikan penyesuaian yang sesuai dengan kebutuhan terkini. Perubahan mungkin akan mempengaruhi premi yang harus dibayar."
    },
    {
      id: 6,
      question: "Apakah ada masa tenggang untuk pembayaran premi?",
      answer: "Ya, biasanya terdapat masa tenggang 30 hari untuk pembayaran premi setelah tanggal jatuh tempo. Selama masa ini, polis tetap aktif dan klaim masih dapat diajukan. Namun, kami sarankan untuk membayar tepat waktu untuk menghindari risiko polis menjadi tidak aktif."
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-5xl font-bold text-center mb-8 text-blue-950 font-sans tracking-tight">
        Pertanyaan Umum tentang Layanan Asuransi Kami
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={faq.id} className="border border-gray-100 rounded-2xl bg-gray-100">
            <button
              className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-2xl"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="h-7 w-7 text-blue-600" />
              ) : (
                <ChevronDown className="h-7 w-7 text-blue-600" />
              )}
            </button>
            <div
              id={`faq-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              aria-hidden={activeIndex !== index}
            >
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
