import { Metadata } from 'next';
import { nekowawolfMetadata } from '@/constants/metadataTemplates';
import { ECOSYSTEM_DESCRIPTION, pageSchema } from '@/constants/seo';

export const metadata: Metadata = nekowawolfMetadata(
  'Ecosystem',
  ECOSYSTEM_DESCRIPTION,
  '/ecosystem'
);

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(pageSchema('/ecosystem', 'Nww Ecosystem', ECOSYSTEM_DESCRIPTION)).replace(/</g, '\\u003c'),
    }} />
    {children}
  </>;
}
