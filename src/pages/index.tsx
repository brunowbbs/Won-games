import { Settings } from "react-slick";
import BannerSlider from "src/components/BannerSlider";
import GameCardSlider from "src/components/GameCardSlider";
import { bannerSliderMock } from "src/mocks/bannerSlider";
import { gameCardsMock } from "src/mocks/gameCard";
import styled from "styled-components";

export default function Home() {
  const horizontalSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const verticalSettings: Settings = {
    vertical: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Slide = styled.div`
    background: gray;
    width: 30rem;
    padding: 10rem 0;
    border: 0.1rem solid red;
    color: white;
    text-align: center;
  `;

  return <GameCardSlider items={gameCardsMock} />;
}
