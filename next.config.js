/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.chunkFilename = "static/chunks/[name].[chunkhash].js";
    }
    return config;
  },
};

module.exports = nextConfig;
