import { GameCardProps } from "../GameCard/types";
import { HighlightProps } from "../Highlight/types";

export type ShowCaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
};
