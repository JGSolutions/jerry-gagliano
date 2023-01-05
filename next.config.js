/** @type {import('next').NextConfig} */
// const optimizedImages = require('next-optimized-images');
const nextMDX = require('@next/mdx')

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    images: {
      unoptimized: true
    }
  },
})

// const nextConfig = {
//   reactStrictMode: true,
//   trailingSlash: true,
//   swcMinify: true,
//   images: {
//     unoptimized: true,
//   }
// }

module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
// module.exports = nextConfig
