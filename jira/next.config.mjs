// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "http://localhost:3000",
        "https://obscure-space-doodle-44vxgxr7w-3000.app.github.dev",
      ],
    },
  },
};

export default nextConfig;
