import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="dark:bg-backgroundColor-primary bg-white">{children}</main>
  );
};

export default Container;
