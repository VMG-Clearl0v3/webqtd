import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Cloudinary
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      // Render backend
      {
        protocol: "https",
        hostname: "webqtd-backend.onrender.com",
        pathname: "/uploads/**",
      },
      // localhost
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};
export default nextConfig;
