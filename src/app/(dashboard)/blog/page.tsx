import PostGrid from "@/app/_components/PostGrid";
import config from "@/config/default";

import { getAllPages } from "@/app/actions";

const page = async () => {
  const posts = await getAllPages(config.blogsFolder);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      {posts.length && <PostGrid posts={posts} />}
    </section>
  );
};

export default page;
