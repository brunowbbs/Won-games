import { useState } from "react";
import { MdAdd, MdOutlineShoppingCart } from "react-icons/md";
import Button from "../Button";
import Heading from "../Heading";
import Radio from "../Radio";
import * as S from "./styles";
import { PaymentOptionsProps } from "./types";

const PaymentOptions = ({ handlePayment, cards }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" lineBottom size="small">
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-cart"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <MdAdd size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<MdOutlineShoppingCart />}
          disabled={!checked}
          onClick={handlePayment}
        >
          Buy Now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentOptions;
