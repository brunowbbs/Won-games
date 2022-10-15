import { gameCardsMock } from "src/components/GameCard/mock";
import { highlightMock } from "src/components/Highlight/mock";
import { WishListTemplateProps } from "src/templates/Wishlist/types";
import Wishlist from "../templates/Wishlist";

export default function WishlistPage(props: WishListTemplateProps) {
  return (
    <Wishlist
      games={props.games}
      recommendedGames={props.recommendedGames}
      recommendedHighlight={props.recommendedHighlight}
    />
  );
}

export async function getStaticProps() {
  return {
    props: {
      games: gameCardsMock,
      recommendedGames: gameCardsMock,
      recommendedHighlight: highlightMock,
    },
  };
}
