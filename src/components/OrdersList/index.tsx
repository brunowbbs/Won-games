import Empty from "../Empty";
import GameItem from "../GameItem";
import Heading from "../Heading";
import * as S from "./styles";
import { OrdersListProps } from "./types";

const OrdersList = ({ items = [] }: OrdersListProps) => {
  return (
    <S.Wrapper>
      <Heading size="small" lineBottom color="black">
        My orders
      </Heading>

      {items?.length > 0 ? (
        items?.map((item) => <GameItem key={item.downloadLink} {...item} />)
      ) : (
        <Empty
          title="You have no orders yet"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      )}
    </S.Wrapper>
  );
};

export default OrdersList;
