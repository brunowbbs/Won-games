import * as S from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  children,
  icon,
  size = "medium",
  fullWidth = false,
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
