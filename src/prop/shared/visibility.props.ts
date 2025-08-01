import { Visibility, visibilityVariants } from "@/style/shared/visibility.css";
import { createConfig, VariantConfig } from "@/style/util/resolveVariants";

export type VisibilityProps = {
  visibility?: Visibility;
};

export const createVisibilityConfigs = (visibility: Visibility | undefined) => {
  const configs = [
    visibility ? createVisibilityConfig(visibility) : undefined,
  ].filter((c) => c !== undefined);
  return configs;
};

const createVisibilityConfig = (visibility: Visibility): VariantConfig => {
  return createConfig(visibilityVariants, visibility, "visibility");
};
