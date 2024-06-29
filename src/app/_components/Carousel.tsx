"use client";

import Slider, { type Settings } from "react-slick";

import type { SlickSliderProps } from "@/types/app/components/carousel";
import type { SinglePage } from "@/types/app/page";
import cn from "@/utils/cn";
import Card from "./Card";

const SlickSlider = ({
  speed,
  dots = true,
  infinite = true,
  showArrows = false,
  slidesToScroll,
  slidesToShow,
  sliderItems,
  className,
}: SlickSliderProps<SinglePage>) => {
  const sliderOptions: Settings = {
    dots,
    infinite,
    speed: speed ? speed : 500,
    slidesToShow: slidesToShow ? slidesToShow : 3,
    slidesToScroll: slidesToScroll ? slidesToScroll : 1,
    arrows: showArrows,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!sliderItems.length) return null;

  const sliderCombinedClasses = cn("", className);

  return (
    <Slider {...sliderOptions} className={sliderCombinedClasses}>
      {sliderItems.map((item) => (
        <div key={item.slug} className="px-2">
          <Card item={item} className="hover:transform-none" />
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
