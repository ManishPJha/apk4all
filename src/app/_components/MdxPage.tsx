"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect, useState } from "react";

import { useMDXComponents } from "@/app/_components/MdxComponent";
import allComponents from "@/app/_components/mdx_components";
import parseMDX from "@/utils/mdx-parser";

const MdxPage = ({ content }: { content: string }) => {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult<any>>();

  const mdxcomponents = useMDXComponents({ ...allComponents });

  useEffect(() => {
    async function getParsedContent() {
      const parsed = await parseMDX(content);
      return parsed;
    }
    if (content) {
      getParsedContent().then((content) => setMdxContent(content));
    }
    return () => {
      // cleanup
      // called when component unmounts
      // prevent memory leaks
      setMdxContent(undefined);
    };
  }, [content]);

  if (!mdxContent) return null;

  return <MDXRemote {...mdxContent} components={mdxcomponents} />;
};

export default MdxPage;
