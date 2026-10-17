import Home from '@/components/Home';
import { nekowawolfMetadata } from '@/constants/metadataTemplates';
import { HOME_DESCRIPTION, pageSchema } from '@/constants/seo';

export const metadata = nekowawolfMetadata('Home', HOME_DESCRIPTION, '/');

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(pageSchema('/', 'nekowawolf - Fullstack Developer', HOME_DESCRIPTION)).replace(/</g, '\\u003c'),
      }} />
      <Home />
    </>
  );
}