import * as S from "./styles";
import { HeadingProps } from "./types";

const Heading = ({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  size = "medium",
  lineColor = "primary",
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
