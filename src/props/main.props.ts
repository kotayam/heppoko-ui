import { CSSProperties } from "react";
import { PositionProps, PaddingProps, ColorProps } from "@/components/common";
import { resolveVariants, VariantConfig } from "@/styles/utils/resolveVariants";
import {
  createVisibilityConfigs,
  VisibilityProps,
} from "./shared/visibility.props";
import {
  createDimensionConfigs,
  DimensionProps,
} from "./shared/dimension.props";
import {
  createOpacityConfigs,
  OpacityProps,
} from "@/props/shared/opacity.props";
import { BorderProps, createBorderConfigs } from "./shared/border.props";
import { createShadowConfigs, ShadowProps } from "./shared/shadow.props";
import { createMarginConfigs, MarginProps } from "./shared/margin.props";

// combine all shared style props.
export type StyleInputProps = DimensionProps &
  BorderProps &
  PositionProps &
  PaddingProps &
  MarginProps &
  ShadowProps &
  ColorProps &
  OpacityProps &
  VisibilityProps & {
    style?: CSSProperties;
    className?: string;
  };

export const resolveStyleInput = (
  props: StyleInputProps,
  componentConfigs: VariantConfig[],
) => {
  // TODO: Add config creation for other shared props
  const combinedConfigs = [
    ...componentConfigs,
    ...createDimensionConfigs(
      props.width,
      props.height,
      props.minWidth,
      props.minHeight,
      props.maxWidth,
      props.maxHeight,
    ),
    ...createBorderConfigs(
      props.borderStyle,
      props.borderWidth,
      props.borderColor,
      props.borderRadius,
    ),
    ...createMarginConfigs(
      props.m,
      props.mx,
      props.my,
      props.ml,
      props.mr,
      props.mt,
      props.mb,
    ),
    ...createShadowConfigs(props.shadow),
    ...createOpacityConfigs(props.opacity),
    ...createVisibilityConfigs(props.visibility),
  ];
  return resolveVariants(combinedConfigs, props.className, props.style);

  // const combined = mergeStyles(
  //     getDimensionStyle(props),
  //     getBorderStyle(props),
  //     getPositionStyle(props),
  //     getPaddingStyle(props),
  //     getMarginStyle(props),
  //     getShadowStyle(props),
  //     getColorStyle(props),
  //     getOpacityStyle(props),
  //     getVisibilityStyle(props),
  //     style,
  // );
};
