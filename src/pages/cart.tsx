import { cartListMock } from "src/components/CarList/mock";
import { paymentOptionsMock } from "src/components/PaymentOptions/mock";
import { gameCardsMock } from "../components/GameCard/mock";
import { highlightMock } from "../components/Highlight/mock";
import CartTemplate from "../templates/Cart";
import { CartProps } from "../templates/Cart/types";

export default function CartPage(props: CartProps) {
  return <CartTemplate {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gameCardsMock,
      recommendedHighlight: highlightMock,
      items: cartListMock,
      total: "R$ 350,00",
      cards: paymentOptionsMock,
    },
  };
}
