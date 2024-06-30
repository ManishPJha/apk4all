"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

import { useMDXComponents } from "@/app/_components/MdxComponent";
import allComponents from "@/app/_components/mdx_components";

const MdxPage = ({ content }: { content: MDXRemoteSerializeResult<any> }) => {
  const mdxcomponents = useMDXComponents({ ...allComponents });

  return <MDXRemote {...content} components={mdxcomponents} />;
};

export default MdxPage;
