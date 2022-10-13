import GameCardSlider from "../GameCardSlider";
import Heading from "../Heading";
import Highlight from "../Highlight";

import { ShowCaseProps } from "./types";

import * as S from "./styles";

const ShowCase = ({ title, highlight, games }: ShowCaseProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      {highlight && <Highlight {...highlight} />}

      {games && <GameCardSlider items={games} color="white" />}
    </S.Wrapper>
  );
};

export default ShowCase;
