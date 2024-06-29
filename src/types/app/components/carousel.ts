export interface SlickSliderProps<T = {}> {
  infinite?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  dots?: boolean;
  speed?: number;
  showArrows?: boolean;
  className?: string;
  sliderItems: Array<T>;
}
