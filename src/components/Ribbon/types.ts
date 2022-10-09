export type RibbonProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  size?: RibbonSizes; 
};

export type RibbonSizes = "normal" | "small";
