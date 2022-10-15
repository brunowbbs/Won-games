import Gallery from "../../components/Gallery";
import GameDetails from "../../components/GameDetails";
import GameInfo from "../../components/GameInfo";
import ShowCase from "../../components/ShowCase";
import TextContent from "../../components/TextContent";
import Base from "../Base";

import * as S from "./styles";
import { GameTemplateProps } from "./types";

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  recommendedGames,
  upcommingGames,
  upcommingHighlight,
}: GameTemplateProps) => {
  return (
    <Base>
      <S.Cover src={cover} role="img" aria-label="cover" teste-id="cover" />
      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
        </S.SectionGameDetails>

        <ShowCase
          title="Upcomming"
          games={upcommingGames}
          highlight={upcommingHighlight}
        />

        <ShowCase title="You may like these games" games={recommendedGames} />
      </S.Main>
    </Base>
  );
};

export default Game;
