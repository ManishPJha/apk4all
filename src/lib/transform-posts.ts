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

        const _author = await getUserByIds(author.people[0].id);
        const blurredImageUrl = await getBlurImageUrl(
          cover.files[0].external.url
        );

        return {
          id: post.id,
          title: page.title[0].plain_text,
          slug: slug.rich_text[0].plain_text,
          description: "",
          date: post.created_time,
          tags: tags.multi_select,
          category: category.select,
          image: blurredImageUrl.base64,
          author: _author.name || "Anonymous",
          publishedAt: post.last_edited_time,
        } as App.Post.Post;
      } catch (error) {
        throw new Error(getErrorMessage(error));
      }
    })
  );
};

// import { getUserByIds } from "@/app/actions";
// import * as App from "@/types/app";
// import { getBlurImageUrl } from "@/utils/blur-image";
// import { getErrorMessage } from "@/utils/error-message";

// export const transformNotionPosts = async (posts: any[]) => {
//   const transformedPosts = await Promise.all<App.Post.Post>(
//     posts.map(
//       async (post) =>
//         new Promise(async (resolve, reject) => {
//           try {
//             const {
//               Page: page,
//               Slug: slug,
//               Tags: tags,
//               Category: category,
//               Cover: cover,
//               Author: author,
//             } = post.properties || {};

//             const _author = await getUserByIds(author.people[0]["id"]);

//             const bluredImageUrl = await getBlurImageUrl(
//               cover.files[0]["external"]["url"]
//             );

//             const _posts = {
//               id: post.id,
//               title: page.title[0]["plain_text"],
//               slug: slug.rich_text[0]["plain_text"],
//               //   description: post.properties.description.rich_text[0].plain_text,
//               description: "",
//               date: post.created_time,
//               tags: tags.multi_select,
//               category: category.select,
//               image: bluredImageUrl.base64,
//               //   image: cover.files[0]["external"]["url"],
//               author: _author.name ? _author.name : "Anonymous",
//               publishedAt: post.last_edited_time,
//             };

//             resolve(_posts);
//           } catch (error) {
//             reject(getErrorMessage(error));
//           }
//         })
//     )
//   );

//   return transformedPosts;
// };
