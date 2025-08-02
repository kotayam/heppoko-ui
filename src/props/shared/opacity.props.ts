import { Opacity, opacityVariants } from "@/styles/shared/opacity.css";
import { createConfig } from "@/styles/utils/resolveVariants";

export type OpacityProps = {
  opacity?: Opacity;
};

export const createOpacityConfigs = (opacity: Opacity | undefined) => {
  const configs = [createConfig(opacityVariants, opacity, "opacity")];
  return configs;
};
