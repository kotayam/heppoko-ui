import { CSSProperties } from "react";
import {
  DimensionProps,
  BorderProps,
  PositionProps,
  PaddingProps,
  MarginProps,
  ShadowProps,
  ColorProps,
  OpacityProps,
} from "@/component/common";
import { resolveVariants, VariantConfig } from "@/style/util/resolveVariants";
import {
  createVisibilityConfigs,
  VisibilityProps,
} from "./shared/visibility.props";

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
    ...createVisibilityConfigs(props.visibility),
  ];
  return resolveVariants(combinedConfigs, props.className);

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
