import { ThemeProvider } from "next-themes";
import React from "react";

import Base from "@/partials/Base";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <Base>{children}</Base>
    </ThemeProvider>
  );
};

export default Providers;
