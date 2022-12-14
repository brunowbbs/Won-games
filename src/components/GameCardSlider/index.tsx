import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Settings } from "react-slick";

import GameCard from "../GameCard";
import Slider from "../Slider";
import * as S from "./styles";
import { GameCardSliderProps } from "./types";

const settings: Settings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
  //nextArrow: <MdArrowForwardIos aria-label="previous games" />,
  //prevArrow: <MdArrowBackIos aria-label="next games" />,
};

const GameCardSlider = ({ items, color = "black" }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default GameCardSlider;
