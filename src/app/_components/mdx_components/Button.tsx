"use client";

import Link from "next/link";

type Button = {
  href: string;
  type?: "primary" | "outline";
  rel?: "nofollow" | "follow";
  children: React.ReactNode;
};

const Button = ({ href, type, rel, children }: Button) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel={`noopener noreferrer ${
        rel ? (rel === "follow" ? "" : rel) : "nofollow"
      }`}
      className={`btn me-4 mb-4 ${
        type === "outline" ? "btn-outline-primary" : "btn-primary"
      } border-primary hover:text-white hover:no-underline`}
    >
      {children}
    </Link>
  );
};

export default Button;
