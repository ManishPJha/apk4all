import { ThemeProvider } from "next-themes";
import React from "react";

import Base from "@/partials/Base";

import { AppContextProvider } from "@/context/AppConext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <AppContextProvider>
        <Base>{children}</Base>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
