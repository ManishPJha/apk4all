import type { Metadata } from "next";

import "../styles/globals.css";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "Apk4all",
  description: "Start learning new technologies!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-transparent dark:bg-gray-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
