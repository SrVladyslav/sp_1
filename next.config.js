/** @type {import('next').NextConfig} */ 
const runtimeCaching = require("next-pwa/cache");

const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  // PWA
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  // runtimeCaching,
  // buildExcludes: [/middleware-manifest\.json$/]
})
// Estaba comentado

const nextConfig = withPWA({
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://127.0.0.1:8000/:path*' // Proxy to Backend
  //     }
  //   ]
  // }
})

module.exports = nextConfig;