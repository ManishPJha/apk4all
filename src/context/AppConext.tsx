"use client";

import { Post } from "@/types/app/post";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import * as App from "@/types/app";

import { persistState } from "@/utils/save-to-local";

const AppContext = createContext<App.Context.AppContext | null>(null);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window) {
      persistState("appContext", { posts, post } as App.Context.AppState);
    }
  }, [posts, post]);

  const value = useMemo(() => {
    const contextValue = { posts, post, setPost, setPosts };

    if (typeof window !== "undefined" && window) {
      persistState("appContext", contextValue);
    }

    return contextValue;
  }, [posts, post]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};
