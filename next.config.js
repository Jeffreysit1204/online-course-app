/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // 通知 Vercel 使用 app router 結構
    },
  };
  
  module.exports = nextConfig;

  