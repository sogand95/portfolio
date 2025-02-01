/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "picsum.photos", // Also adding this since you're using it for projects and testimonials
    ],
  },
};

module.exports = nextConfig;
