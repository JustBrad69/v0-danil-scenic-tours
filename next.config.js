/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'], remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'Clear-Site-Data', value: '"cache", "storage"' },
        { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' }
      ],
    },
  ],
}
module.exports = nextConfig
