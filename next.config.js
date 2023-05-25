/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.dw.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
