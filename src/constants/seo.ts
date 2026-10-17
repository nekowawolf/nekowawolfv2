export const SITE_URL = 'https://www.nekowawolf.xyz';
export const OG_IMAGE = `${SITE_URL}/img/OG.webp`;
export const HOME_DESCRIPTION = 'Explore the Nww Ecosystem by nekowawolf: curated AI tools, Web3 resources, GitHub repositories, airdrops, creators, and online communities.';
export const ECOSYSTEM_DESCRIPTION = 'Explore the Nww Ecosystem: AI tools, Web3 resources, GitHub repositories, airdrops, creators, and online communities curated by nekowawolf.';

export function pageSchema(path: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE, width: 3600, height: 1890 },
  };
}