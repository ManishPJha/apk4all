import fs from "fs";
import matter from "gray-matter";
import path from "path";

import * as App from "@/types/app";
import { getErrorMessage } from "./error-message";

export const getAllSinglePage = (
  folder: string
): Promise<App.Page.AllSinglePages> => {
  return new Promise((resolve, reject) => {
    try {
      const filesPath = fs.readdirSync(folder);
      const sanitizeFiles = filesPath.filter((file) => file.endsWith(".md"));

      // to exclude any files whose names start with an underscore (_)
      const filterSingleFiles = sanitizeFiles.filter((file) =>
        file.match(/^(?!_)/)
      );

      const singlePages: App.Page.AllSinglePages = filterSingleFiles.map(
        (file) => {
          const slug = file.replace(".md", "");
          const pageData = fs.readFileSync(path.join(folder, file), "utf-8");
          const pageDataParsed = matter(pageData);
          const frontmatterString = JSON.stringify(pageDataParsed.data);
          const frontmatter = JSON.parse(frontmatterString);
          const content = pageDataParsed.content;
          const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;

          return {
            slug: url,
            content,
            frontmatter,
          };
        }
      );

      const publishedPages = singlePages.filter(
        (page) => !page.frontmatter.draft && page
      );

      const filteredByDate = publishedPages.filter(
        (page) =>
          new Date(page.frontmatter.publishedAt || new Date()) <= new Date()
      );

      resolve(filteredByDate);
    } catch (error) {
      reject(getErrorMessage(error));
    }
  });
};

export const getSinglePage = async (
  slug: string
): Promise<App.Page.SinglePage> => {
  return new Promise(async (resolve, reject) => {
    try {
      const allPages = await getAllSinglePage("pages");

      const singlePage = allPages.find((page) => page.slug === slug);

      if (!singlePage) {
        throw new Error("Page not found");
      }

      resolve(singlePage);
    } catch (error) {
      reject(getErrorMessage(error));
    }
  });
};
