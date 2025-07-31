import { styleVariants } from "@vanilla-extract/css";

export const displayVariants = styleVariants({
  flex: { display: "flex" },
});

export type Display = keyof typeof displayVariants | string;

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

export const flexWrapVariants = styleVariants({
  none: { flexWrap: "nowrap" },
  wrap: { flexWrap: "wrap" },
  reverse: { flexWrap: "wrap-reverse" },
});

export type Wrap = keyof typeof flexWrapVariants | string;

export const gapVariants = styleVariants({
  none: { gap: "0" },
  md: { gap: "1rem" },
});

export type Gap = keyof typeof gapVariants | string;

export const columnGapVariants = styleVariants({
  none: { columnGap: "0" },
  md: { columnGap: "1rem" },
});

export type ColumnGap = keyof typeof columnGapVariants | string;

export const rowGapVariants = styleVariants({
  none: { rowGap: "0" },
  md: { rowGap: "1rem" },
});

export type RowGap = keyof typeof rowGapVariants | string;
