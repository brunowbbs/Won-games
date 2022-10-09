import Button from "../Button";
import * as S from "./styles";
import { HighlightProps } from "./types";

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  floatImage,
  buttonLink,
  backgroundImage,
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
);

export default Highlight;
