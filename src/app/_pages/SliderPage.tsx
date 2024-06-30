"use client";

import * as App from "@/types/app";

import SlickSlider from "../_components/Carousel";

const SliderPage = ({
  relatedPosts,
}: {
  relatedPosts: App.Page.AllSinglePages;
}) => {
  return <SlickSlider sliderItems={relatedPosts} />;
};

export default SliderPage;
