// import { MDXRemote } from "next-mdx-remote";

// import { getSinglePageData } from "@/app/actions";

// import parseMDX from "@/utils/mdx-parser";
// import { useMDXComponents } from "@/app/_components/MdxComponent";

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = decodeURIComponent(params.slug);

  console.log("🚀 ~ Page ~ slug:", slug);

  // const { frontmatter, content } = await getSinglePageData(slug);

  // const mdxContent = await parseMDX(content);

  // const mdxComponents = useMDXComponents({});

  return (
    <div>
      <article
        data-revalidated-at={new Date().getTime()}
        className="mt-4 flex flex-col items-center md:mt-20"
      >
        <div className="relative aspect-[3/2] w-[90vw] max-w-[900px]">
          {/* <MDXRemote {...mdxContent} components={mdxComponents} /> */}
        </div>
      </article>
    </div>
  );
};

export default Page;
