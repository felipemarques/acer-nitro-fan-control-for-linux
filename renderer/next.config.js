/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname),
    }

    return config
  },
}
