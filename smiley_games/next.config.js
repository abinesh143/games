/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: false,
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;
