import { Shadow, shadowVariants } from "@/styles/shared/shadow.css";
import { createConfig } from "@/styles/utils/resolveVariants";

export type ShadowProps = {
  shadow?: Shadow;
};

export const createShadowConfigs = (shadow: Shadow | undefined) => {
  const configs = [createConfig(shadowVariants, shadow, "boxShadow")];
  return configs;
};
