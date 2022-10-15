import Heading from "../Heading";
import * as S from "./styles";
import { CardsListProps } from "./types";

const CardsList = ({ cards }: CardsListProps) => {
  return (
    <S.Wrapper>
      <Heading size="small" lineBottom color="black">
        Cards List
      </Heading>
      {cards?.map((card) => (
        <S.Card key={card.number}>
          <img src={card.img} alt={card.flag} />
          <span>{card.number}</span>
        </S.Card>
      ))}
    </S.Wrapper>
  );
};

export default CardsList;
