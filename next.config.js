/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@cloudscape-design/components',
    '@cloudscape-design/component-toolkit'
  ],
  reactStrictMode: true,
  output: 'export',
};


module.exports = nextConfig
