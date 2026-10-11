import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next'; 
import { nekowawolfMetadata } from '@/constants/metadataTemplates';

export const metadata: Metadata = {
  ...nekowawolfMetadata('Home', 'Fullstack Developer'),
  metadataBase: new URL('https://nekowawolf.xyz/'),
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
    <html lang="en">
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
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}