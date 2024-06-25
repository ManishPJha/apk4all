import PostGrid from "@/app/_components/PostGrid";
import { getDatabseById } from "@/app/actions";
import config from "@/config/default";

async function getPosts() {
  const posts = await getDatabseById(config.notionDatabaseId);

  return posts;
}

const page = async () => {
  const posts = await getPosts();

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      <PostGrid posts={posts} />
    </section>
  );
};

export default page;
