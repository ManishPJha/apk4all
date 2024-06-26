import { ThemeProvider } from "next-themes";
import React from "react";

import { AppContextProvider } from "@/context/AppConext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <AppContextProvider>{children}</AppContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
