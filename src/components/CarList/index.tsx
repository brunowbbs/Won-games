import GameItem from "../GameItem";
import * as S from "./styles";
import { CartListProps } from "./types";

const CartList = ({ items, total }: CartListProps) => {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <GameItem key={item.title} {...item} />
      ))}

      <S.Footer>
        Total
        <S.Total>{total}</S.Total>
      </S.Footer>
    </S.Wrapper>
  );
};

export default CartList;
