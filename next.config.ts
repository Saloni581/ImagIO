import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-static.aiease.ai",
            },
        ]
    }
};

export default nextConfig;
