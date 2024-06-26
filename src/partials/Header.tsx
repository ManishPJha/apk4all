"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegMoon,
  FaSun,
  FaTwitter,
} from "react-icons/fa";

import config from "@/config/default";

// const Clock = dynamic(() => import("react-live-clock"), { ssr: false });
const Search = dynamic(() => import("@/app/_components/Search"), {
  ssr: false,
});

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="not-prose px-2 sm:px-4 py-2.5 w-full bg-white dark:bg-backgroundColor-primary">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} /> */}

        <Link href="/" className="mx-auto block font-semibold dark:text-white">
          {config.appName.toUpperCase()}{" "}
        </Link>

        <ul className="mx-auto flex flex-wrap p-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <Link
            prefetch
            href="/blog"
            className="block py-2 pl-3 pr-4 text-gray-700 hover:text-primary-400 dark:hover:text-primary-400 hover:cursor-pointer rounded md:p-0 dark:text-white"
          >
            All Blogs
          </Link>
          <li
            className="block py-2 pl-3 pr-4 text-gray-700 hover:text-primary-400 dark:hover:text-primary-400 rounded md:p-0 dark:text-white"
            aria-current="page"
          >
            <Suspense fallback={<>Loading...</>}>
              <Search />
            </Suspense>
          </li>

          <li>
            <Link
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-primary-400 dark:hover:text-primary-400 md:p-0 dark:text-white"
              aria-current="page"
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded  hover:text-primary-400 dark:hover:text-primary-400 md:p-0 dark:text-white"
            >
              {" "}
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-primary-400 dark:hover:text-primary-400 md:p-0 dark:text-white"
            >
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-primary-400 dark:hover:text-primary-400 md:p-0 dark:text-white"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <button
              className="block py-2 pl-3 pr-4 rounded md:p-0"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <FaSun /> : <FaRegMoon />}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
