import { Metadata } from 'next';
import { nekowawolfMetadata } from '@/constants/metadataTemplates';

export const metadata: Metadata = nekowawolfMetadata(
  'Ecosystem',
  "Welcome to the Nww Ecosystem. Here you'll find platforms, tools, resources, creators, and communities designed to help you navigate, discover, and build in the ever-evolving digital landscape."
);

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
