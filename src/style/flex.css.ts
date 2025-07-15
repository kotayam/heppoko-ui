import { styleVariants } from "@vanilla-extract/css";

export const flexDirectionVariants = styleVariants({
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },
});

export type FlexDirection = keyof typeof flexDirectionVariants | string;

export const justifyVariants = styleVariants({
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
});

export type JustifyContent = keyof typeof justifyVariants | string;

export const alignVariants = styleVariants({
  start: { alignItems: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
});

export type AlignItems = keyof typeof alignVariants | string;
