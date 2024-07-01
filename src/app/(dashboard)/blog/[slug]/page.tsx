import dynamic from "next/dynamic";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";

import Button from "@/app/_components/Button";
import { getAllSinglePage, getSinglePage } from "@/app/actions";
import config from "@/config/default";
import { formatDate } from "@/utils/format-date";
import parseMDX from "@/utils/mdx-parser";
import { humanizeSlug, markdownify, slugify } from "@/utils/text-converter";
import { Suspense } from "react";

const MdxPage = dynamic(() => import("@/app/_components/MdxPage"), {
  ssr: false,
});

type PageParams = { params: { slug: string } };

const Page = async ({ params }: PageParams) => {
  const slug = decodeURIComponent(params.slug);

  const { content, frontmatter } = await getSinglePage(slug);

  const parsedContent = await parseMDX(content);

  if (!frontmatter) return null;

  const author = frontmatter.author ? frontmatter.author : "Anonymous";

  return (
    <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl dark:bg-backgroundColor-primary bg-white">
      <article className="mx-auto w-full max-w-3xl prose lg:prose-xl prose-stone dark:prose-invert">
        <div className="my-4 flex items-center justify-between">
          <Button
            className="text-xl flex flex-row items-center mb-6 no-underline p-0"
            transparent
            goBack
          >
            <FaChevronLeft /> Back
          </Button>
        </div>

        {markdownify(
          frontmatter.title,
          "h1",
          "mb-4 mt-4 text-3xl font-extrabold text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
        )}

        {markdownify(frontmatter.description, "p", "lead")}

        <header className="mb-4 lg:mb-6 not-format">
          <address className="flex items-center mb-6 not-italic">
            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <Image
                height={40}
                width={40}
                className="mr-4 w-10 h-10 rounded-full"
                src={frontmatter.image}
                alt={frontmatter.title}
              />

              <Button
                redirectTo={`/author/${slugify(author)}`}
                className="no-underline text-xl text-gray-900 dark:text-white"
                bold
                transparent
              >
                {humanizeSlug(author)}
              </Button>

              {markdownify(
                formatDate(new Date(frontmatter.publishedAt), "dd MMMM yyyy"),
                "time",
                "text-base font-light text-gray-500 dark:text-gray-400 mx-2"
              )}

              <div className="text-base w-1 h-1 rounded-full bg-black dark:bg-white mx-1"></div>

              {markdownify(
                `${frontmatter.readingTime} Min Read`,
                "p",
                "text-base font-light text-gray-500 dark:text-gray-400"
              )}
            </div>
          </address>
        </header>

        <Suspense fallback={null}>
          {parsedContent && <MdxPage content={parsedContent} />}
        </Suspense>
      </article>
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  const allPosts = await getAllSinglePage(config.blogsFolder);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params: { slug } }: PageParams) {
  const allPosts = await getAllSinglePage(config.blogsFolder);

  const post = allPosts.find((post) => post.slug === slug);

  return post
    ? {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        image: post.frontmatter.image,
        publishedAt: post.frontmatter.publishedAt,
        author: post.frontmatter.author,
        readingTime: post.frontmatter.readingTime,
        canonicalUrl: `${config.appUrl}/blog/${slug}`,
        openGraph: {
          type: "article",
          title: post.frontmatter.title,
          description: post.frontmatter.description,
          image: post.frontmatter.image,
          url: `${config.appUrl}/blog/${slug}`,
        },
        twitter: {
          cardType: "summary_large_image",
          title: post.frontmatter.title,
          description: post.frontmatter.description,
          image: post.frontmatter.image,
        },
      }
    : {};
}
