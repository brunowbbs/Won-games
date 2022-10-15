import { PaymentOptionsProps } from "src/components/PaymentOptions/types";
import { CartListProps } from "../../components/CarList/types";
import { GameCardProps } from "../../components/GameCard/types";
import { HighlightProps } from "../../components/Highlight/types";

export type CartProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, "cards">;
