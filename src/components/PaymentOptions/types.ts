export type PaymentCart = {
  number: string;
  flag: string;
  img: string;
};

export type PaymentOptionsProps = {
  cards?: PaymentCart[];
  handlePayment: () => void;
};
