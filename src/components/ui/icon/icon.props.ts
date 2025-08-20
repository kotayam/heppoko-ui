import { ColorProps, CustomStyleProps } from "@/components/common";
import {
  FontSize,
  fontSizeVariants,
  StrokeLine,
  strokeLineVariants,
  StrokeWidth,
  strokeWidthVariants,
} from "./icon.css";
import { PositionProps } from "@/props/shared/position.props";
import { createConfig } from "@/helpers/resolve-variants";

export type IconProps = {
  icon: React.ElementType;
  size?: FontSize;
  strokeWidth?: StrokeWidth;
  strokeLine?: StrokeLine;
} & CustomStyleProps &
  ColorProps &
  PositionProps;

export const createIconConfigs = (
  size: FontSize | undefined,
  strokeWidth: StrokeWidth | undefined,
  strokeLine: StrokeLine | undefined,
) => {
  const configs = [
    createConfig(fontSizeVariants, size, "fontSize"),
    createConfig(strokeWidthVariants, strokeWidth, "strokeWidth"),
    createConfig(strokeLineVariants, strokeLine, undefined),
  ];
  return configs;
};
