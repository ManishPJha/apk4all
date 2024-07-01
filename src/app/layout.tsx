import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
        <GoogleAnalytics gaId="G-XZ7YBREFJV" />
        <GoogleTagManager gtmId="GTM-N68JSN77" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
