import { MetadataRoute } from "next";

import { getDatabseById } from "@/app/actions";
import config from "@/config/default";

export default async function sitemap() {
  const allPosts = await getDatabseById(config.notionDatabaseId);

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
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly",
      priority: 0.5,
    })
  );

  return siteMap;
}
