import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        pathname: '/b/isbn/**',
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        pathname: '/images/P/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Sanity Studio calls React.useEffectEvent, which Next.js's internal compiled
    // React does not export. Alias react/react-dom to the project's copies (which
    // do export it) — but ONLY for the browser bundle. The server bundle must keep
    // Next.js's compiled React so that RSC/server-only exports work correctly.
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
      }
    }
    return config
  },
};

export default nextConfig;
