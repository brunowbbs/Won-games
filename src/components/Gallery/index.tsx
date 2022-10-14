import { useEffect, useState, useRef } from "react";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineClose,
} from "react-icons/md";
import SlickSlider, { Settings } from "react-slick";

import Slider from "../Slider";
import { SliderSettings } from "../Slider/types";
import * as S from "./styles";
import { GalleryProps } from "./type";

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: "ondemand",
  nextArrow: <MdArrowForwardIos aria-label="next image" />,
  prevArrow: <MdArrowBackIos aria-label="prev image" />,
};

const settings: Settings = {
  ...commonSettings,
  slidesToShow: 4,

  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
        draggable: true,
      },
    },
  ],
};

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
};

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === "Escape" && setIsOpen(false);
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true);
              slider.current!.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <MdOutlineClose size={40} />
        </S.Close>

        <S.Container>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Container>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
