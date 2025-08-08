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

export const marginVariants = styleVariants(spacing, (spacing) => ({
  margin: spacing,
}));

export const marginTopVariants = styleVariants(spacing, (spacing) => ({
  marginTop: spacing,
}));

export const marginBottomVariants = styleVariants(spacing, (spacing) => ({
  marginBottom: spacing,
}));

export const marginLeftVariants = styleVariants(spacing, (spacing) => ({
  marginLeft: spacing,
}));

export const marginRightVariants = styleVariants(spacing, (spacing) => ({
  marginRight: spacing,
}));

export type Margin = keyof typeof marginVariants | number | (string & {});
export type MarginX = keyof typeof spacing | number | (string & {});
export type MarginY = keyof typeof spacing | number | (string & {});
export type MarginTop = keyof typeof marginTopVariants | number | (string & {});
export type MarginBottom =
  | keyof typeof marginBottomVariants
  | number
  | (string & {});
export type MarginLeft =
  | keyof typeof marginLeftVariants
  | number
  | (string & {});
export type MarginRight =
  | keyof typeof marginRightVariants
  | number
  | (string & {});
