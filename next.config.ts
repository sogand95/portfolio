import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      // cspell:disable-next-line
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      // cspell:disable-next-line
      "picsum.photos",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
