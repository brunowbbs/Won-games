import { GameCardProps } from "../../components/GameCard/types";
import { BannerProps } from "../../components/Banner/types";
import { HighlightProps } from "src/components/Highlight/types";

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upCommingGames: GameCardProps[];
  upCommingMoreGames: GameCardProps[];
  upCommingHighlight: HighlightProps;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};
