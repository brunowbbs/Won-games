import BannerSlider from "../../components/BannerSlider";
import { Container } from "../../components/Container";
import { HomeTemplateProps } from "./types";

import ShowCase from "../../components/ShowCase";
import Base from "../Base";
import * as S from "./styles";

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  freeGames,
  freeHighlight,
  mostPopularHighlight,
  upCommingGames,
  upCommingMoreGames,
  upCommingHighlight,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title="News" games={newGames} />
    </S.SectionNews>

    <S.SectionMostPopular>
      <ShowCase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <ShowCase title="Upcomming" games={upCommingGames} />
      <ShowCase highlight={upCommingHighlight} games={upCommingMoreGames} />
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <ShowCase
        title="Free games"
        highlight={freeHighlight}
        games={freeGames}
      />
    </S.SectionFreeGames>
  </Base>
);

export default Home;
