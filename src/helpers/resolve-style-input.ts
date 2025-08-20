import { CSSProperties } from "react";
import { ColorProps } from "@/components/common";
import { resolveVariants, VariantConfig } from "./resolve-variants";
import {
  createVisibilityConfigs,
  VisibilityProps,
} from "@/props/shared/visibility.props";
import {
  createDimensionConfigs,
  DimensionProps,
} from "@/props/shared/dimension.props";
import {
  createOpacityConfigs,
  OpacityProps,
} from "@/props/shared/opacity.props";
import { BorderProps, createBorderConfigs } from "@/props/shared/border.props";
import { createShadowConfigs, ShadowProps } from "@/props/shared/shadow.props";
import { createMarginConfigs, MarginProps } from "@/props/shared/margin.props";
import {
  createPaddingConfigs,
  PaddingProps,
} from "@/props/shared/padding.props";
import {
  createPositionConfigs,
  PositionProps,
} from "@/props/shared/position.props";

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
    ...createPositionConfigs(
      props.position,
      props.inset,
      props.top,
      props.bottom,
      props.left,
      props.right,
      props.z,
    ),
    ...createPaddingConfigs(
      props.p,
      props.px,
      props.py,
      props.pl,
      props.pr,
      props.pt,
      props.pb,
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
