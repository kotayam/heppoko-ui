import { styleVariants } from "@vanilla-extract/css";

const createBoxShadow = (
  offsetX: number,
  offsetY: number,
  blurRadius?: number,
  spreadRadius?: number,
  color?: string,
) => {
  const br = blurRadius ? `${blurRadius}px` : "";
  const sr = spreadRadius ? `${spreadRadius}px` : "";
  return `${offsetX}px ${offsetY}px ${br} ${sr} ${color}`;
};

// TODO use color pallette
export const shadowVariants = styleVariants({
  md: {
    boxShadow: `
    ${createBoxShadow(0, 0, 0, 1, "rgba(0, 0, 0, 0.3)")},
    ${createBoxShadow(0, 2, 3, -2, "rgba(0, 0, 0, 0.3)")},
    ${createBoxShadow(0, 3, 12, -4, "rgba(0, 0, 0, 0.2)")},
    ${createBoxShadow(0, 4, 16, -8, "rgba(0, 0, 0, 0.2)")}
      `,
  },
});

export type Shadow = keyof typeof shadowVariants | (string & {});
