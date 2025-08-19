import { styleVariants } from "@vanilla-extract/css";

// TODO: create variable instead.
const spacing = {
    "0": "0",
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

export const positionVariants = styleVariants({
    static: { position: "static" },
    relative: { position: "relative" },
    absolute: { position: "absolute" },
    fixed: { position: "fixed" },
    sticky: { position: "sticky" },
});

export const insetVariants = styleVariants(spacing, (spacing) => ({
    inset: spacing,
}));

export const topVariants = styleVariants(spacing, (spacing) => ({
    top: spacing,
}));

export const bottomVariants = styleVariants(spacing, (spacing) => ({
    bottom: spacing,
}));

export const leftVariants = styleVariants(spacing, (spacing) => ({
    left: spacing,
}));

export const rightVariants = styleVariants(spacing, (spacing) => ({
    right: spacing,
}));

export const zIndexVariants = styleVariants({
    auto: { zIndex: "auto" },
    "0": { zIndex: 0 },
    "1": { zIndex: 1 },
});

export type Position = keyof typeof positionVariants | (string & {});
export type Inset = keyof typeof insetVariants | (string & {});
export type Top = keyof typeof topVariants | (string & {});
export type Bottom = keyof typeof bottomVariants | (string & {});
export type Left = keyof typeof leftVariants | (string & {});
export type Right = keyof typeof rightVariants | (string & {});
export type ZIndex = keyof typeof zIndexVariants | number | (string & {});
