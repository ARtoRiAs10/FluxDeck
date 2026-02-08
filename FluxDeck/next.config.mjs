/* eslint-disable */
// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Don’t run ESLint during `next build`
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Don’t check TypeScript errors during `next build`
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      enabled: true,
      allowedOrigins: [
        "http://localhost:3000",

        // ✅ GitHub Codespaces
        /\.app\.github\.dev$/,

        // ✅ Vercel preview deployments (project-name-user.vercel.app)
        /\.vercel\.app$/,

        // ✅ Custom Vercel production domains (e.g. yourdomain.com)
        //    → This allows ANY domain (you can restrict if needed)
        /^https?:\/\/.*$/,
      ],
    },
  },
};

export default nextConfig;
