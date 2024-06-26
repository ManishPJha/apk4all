import PostGrid from "@/app/_components/PostGrid";
// import config from "@/config/default";

const page = async () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      <PostGrid posts={[]} />
    </section>
  );
};

export default page;
