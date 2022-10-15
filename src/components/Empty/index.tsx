import Link from "next/link";
import Button from "../Button";
import * as S from "./styles";
import { EmptyProps } from "./type";

const Empty = ({ title, description, hasLink }: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Image
        src="img/empty.svg"
        role="img"
        alt="A gammer in a couch playing videogame"
      />

      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>

      {hasLink && (
        <Link href="/" passHref>
          <Button as="a">Go back to store</Button>
        </Link>
      )}
    </S.Wrapper>
  );
};

export default Empty;
