/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {appDir:true},
  images: {
    domains: [
    'http2.mlstatic.com'
    ],
  },
}

module.exports = nextConfig
