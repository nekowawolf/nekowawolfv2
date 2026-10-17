import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next'; 
import { HOME_DESCRIPTION, SITE_URL } from '@/constants/seo';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'nekowawolf - Fullstack Developer',
  description: HOME_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function() {
            if (localStorage.getItem("darkmode") === "active") {
              document.documentElement.classList.add("darkmode");
            }
          })();`
        }} />
      </head>
      <body className="body-color">
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'nekowawolf', publisher: { '@id': `${SITE_URL}/#person` } },
              { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: 'nekowawolf', url: `${SITE_URL}/`, jobTitle: 'Fullstack Developer and Graphic Designer', sameAs: ['https://github.com/nekowawolf', 'https://x.com/nwwonee'] },
            ],
          }).replace(/</g, '\\u003c'),
        }} />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}