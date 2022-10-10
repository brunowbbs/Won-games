import Footer from "../../components/Footer";
import { Container } from "../../components/Container";
import Menu from "../../components/Menu";
import Heading from "../../components/Heading";
import { HomeTemplateProps } from "./types";
import BannerSlider from "../../components/BannerSlider";
import GameCardSlider from "../../components/GameCardSlider";
import Highlight from "../../components/Highlight";

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
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} color="white" />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upCommingGames} />
        <Highlight {...upCommingHighlight} />
        <GameCardSlider items={upCommingMoreGames} color="white" />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} color="white" />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Home;
