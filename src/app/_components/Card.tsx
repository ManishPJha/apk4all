import * as App from "@/types/app";
import { formatDate } from "@/utils/format-date";
// import { getBlurImageUrl } from "@/utils/blur-image";
// import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import Link from "next/link";

import config from "@/config/default";

export function publishedDateFormat(publishedDate: string) {
  return publishedDate
    ? formatDate(new Date(publishedDate), "dd MMMM yyyy")
    : formatDate(new Date(Date.now()), "dd MMMM yyyy");
}

const Card = async ({ item }: { item: App.Page.SinglePage }) => {
  const { frontmatter, slug } = item;

  // const { base64: placeholder } = await getBlurImageUrl(frontmatter.image);

  return (
    <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
      <div className="max-w-full m-2 sm:m-0 bg-gray-100 shadow-sm dark:bg-gray-800">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <Image
            className="object-cover w-full h-full"
            width={1000}
            height={324}
            src={frontmatter.image}
            alt="cover image"
            // placeholder="blur"
            // blurDataURL={placeholder}
          />
        </div>
        <div className="p-3">
          <div className="flex mb-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {publishedDateFormat(frontmatter.publishedAt)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {frontmatter?.readingTime || config.defaultReadTime} min read
            </p>
          </div>
          <Link href={`/blog/${encodeURIComponent(slug.toLowerCase())}`}>
            <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
              {frontmatter.title}
            </p>
          </Link>
          <small className="leading-5 text-gray-500 dark:text-gray-400">
            {frontmatter.description}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
