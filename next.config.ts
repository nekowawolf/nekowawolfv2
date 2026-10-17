import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'nekowawolf.xyz' }],
      destination: 'https://www.nekowawolf.xyz/:path*',
      permanent: true,
    }];
  },
};

export default nextConfig;
