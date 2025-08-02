import { styleVariants } from "@vanilla-extract/css";

export const displayVariants = styleVariants({
  flex: { display: "flex" },
});

export const flexDirectionVariants = styleVariants({
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },
});

export const justifyVariants = styleVariants({
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
});

export const alignVariants = styleVariants({
  start: { alignItems: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
});

export const flexWrapVariants = styleVariants({
  none: { flexWrap: "nowrap" },
  wrap: { flexWrap: "wrap" },
  reverse: { flexWrap: "wrap-reverse" },
});

export const gapVariants = styleVariants({
  none: { gap: "0" },
  md: { gap: "1rem" },
});

export const columnGapVariants = styleVariants({
  none: { columnGap: "0" },
  md: { columnGap: "1rem" },
});

export const rowGapVariants = styleVariants({
  none: { rowGap: "0" },
  md: { rowGap: "1rem" },
});

export type Display = keyof typeof displayVariants | (string & {});
export type FlexDirection = keyof typeof flexDirectionVariants | (string & {});
export type JustifyContent = keyof typeof justifyVariants | (string & {});
export type AlignItems = keyof typeof alignVariants | (string & {});
export type Wrap = keyof typeof flexWrapVariants | (string & {});
export type Gap = keyof typeof gapVariants | (string & {});
export type ColumnGap = keyof typeof columnGapVariants | (string & {});
export type RowGap = keyof typeof rowGapVariants | (string & {});
