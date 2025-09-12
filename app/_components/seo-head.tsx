// app/components/ServerSeoHead.tsx
import { Metadata } from 'next';

interface ServerSeoHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  article?: boolean;
  pathname?: string;
}

export default function ServerSeoHead({ 
  title, 
  description, 
  canonical, 
  image, 
  article = false,
  pathname = '' 
}: ServerSeoHeadProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.truity.com';
  const url = canonical || `${baseUrl}${pathname}`;
  const ogImage = image || `${baseUrl}/og-image.jpg`;

  return (
    <>
      <title>{title || 'TRUITY Agency Insurance - One Stop Insurance Solution'}</title>
      <meta name="description" content={description || 'Solusi asuransi lengkap untuk perlindungan finansial keluarga dan bisnis Anda.'} />
      <meta name="keywords" content="asuransi, insurance agency, asuransi jiwa, asuransi kesehatan, asuransi properti, asuransi kendaraan, financial planning, TRUITY" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || 'TRUITY Agency Insurance - One Stop Insurance Solution'} />
      <meta property="og:description" content={description || 'Solusi asuransi lengkap untuk perlindungan finansial keluarga dan bisnis Anda.'} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="TRUITY Agency Insurance" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'TRUITY Agency Insurance - One Stop Insurance Solution'} />
      <meta name="twitter:description" content={description || 'Solusi asuransi lengkap untuk perlindungan finansial keluarga dan bisnis Anda.'} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}
