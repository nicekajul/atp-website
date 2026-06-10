import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  serverExternalPackages: ['sanity', '@sanity/vision', 'next-sanity'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
      }
    }
    return config
  },
  images: {
    qualities: [75, 90, 100],
    remotePatterns: [
      { protocol: 'https', hostname: 'covers.openlibrary.org',        pathname: '/b/isbn/**' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com', pathname: '/images/P/**' },
      { protocol: 'https', hostname: 'm.media-amazon.com',            pathname: '/images/**' },
      { protocol: 'https', hostname: 'books.google.com',              pathname: '/books/content/**' },
      { protocol: 'https', hostname: '**' },
    ],
  },
};

export default nextConfig;
