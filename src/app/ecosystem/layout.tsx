import { Metadata } from 'next';
import { nekowawolfMetadata } from '@/constants/metadataTemplates';

export const metadata: Metadata = nekowawolfMetadata(
  'Ecosystem',
  'Welcome to the Nww Ecosystem. A curated directory of platforms, tools, and resources.'
);

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
