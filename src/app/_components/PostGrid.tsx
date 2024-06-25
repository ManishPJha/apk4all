"use client";

import * as App from "@/types/app";
import Card from "./Card";

import { useAppContext } from "@/context/AppConext";
import { memo, useEffect } from "react";

const PostGrid = memo(({ posts }: { posts: App.Post.Post[] }) => {
  const { setPosts, posts: allPosts } = useAppContext();

  useEffect(() => {
    console.log("🌊 Grid Component is rendereing!");
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setPosts(posts);
    }
    return () => {
      setPosts([]);
    };
  }, [posts.length]);

  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allPosts &&
        allPosts.length > 0 &&
        allPosts.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
});

PostGrid.displayName = "PostGrid";

export default PostGrid;
