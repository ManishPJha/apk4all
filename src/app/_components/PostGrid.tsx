import * as App from "@/types/app";
import Card from "./Card";

const PostGrid = ({ posts }: { posts: App.Page.AllSinglePages }) => {
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts &&
        posts.length > 0 &&
        posts.map((item) => <Card key={item.slug} item={item} />)}
    </div>
  );
};

export default PostGrid;
