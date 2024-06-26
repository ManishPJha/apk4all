import { type Post } from "./post";

export type Action =
  | { type: "SET_POSTS"; payload: Post[] }
  | { type: "SET_POST"; payload: Post | null };

export interface AppContext {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export interface AppState {
  posts: Post[];
  post: Post | null;
}
