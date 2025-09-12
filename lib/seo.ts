export const generateSeoConfig = (pageData: {
  title?: string;
  description?: string;
  slug: string;
  image?: string;
} = {
  slug: ''
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.truityinsurance.com';
  
  return {
    title: pageData.title || 'TRUITY Agency Insurance - One Stop Insurance Solution',
    description: pageData.description || 'Solusi asuransi lengkap untuk perlindungan finansial keluarga dan bisnis Anda.',
    openGraph: {
      title: pageData.title || 'TRUITY Agency Insurance',
      description: pageData.description || 'Solusi asuransi lengkap untuk perlindungan finansial keluarga dan bisnis Anda.',
      url: `${baseUrl}/${pageData.slug}`,
      images: [
        {
          url: pageData.image || `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'TRUITY Agency Insurance',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title || 'TRUITY Agency Insurance',
      description: pageData.description || 'Solusi asuransi lengkap untuk perlindungan finansial keluarga dan bisnis Anda.',
      images: [pageData.image || `${baseUrl}/twitter-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${pageData.slug}`,
    },
  };
};
