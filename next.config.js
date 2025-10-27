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
  // Changed: Use default runtime instead of standalone to fix RSC payload issues
  // Changed: Add proper dynamic route handling
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-middleware-cache',
            value: 'no-cache',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig