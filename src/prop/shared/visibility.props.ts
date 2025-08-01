import { Visibility, visibilityVariants } from "@/style/shared/visibility.css";
import { createConfig } from "@/style/util/resolveVariants";

export type VisibilityProps = {
  visibility?: Visibility;
};

export const createVisibilityConfigs = (visibility: Visibility | undefined) => {
  const configs = [
    visibility
      ? createConfig(visibilityVariants, visibility, "visibility")
      : undefined,
  ].filter((c) => c !== undefined);
  return configs;
};
