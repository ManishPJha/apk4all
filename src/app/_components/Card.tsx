import * as App from "@/types/app";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item }: { item: App.Post.Post }) => {
  return (
    <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
      <div className="max-w-full m-2 sm:m-0 bg-gray-100 shadow-sm dark:bg-gray-800">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <Image
            className="object-cover w-full h-full"
            width={1000}
            height={324}
            src={item.image}
            alt="cover image"
            placeholder="blur"
            blurDataURL={item.placeholder}
          />
        </div>
        <div className="p-3">
          <div className="flex mb-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(new Date(item.publishedAt), "dd MMMM yyyy")}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              5 min read
            </p>
          </div>
          <Link href={`/blog/${item.slug.toLowerCase()}`}>
            <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
              {item.title}
            </p>
          </Link>
          <small className="leading-5 text-gray-500 dark:text-gray-400">
            {item.description}
          </small>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
  //     <figure>
  //       <Image
  //         className="rounded-t h-72 w-full object-cover"
  //         width={1000}
  //         height={324}
  //         src={item.image}
  //         alt="cover image"
  //         placeholder="blur"
  //         blurDataURL={item.placeholder}
  //       />
  //       <figcaption className="p-4">
  //         <div className="flex mb-3">
  //           <p className="text-sm text-gray-500 dark:text-gray-400">
  //             {" "}
  //             {formatDate(new Date(item.publishedAt), "dd MMMM yyyy")}{" "}
  //           </p>
  //           <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
  //           <p className="text-sm text-gray-500 dark:text-gray-400">
  //             {" "}
  //             5 min read{" "}
  //           </p>
  //         </div>
  //         <Link
  //           className="text-lg cursor-pointer"
  //           href={`/blog/${item.slug.toLowerCase()}`}
  //         >
  //           <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
  //             {item.title}
  //           </p>
  //         </Link>
  //         <small className="leading-5 text-gray-500 dark:text-gray-400">
  //           {item.description}
  //         </small>
  //       </figcaption>
  //     </figure>
  //   </div>
  // );
};

export default Card;
