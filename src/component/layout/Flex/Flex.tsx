import { forwardRef } from "react";
import {
  WrapperProps,
  BorderProps,
  DimensionProps,
  PaddingProps,
  MarginProps,
  ShadowProps,
  combineStyle,
  ColorProps,
  OpacityProps,
  PositionProps,
} from "../../common";
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
} from "@/style/component/flex.css";
import { createConfig, resolveVariants } from "@/style/util/resolveVariants";

type FlexProps = {
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

const resolveFlexProps = (
  className: string | undefined,
  direction: FlexDirection,
  justify: JustifyContent,
  align: AlignItems,
  wrap: Wrap | undefined,
  gap: Gap,
  gapX: ColumnGap | undefined,
  gapY: RowGap | undefined,
) => {
  return resolveVariants(
    [
      createConfig(displayVariants, "flex", "display"),
      createConfig(flexDirectionVariants, direction, "flexDirection"),
      createConfig(alignVariants, align, "alignItems"),
      createConfig(justifyVariants, justify, "justifyContent"),
      createConfig(flexWrapVariants, wrap, "flexWrap"),
      createConfig(gapVariants, gap, "gap"),
      createConfig(columnGapVariants, gapX, "columnGap"),
      createConfig(rowGapVariants, gapY, "rowGap"),
    ],
    className,
  );
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      onClick,
      children,
      direction = flexDirectionVariants["row"],
      justify = justifyVariants["center"],
      align = alignVariants["center"],
      gap = gapVariants["md"],
      gapX,
      gapY,
      wrap,
      ...rest
    },
    ref,
  ) => {
    const res = resolveFlexProps(
      className,
      direction,
      justify,
      align,
      wrap,
      gap,
      gapX,
      gapY,
    );
    return (
      <div
        ref={ref}
        className={res.className}
        style={{ ...res.style, ...combineStyle(rest) }}
        onClick={onClick}
      >
        {children}
      </div>
    );
  },
);
