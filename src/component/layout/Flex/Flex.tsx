import { CSSProperties, forwardRef } from "react";
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
  FlexDirection,
  flexDirectionVariants,
  JustifyContent,
  justifyVariants,
} from "@/style/flex.css";

type FlexProps = {
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
  gapX?: CSSProperties["columnGap"];
  gapY?: CSSProperties["rowGap"];
} & WrapperProps &
  DimensionProps &
  PositionProps &
  PaddingProps &
  MarginProps &
  BorderProps &
  ColorProps &
  ShadowProps &
  OpacityProps;

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      onClick,
      children,
      direction = flexDirectionVariants["row"],
      justify = justifyVariants["center"],
      align = alignVariants["center"],
      gap,
      gapX,
      gapY,
      wrap,
      ...rest
    },
    ref,
  ) => {
    const getGap = (): CSSProperties => {
      if (gap) return { gap: gap };
      return { columnGap: gapX, rowGap: gapY };
    };
    const baseStyle: CSSProperties = {
      display: "flex",
      alignItems: align,
      flexWrap: wrap,
      ...getGap(),
    };
    const combinedStyle = {
      ...baseStyle,
      ...combineStyle(rest),
    };
    const combinedClass = [direction, justify, align, className].join(" ");

    return (
      <div
        ref={ref}
        style={combinedStyle}
        className={combinedClass}
        onClick={onClick}
      >
        {children}
      </div>
    );
  },
);
