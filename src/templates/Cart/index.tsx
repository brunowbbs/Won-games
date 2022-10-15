import { Container } from "../../components/Container";
import { Divider } from "../../components/Divider";
import Empty from "../../components/Empty";
import CartList from "../../components/CarList";
import Heading from "../../components/Heading";
import PaymentOptions from "../../components/PaymentOptions";
import ShowCase from "../../components/ShowCase";
import Base from "../Base";

import * as S from "./styles";

import { CartProps } from "./types";

const CartTemplate = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards,
}: CartProps) => {
  const handlePayment = () => ({});

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <ShowCase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default CartTemplate;
