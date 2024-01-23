/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Image source configuration

    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/v1/api/images/**",
        port: '8080',
      },
    ],
  },
};

module.exports = nextConfig;
