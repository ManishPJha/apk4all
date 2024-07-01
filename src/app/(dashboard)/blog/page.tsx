import PostGrid from "@/app/_components/PostGrid";
import config from "@/config/default";

import { getAllSinglePage } from "@/app/actions";

const page = async () => {
  const posts = await getAllSinglePage(config.blogsFolder);

  return (
    <section className="py-10 px-12">
      {posts.length && <PostGrid posts={posts} />}
    </section>
  );
};

export default page;
