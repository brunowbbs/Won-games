import CardsList from "src/components/CardsList";
import { CardsListProps } from "src/components/CardsList/types";
import { paymentOptionsMock } from "src/components/PaymentOptions/mock";
import Profile from "src/templates/Profile";

export default function CardsPage({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      cards: paymentOptionsMock,
    },
  };
}
