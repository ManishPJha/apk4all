"use server";

import { revalidatePath } from "next/cache";
import { cache } from "react";

import { transformNotionPosts } from "@/lib/transform-posts";
import { Post } from "@/types/app/post";
import { getErrorMessage } from "@/utils/error-message";
import { notionClient } from "@/utils/notion-client";

const PAGE_SIZE = 10;

/**
 *
 * @param databaseId notion database id
 * @returns database contents
 */
export const getDatabseById = cache(
  async (database_id: string): Promise<Post[]> => {
    try {
      if (!database_id) return [];

      const database = await notionClient.databases.query({
        database_id,
        page_size: PAGE_SIZE,
        sorts: [
          {
            timestamp: "created_time",
            direction: "descending",
          },
        ],
      });

      if (!database) return [];

      const transformedPosts = await transformNotionPosts(database.results);

      revalidatePath("/blog");

      return transformedPosts;
    } catch (error) {
      throw new Error(
        `Could not retrieve databse ${database_id} from notion database. reason: ${getErrorMessage(
          error
        )}`
      );
    }
  }
);

export const getPageByIds = async (pageId: string) => {
  const results = await notionClient.pages.retrieve({
    page_id: pageId,
  });

  return results;
};

export const getUserByIds = async (userId: string) => {
  const results = await notionClient.users.retrieve({
    user_id: userId,
  });

  return results;
};
