import { styleVariants } from "@vanilla-extract/css";

// TODO: create variable instead.
const spacing = {
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "24px",
  "6": "32px",
  "7": "40px",
  "8": "48px",
  "9": "64px",
} as const;

export const paddingVariants = styleVariants(spacing, (spacing) => ({
  padding: spacing,
}));

export const paddingTopVariants = styleVariants(spacing, (spacing) => ({
  paddingTop: spacing,
}));

export const paddingBottomVariants = styleVariants(spacing, (spacing) => ({
  paddingBottom: spacing,
}));

export const paddingLeftVariants = styleVariants(spacing, (spacing) => ({
  paddingLeft: spacing,
}));

export const paddingRightVariants = styleVariants(spacing, (spacing) => ({
  paddingRight: spacing,
}));

export type Padding = keyof typeof paddingVariants | number | (string & {});
export type PaddingX = keyof typeof spacing | number | (string & {});
export type PaddingY = keyof typeof spacing | number | (string & {});
export type PaddingTop =
  | keyof typeof paddingTopVariants
  | number
  | (string & {});
export type PaddingBottom =
  | keyof typeof paddingBottomVariants
  | number
  | (string & {});
export type PaddingLeft =
  | keyof typeof paddingLeftVariants
  | number
  | (string & {});
export type PaddingRight =
  | keyof typeof paddingRightVariants
  | number
  | (string & {});
