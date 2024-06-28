"use server";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import config from "@/config/default";
import * as App from "@/types/app";
import { AuthorFrontmatter, Frontmatter } from "@/types/app/page";
import { getErrorMessage } from "@/utils/error-message";

export const getAllSinglePage = async (
  folder: string
): Promise<App.Page.AllSinglePages> => {
  try {
    const filesPath = fs.readdirSync(folder);

    const filterSingleFiles = filesPath.filter(
      (file) => file.endsWith(".md") && !file.startsWith("_")
    );

    const singlePages: App.Page.AllSinglePages = filterSingleFiles.map(
      (file) => {
        const slug = file.replace(".md", "");
        const pageData = fs.readFileSync(path.join(folder, file), "utf-8");
        const pageDataParsed = matter(pageData);
        const frontmatter = pageDataParsed.data as unknown as Frontmatter;
        const content = pageDataParsed.content;
        const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;

        return {
          slug: url,
          content,
          frontmatter,
        };
      }
    );

    const filteredByDate = singlePages.filter(
      (page) =>
        !page.frontmatter.draft &&
        new Date(page.frontmatter.publishedAt || new Date()) <= new Date()
    );

    return filteredByDate;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const getSinglePage = async (
  slug: string
): Promise<App.Page.SinglePage> => {
  try {
    const allPages = await getAllSinglePage(config.blogsFolder);

    const singlePage = allPages.find((page) => page.slug === slug);

    if (!singlePage) {
      throw new Error("Page not found");
    }

    return singlePage;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const getAuthorPage = async (
  name: string
): Promise<App.Page.AuthorPage> => {
  try {
    const authorData = fs.readFileSync(
      path.join(config.authorsFolder, `${name}.md`),
      "utf-8"
    );
    const authorDataParsed = matter(authorData);
    const frontmatter = authorDataParsed.data as unknown as AuthorFrontmatter;
    const content = authorDataParsed.content;

    return {
      slug: name,
      frontmatter,
      content,
    };
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
