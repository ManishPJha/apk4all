import { MetadataRoute } from "next";

import { getAllSinglePage } from "@/app/actions";
import config from "@/config/default";

export default async function sitemap() {
  const allPosts = await getAllSinglePage(config.blogsFolder);

  const siteMap: MetadataRoute.Sitemap = [
    {
      url: config.appUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${config.appUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${config.appUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  allPosts.map((post) =>
    siteMap.push({
      url: `${config.appUrl}/blog/${post.slug}`,
      lastModified: post.frontmatter.publishedAt
        ? new Date(post.frontmatter.publishedAt)
        : new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    })
  );

  return siteMap;
}
