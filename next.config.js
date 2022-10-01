/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
