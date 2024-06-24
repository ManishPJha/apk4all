import * as App from "@/types/app";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item }: { item: App.Post.Post }) => {
  return (
    <div className="max-w-full m-2 sm:m-0 bg-gray-100 shadow-sm dark:bg-gray-800">
      <Image
        className="rounded-lg p-3"
        width={1000}
        height={324}
        src={item.image}
        alt="cover image"
      />

      <div className="p-3">
        <div className="flex mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {" "}
            {formatDate(new Date(item.publishedAt), "dd MMMM yyyy")}{" "}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {" "}
            5 min read{" "}
          </p>
        </div>

        <Link className="text-lg " href={`/blog/${item.slug.toLowerCase()}`}>
          {item.title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
