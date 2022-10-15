import { useState } from "react";

import * as S from "./styles";
import { TextFieldProps } from "./types";

const TextField = ({
  icon,
  iconPosition = "left",
  label,
  initialValue = "",
  disabled,
  error,
  name,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          disabled={disabled}
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
