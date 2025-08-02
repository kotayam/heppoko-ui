import { styleVariants } from "@vanilla-extract/css";

export const visibilityVariants = styleVariants({
  visible: { visibility: "visible" },
  hidden: { visibility: "hidden" },
});

export type Visibility = keyof typeof visibilityVariants | (string & {});
