/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  output: "export",
  // experimental: {
  //   serverActions: true,
  // },
  // Add the environment check and repository name here
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/aniolquer.github.io" : "",
  basePath: process.env.NODE_ENV === "production" ? "/aniolquer.github.io" : "",
};

module.exports = nextConfig;
