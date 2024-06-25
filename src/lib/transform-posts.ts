import { getUserByIds } from "@/app/actions";
import * as App from "@/types/app";
import { getBlurImageUrl } from "@/utils/blur-image";
import { getErrorMessage } from "@/utils/error-message";

export const transformNotionPosts = async (
  posts: any[]
): Promise<App.Post.Post[]> => {
  return Promise.all(
    posts.map(async (post) => {
      try {
        const {
          Page: page,
          Slug: slug,
          Tags: tags,
          Category: category,
          Cover: cover,
          Author: author,
        } = post.properties || {};

        const coverImage =
          cover && cover.files[0].file
            ? cover.files[0].file.url
            : cover.files[0].external.url;

        const _author = await getUserByIds(author.people[0].id);
        const blurredImageUrl = await getBlurImageUrl(coverImage);

        return {
          id: post.id,
          title: page.title[0].plain_text,
          slug: slug.rich_text[0].plain_text,
          description:
            "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!"
              .slice(0, 120)
              .concat("..."),
          date: post.created_time,
          tags: tags.multi_select,
          category: category.select,
          image: coverImage,
          placeholder: blurredImageUrl && blurredImageUrl.base64,
          author: _author.name || "Anonymous",
          publishedAt: post.last_edited_time,
        } as App.Post.Post;
      } catch (error) {
        throw new Error(getErrorMessage(error));
      }
    })
  );
};
