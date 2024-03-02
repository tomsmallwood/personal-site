/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@cloudscape-design/components',
    '@cloudscape-design/component-toolkit'
  ],
  reactStrictMode: true,
};


module.exports = nextConfig
