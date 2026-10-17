import { Metadata } from 'next';
import { OG_IMAGE, SITE_URL } from './seo';

export const nekowawolfMetadata = (title: string, description: string, path: string, withImage: boolean = true): Metadata => {
  const pageTitle = title === "Home" ? "nekowawolf - Fullstack Developer" : `nekowawolf | ${title}`;
  
  return {
    title: pageTitle,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      url: `${SITE_URL}${path}`,
      title: pageTitle,
      description,
      siteName: 'nekowawolf',
      ...(withImage && {
        images: [
          {
            url: OG_IMAGE,
            width: 3600,
            height: 1890,
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
        images: [OG_IMAGE],
      }),
    },
  };
};