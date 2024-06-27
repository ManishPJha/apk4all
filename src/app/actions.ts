"use server";

import { getAllSinglePage, getSinglePage } from "@/utils/content-parser";

export async function getAllPages(folderName: string) {
  const allPages = await getAllSinglePage(folderName);

  return allPages;
}

export async function getSinglePageData(slug: string) {
  const page = await getSinglePage(slug);

  return page;
}
