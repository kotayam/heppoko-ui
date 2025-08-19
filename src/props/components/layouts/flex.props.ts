import { WrapperProps, ColorProps } from "@/components/common";
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
} from "@/styles/components/layouts/flex.css";
import { createConfig, VariantConfig } from "@/styles/utils/resolveVariants";
import { DimensionProps } from "@/props/shared/dimension.props";
import { PositionProps } from "@/props/shared/position.props";
import { PaddingProps } from "@/props/shared/padding.props";
import { MarginProps } from "@/props/shared/margin.props";
import { BorderProps } from "@/props/shared/border.props";
import { ShadowProps } from "@/props/shared/shadow.props";
import { OpacityProps } from "@/props/shared/opacity.props";

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
