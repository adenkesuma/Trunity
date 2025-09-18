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
    default: "TRUITY Agency Insurance - Solusi Asuransi Terlengkap di Medan",
    template: "%s | TRUITY Agency Insurance Medan"
  },
  description: "TRUITY Agency Insurance Medan menyediakan asuransi jiwa, kesehatan, properti, dan kendaraan terbaik. Perlindungan finansial keluarga & bisnis. Lokasi: Jl. T. Amir Hamzah No.9n, Medan. Telepon: +62 811-655-228",
  keywords: "asuransi medan, insurance agency medan, asuransi jiwa medan, asuransi kesehatan medan, trunity agency medan, asuransi properti medan, asuransi kendaraan medan, financial planning medan, agency asuransi terbaik medan, asuransi keluarga medan, asuransi bisnis medan",
  authors: [{ name: "TRUITY Agency Insurance" }],
  creator: "TRUITY Agency Insurance",
  publisher: "TRUITY Agency Insurance",
  metadataBase: new URL('https://www.trunityagency.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.trunityagency.com',
    siteName: 'TRUITY Agency Insurance Medan',
    title: 'TRUITY Agency Insurance - Solusi Asuransi Terlengkap di Medan',
    description: 'Agency asuransi terpercaya di Medan untuk asuransi jiwa, kesehatan, properti, dan kendaraan. Perlindungan finansial terbaik untuk keluarga dan bisnis Anda.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TRUITY Agency Insurance Medan - Solusi Asuransi Terlengkap',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@trunityagency',
    creator: '@trunityagency',
    title: 'TRUITY Agency Insurance - Solusi Asuransi Terlengkap di Medan',
    description: 'Agency asuransi terpercaya di Medan untuk perlindungan finansial keluarga dan bisnis Anda.',
    images: ['/twitter-image.jpg'],
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
    google: 'your-google-verification-code', // GANTI dengan kode verifikasi Anda
  },
  category: 'insurance',
  other: {
    'geo.placename': 'Medan, Sumatera Utara',
    'geo.region': 'ID-SU',
    'geo.position': '3.5952;98.6722',
    'ICBM': '3.5952, 98.6722'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`} // GANTI dengan ID Google Analytics Anda
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX'); // GANTI dengan ID Google Analytics Anda
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "name": "TRUITY Agency Insurance",
              "description": "Solusi Asuransi Terlengkap di Medan - Asuransi Jiwa, Kesehatan, Properti, dan Kendaraan",
              "url": "https://www.trunityagency.com",
              "telephone": "+62 811-655-228",
              "email": "info@trunityagency.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ruko Sentosaland, Jl. T. Amir Hamzah No.9n, Sei Agul",
                "addressLocality": "Medan",
                "addressRegion": "Sumatera Utara",
                "postalCode": "20235",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "3.5952",
                "longitude": "98.6722"
              },
              "openingHours": [
                "Mo-Fr 09:00-17:30",
                "Sa 09:00-14:00"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "17:30"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 3.5952,
                  "longitude": 98.6722
                },
                "geoRadius": 50000
              },
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/trunityagency",
                "https://www.facebook.com/trunityagency",
                "https://www.linkedin.com/company/trunityagency"
              ]
            })
          }}
        />
        
        {/* Additional Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TRUITY Agency Insurance",
              "image": "https://www.trunityagency.com/og-image.jpg",
              "telephone": "+62 811-655-228",
              "email": "info@trunityagency.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ruko Sentosaland, Jl. T. Amir Hamzah No.9n",
                "addressLocality": "Medan",
                "addressRegion": "Sumatera Utara",
                "postalCode": "20235",
                "addressCountry": "Indonesia"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "3.5952",
                "longitude": "98.6722"
              },
              "openingHours": "Mo-Fr 09:00-17:30, Sa 09:00-14:00",
              "priceRange": "$$"
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
