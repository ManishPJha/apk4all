"user server";

import { notionClient } from "@/utils/notion-client";

export const getPageByIds = async (pageId: string) => {
  const results = await notionClient.pages.retrieve({
    page_id: pageId,
  });

  return results;
};
