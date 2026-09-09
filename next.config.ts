import type { NextConfig } from 'next';
import { parseProcessEnv } from './src/libs/utils/env';

// Validate env vars at build time
parseProcessEnv();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/memo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/memo/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
