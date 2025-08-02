import { Visibility, visibilityVariants } from "@/styles/shared/visibility.css";
import { createConfig } from "@/styles/utils/resolveVariants";

export type VisibilityProps = {
  visibility?: Visibility;
};

export const createVisibilityConfigs = (visibility: Visibility | undefined) => {
  const configs = [createConfig(visibilityVariants, visibility, "visibility")];
  return configs;
};
