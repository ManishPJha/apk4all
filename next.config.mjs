import nextMdx from "@next/mdx";
import withPlaiceholder from "@plaiceholder/next";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
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
      {
        protocol: "https",
        hostname: "www.tatvasoft.com",
      },
      {
        protocol: "https",
        hostname: "blog.logrocket.com",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "file.notion.so",
      },
    ],
  },
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],

  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/blog",
  //     },
  //   ];
  // },

  // suppress keyv warning
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/\/keyv\//, (data) => {
        delete data.dependencies[0].critical;
        return data;
      })
    );

    return config;
  },
};

export default withPlaiceholder(withMdx(nextConfig));
