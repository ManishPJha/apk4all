import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Head from "next/head";

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
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7387047260739940"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <GoogleAnalytics gaId="G-XZ7YBREFJV" />
        <GoogleTagManager gtmId="GTM-N68JSN77" />
        <SpeedInsights />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
