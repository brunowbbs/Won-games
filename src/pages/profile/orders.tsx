import OrdersList from "src/components/OrdersList";
import { orderListMock } from "src/components/OrdersList/mock";
import { OrdersListProps } from "src/components/OrdersList/types";
import Profile from "src/templates/Profile";

export default function OrdersPage({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      items: orderListMock,
    },
  };
}
