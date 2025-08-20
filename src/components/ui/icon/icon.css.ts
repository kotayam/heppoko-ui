import { styleVariants } from "@vanilla-extract/css";

export const fontSizeVariants = styleVariants({
  md: { fontSize: "3rem" },
});

export const strokeWidthVariants = styleVariants({
  md: { strokeWidth: "2px" },
});

export const strokeLineVariants = styleVariants({
  round: { strokeLinejoin: "round", strokeLinecap: "round" },
});

export type FontSize = keyof typeof fontSizeVariants | (string & {});
export type StrokeWidth = keyof typeof strokeWidthVariants | (string & {});
export type StrokeLine = keyof typeof strokeLineVariants;
