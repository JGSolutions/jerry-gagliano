/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // remarkPlugins: [],
  // rehypePlugins: [],
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
})
