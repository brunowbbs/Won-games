import { GameCardProps } from "src/components/GameCard/types";
import { HighlightProps } from "src/components/Highlight/types";

export type WishListTemplateProps = {
  games?: GameCardProps[];
  recommendedHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};
