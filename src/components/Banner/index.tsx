import Button from "../Button";
import Ribbon from "../Ribbon";
import * as S from "./styles";
import { BannerProps } from "./types";

const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subtitle,
  title,
  ribbon,
  ribbonCollor = "primary",
  ribbonSize = "normal",
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonCollor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
);

export default Banner;
