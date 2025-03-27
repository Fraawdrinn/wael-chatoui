import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com", // Remplace par ton domaine d'images
      },
      {
        protocol: "https",
        hostname:"cdn.jsdeliver.net"
      }
    ],
  }
};

export default nextConfig;
