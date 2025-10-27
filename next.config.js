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
  // Added: Ensure proper static generation for all pages
  output: 'standalone',
}

module.exports = nextConfig