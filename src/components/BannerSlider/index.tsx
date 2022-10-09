import * as S from "./styles";

import Slider from "../Slider";
import { BannerSliderProps } from "./types";
import Banner from "../Banner";
import { Settings } from "react-slick";

const settings: Settings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  autoplay: true,

  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
        autoplay: true,
      },
    },
  ],
};

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default BannerSlider;
