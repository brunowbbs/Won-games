import { InputHTMLAttributes } from "react";

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;
