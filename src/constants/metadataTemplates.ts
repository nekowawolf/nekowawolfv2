import { Metadata } from 'next';

export const nekowawolfMetadata = (title: string, description: string, withImage: boolean = true): Metadata => {
  const pageTitle = title === "Home" ? "nekowawolf - Fullstack Developer" : `nekowawolf | ${title}`;
  
  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      siteName: 'nekowawolf',
      ...(withImage && {
        images: [
          {
            url: '/img/OG.webp',
            width: 1200,
            height: 630,
            alt: pageTitle,
          },
        ],
      }),
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      ...(withImage && {
        images: ['/img/OG.webp'],
      }),
    },
  };
};