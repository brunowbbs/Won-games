import { GaleryImageProps } from "src/components/Gallery/type";
import { GameCardProps } from "src/components/GameCard/types";
import { GameDetailsProps } from "src/components/GameDetails/types";
import { GameInfoProps } from "src/components/GameInfo/types";
import { HighlightProps } from "src/components/Highlight/types";

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GaleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};
