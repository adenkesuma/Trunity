import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TRUITY Agency Insurance - One Stop Insurance Solution",
    template: "%s | TRUITY Agency Insurance"
  },
  description: "TRUITY Agency Insurance menyediakan solusi asuransi lengkap untuk perlindungan finansial keluarga dan bisnis Anda. Asuransi Jiwa, Kesehatan, Properti, dan Kendaraan.",
  keywords: "asuransi, insurance agency, asuransi jiwa, asuransi kesehatan, agency asuransi medan, trunity agency asuransi medan, asuransi properti, asuransi kendaraan, financial planning, TRUITY, Trunity Agency, Trunity agency medan, Trunity Medan, Agency Asuransi Medan, Trunity agency medan terbaik",
  authors: [{ name: "TRUITY Agency Insurance" }],
  creator: "TRUITY Agency Insurance",
  publisher: "TRUITY Agency Insurance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.truity.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.truity.com',
    siteName: 'TRUITY Agency Insurance',
    title: 'TRUITY Agency Insurance - One Stop Insurance Solution',
    description: 'Solusi asuransi lengkap untuk perlindungan finansial keluarga dan bisnis Anda.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TRUITY Agency Insurance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRUITY Agency Insurance - One Stop Insurance Solution',
    description: 'Solusi asuransi lengkap untuk perlindungan finansial keluarga dan bisnis Anda.',
    images: ['/twitter-image.jpg'],
    creator: '@truityinsurance',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "name": "TRUITY Agency Insurance",
              "description": "One Stop Solution for Insurance & Financial Growth",
              "url": "https://www.truity.com",
              "telephone": "+62 811-655-228",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ruko Sentosaland, Jl. T. Amir Hamzah No.9n, Sei Agul, Kec. Medan Bar, Kota Medan, Sumatera Utara 20235",
                "addressLocality": "Medan",
                "addressRegion": "Sumatera Utara",
                "postalCode": "20235"
              },
              "openingHours": "Mo-Fr 09:00-17:30",
              "serviceArea": "Indonesia"
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
