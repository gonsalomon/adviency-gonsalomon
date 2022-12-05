/** @type {import('next').NextConfig} */
import withImages from 'next-images'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

export default {
  experimental:{
    appDir: true
  },
  withImages,
  nextConfig,
  images:{
    domains: [
      'encrypted-tbn0.gstatic.com',
      'http2.mlstatic.com',
      'ardiaprod.vtexassets.com'
    ]
  }
}
