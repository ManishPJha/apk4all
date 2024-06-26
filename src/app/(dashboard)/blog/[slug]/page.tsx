const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  return (
    <div>
      <article
        data-revalidated-at={new Date().getTime()}
        className="mt-4 flex flex-col items-center md:mt-20"
      >
        <div className="relative aspect-[3/2] w-[90vw] max-w-[900px]"></div>
      </article>
    </div>
  );
};

export default Page;
