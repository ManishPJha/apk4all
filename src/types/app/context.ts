import { type Post } from "./post";

export interface AppContext {
  posts: Post[];
  post: Post | null;
  setPost: React.Dispatch<React.SetStateAction<Post | null>>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export type AppState = Omit<AppContext, "setPost" | "setPosts">;
