import { styleVariants } from "@vanilla-extract/css";

export const widthVariants = styleVariants({
  full: { width: "100%" },
  screen: { width: "vw" },
});

export const heightVariants = styleVariants({
  full: { height: "100%" },
  screen: { height: "vh" },
});

export type Width = keyof typeof widthVariants | (string & {});
export type Height = keyof typeof heightVariants | (string & {});
