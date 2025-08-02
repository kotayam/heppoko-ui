import { styleVariants } from "@vanilla-extract/css";

export const opacityVariants = styleVariants({
  solid: { opacity: 1 },
  translucent: { opacity: 0.5 },
  transparent: { opacity: 0 },
});

export type Opacity = keyof typeof opacityVariants | number;
