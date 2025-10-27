/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com',
      },
    ],
  },
  experimental: {
    typedRoutes: false,
  },
  // Changed: Added logging for better debugging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

module.exports = nextConfig