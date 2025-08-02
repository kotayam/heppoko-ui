import {
  BorderColor,
  borderColorVariants,
  BorderRadius,
  borderRadiusVariants,
  BorderStyle,
  borderStyleVariants,
  BorderWidth,
  borderWidthVariants,
} from "@/styles/shared/border.css";
import { createConfig } from "@/styles/utils/resolveVariants";

export type BorderProps = {
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  borderColor?: BorderColor;
  borderRadius?: BorderRadius;
};

export const createBorderConfigs = (
  borderStyle: BorderStyle | undefined,
  borderWidth: BorderWidth | undefined,
  borderColor: BorderColor | undefined,
  borderRadius: BorderRadius | undefined,
) => {
  const configs = [
    createConfig(borderStyleVariants, borderStyle, "borderStyle"),
    createConfig(borderWidthVariants, borderWidth, "borderWidth"),
    createConfig(borderColorVariants, borderColor, "borderColor"),
    createConfig(borderRadiusVariants, borderRadius, "borderRadius"),
  ];
  return configs;
};
