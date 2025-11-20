import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  cacheLife: {
    home: {
      revalidate: 60,
    },
    blog: {
      revalidate: 60,
    },
    blogPost: {
      revalidate: 60,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

export default nextConfig;
