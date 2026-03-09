/** @type {import('next').NextConfig} */

const nextConfig = {
  // Static export for Firebase Hosting
  output: 'export',

  // Image optimization not available with static export
  images: {
    unoptimized: true,
  },

  // Webpack config
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;