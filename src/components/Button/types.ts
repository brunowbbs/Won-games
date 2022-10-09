import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  as?: React.ElementType;
  //children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  //onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ButtonTypes;

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;
