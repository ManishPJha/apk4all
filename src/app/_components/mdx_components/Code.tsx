"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type HighlightedCode = {
  children: string;
  language: string;
};

const HighlightedCode = ({ children, language }: HighlightedCode) => {
  return (
    <SyntaxHighlighter language={language} style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default HighlightedCode;
