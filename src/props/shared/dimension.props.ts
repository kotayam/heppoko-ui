import {
  Height,
  heightVariants,
  Width,
  widthVariants,
} from "@/styles/shared/dimension.css";
import { createConfig } from "@/styles/utils/resolveVariants";

export type DimensionProps = {
  width?: Width;
  height?: Height;
  minWidth?: Width;
  minHeight?: Height;
  maxWidth?: Width;
  maxHeight?: Height;
};

export const createDimensionConfigs = (
  width: Width | undefined,
  height: Height | undefined,
  minWidth: Width | undefined,
  minHeight: Height | undefined,
  maxWidth: Width | undefined,
  maxHeight: Height | undefined,
) => {
  const configs = [
    createConfig(widthVariants, width, "width"),
    createConfig(heightVariants, height, "height"),
    createConfig(widthVariants, minWidth, "minWidth"),
    createConfig(heightVariants, minHeight, "minHeight"),
    createConfig(widthVariants, maxWidth, "maxWidth"),
    createConfig(heightVariants, maxHeight, "maxHeight"),
  ];
  return configs;
};
