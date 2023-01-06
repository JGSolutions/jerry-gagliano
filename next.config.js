/** @type {import('next').NextConfig} */
const nextMDX = require('@next/mdx')

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    images: {
      unoptimized: true
    }
  },
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
