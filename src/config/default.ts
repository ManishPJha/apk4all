const config = {
  appName: "apk4all",
  appUrl:
    (process.env.NEXT_PUBLIC_VERCEL_URL as string) || "http://localhost:3000",
  blogsFolder: "src/content/posts",
  authorsFolder: "src/content/authors",
  defaultReadTime: 3,
};

export default config;
