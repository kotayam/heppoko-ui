import { Shadow, shadowVariants } from "@/styles/shared/shadow.css";
import { createConfig } from "@/helpers/resolveVariants";

export type ShadowProps = {
  shadow?: Shadow;
};

export const createShadowConfigs = (shadow: Shadow | undefined) => {
  const configs = [createConfig(shadowVariants, shadow, "boxShadow")];
  return configs;
};
