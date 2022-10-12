import { InputHTMLAttributes } from "react";

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
