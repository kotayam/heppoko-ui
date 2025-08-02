import { styleVariants } from "@vanilla-extract/css";

export const borderStyleVariants = styleVariants({
    none: { borderStyle: "none" },
    solid: { borderStyle: "solid" },
    dotted: { borderStyle: "dotted" },
    dashed: { borderStyle: "dashed" },
});

export const borderWidthVariants = styleVariants({
    sm: { borderWidth: "1px" },
    md: { borderWidth: "2px" },
    lg: { borderWidth: "4px" },
});

export const borderColorVariants = styleVariants({
    // TODO: use color pallette
});

export const borderRadiusVariants = styleVariants({
    full: { borderRadius: "50%" },
});

export type BorderStyle = keyof typeof borderStyleVariants | (string & {});
export type BorderWidth = keyof typeof borderWidthVariants | (string & {});
export type BorderColor = keyof typeof borderColorVariants | (string & {});
export type BorderRadius = keyof typeof borderRadiusVariants | (string & {});
