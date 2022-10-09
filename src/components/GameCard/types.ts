import { RibbonSizes } from "../Ribbon/types";

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  ribbon?: React.ReactNode;
  ribbonColor?: "primary" | "secondary";
  ribbonSize?: RibbonSizes;
  onFav?: () => void;
};
