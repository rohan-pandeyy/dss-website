import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**', // Allow any path from this hostname
      },
      {
        protocol: 'https',
        hostname: 'tr.rbxcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
