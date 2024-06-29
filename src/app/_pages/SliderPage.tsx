"use client";

import * as App from "@/types/app";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const SlickSlider = dynamic(() => import("@/app/_components/Carousel"), {
  ssr: false,
});

const SliderPage = ({
  relatedPosts,
}: {
  relatedPosts: App.Page.AllSinglePages;
}) => {
  return (
    <Suspense fallback={null}>
      <SlickSlider sliderItems={relatedPosts} />
    </Suspense>
  );
};

export default SliderPage;
