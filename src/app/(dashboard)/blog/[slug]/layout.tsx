import NewsLetter from "@/app/_components/NewsLetter";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        {children}
      </div>
      <NewsLetter />
    </>
  );
};

export default layout;
