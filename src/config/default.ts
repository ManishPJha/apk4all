const config = {
  appName: "apk4all",
  appUrl:
    (process.env.NEXT_PUBLIC_VERCEL_URL as string) || "http://localhost:3000",
  blogsFolder: "src/content/posts",
  authorsFolder: "src/content/authors",
  defaultReadTime: 3,

  bannerTitle: "Welcome ! Explore Apk4all Blogs",
  bannerDescription:
    "Dive into a world of tech insights, coding tutorials, and industry trends. Whether you're a budding developer or a seasoned pro, you'll find valuable content to enhance your skills and stay updated with the latest in the tech world. Let's explore the fascinating world of software development together!",
  bannerImage: "/images/banner.webp",
};

export default config;
