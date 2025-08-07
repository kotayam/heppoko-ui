import {
  WrapperProps,
  PaddingProps,
  MarginProps,
  ColorProps,
  PositionProps,
} from "@/components/common";
import {
  AlignItems,
  alignVariants,
  ColumnGap,
  columnGapVariants,
  displayVariants,
  FlexDirection,
  flexDirectionVariants,
  flexWrapVariants,
  Gap,
  gapVariants,
  JustifyContent,
  justifyVariants,
  RowGap,
  rowGapVariants,
  Wrap,
} from "@/styles/components/flex.css";
import { createConfig, VariantConfig } from "@/styles/utils/resolveVariants";
import { DimensionProps } from "../shared/dimension.props";
import { OpacityProps } from "../shared/opacity.props";
import { BorderProps } from "../shared/border.props";
import { ShadowProps } from "../shared/shadow.props";

export type FlexProps = {
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: Wrap;
  gap?: Gap;
  gapX?: ColumnGap;
  gapY?: RowGap;
} & WrapperProps &
  DimensionProps &
  PositionProps &
  PaddingProps &
  MarginProps &
  BorderProps &
  ColorProps &
  ShadowProps &
  OpacityProps;

export const createFlexConfigs = (
  direction: FlexDirection,
  justify: JustifyContent,
  align: AlignItems,
  wrap: Wrap | undefined,
  gap: Gap | undefined,
  gapX: ColumnGap,
  gapY: RowGap,
): VariantConfig[] => {
  const gapConfig = [];
  if (gap) {
    gapConfig.push(createConfig(gapVariants, gap, "gap"));
  } else {
    gapConfig.push(createConfig(columnGapVariants, gapX, "columnGap"));
    gapConfig.push(createConfig(rowGapVariants, gapY, "rowGap"));
  }

  const configs = [
    createConfig(flexDirectionVariants, direction, "flexDirection"),
    createConfig(alignVariants, align, "alignItems"),
    createConfig(displayVariants, "flex", "display"),
    createConfig(justifyVariants, justify, "justifyContent"),
    createConfig(flexWrapVariants, wrap, "flexWrap"),
    ...gapConfig,
  ];
  return configs;
};
