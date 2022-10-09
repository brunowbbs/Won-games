import { RibbonSizes } from "../Ribbon/types";

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon: React.ReactNode;
  ribbonSize: RibbonSizes;
  ribbonCollor: "primary" | "secondary";
};
