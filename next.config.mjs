/** @type {import('next').NextConfig} */

import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "europe1.discourse-cdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
