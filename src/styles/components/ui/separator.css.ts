import { styleVariants } from "@vanilla-extract/css";

// TODO: use css variables if possible.
const sizes = {
    full: "100%",
    half: "50%",
} as const;

export const horizontalVariants = styleVariants(sizes, (size) => ({
    width: size,
    height: "1px",
}));

export const verticalVariants = styleVariants(sizes, (size) => ({
    width: "1px",
    height: size,
}));

export type Size = keyof typeof sizes;
