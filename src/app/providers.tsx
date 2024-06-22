import { Theme, ThemePanel } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import React from "react";

import Base from "@/partials/Base";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const isDevelopment = process.env.NODE_ENV !== "production";

  return (
    <ThemeProvider attribute="class">
      <Theme>
        <Base>{children}</Base>
        {isDevelopment && <ThemePanel />}
      </Theme>
    </ThemeProvider>
  );
};

export default Providers;
