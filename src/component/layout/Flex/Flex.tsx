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

type FlexProps = {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
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
      direction = "row",
      justify = "center",
      align = "center",
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
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align,
      flexWrap: wrap,
      ...getGap(),
    };
    const combinedStyle = {
      ...baseStyle,
      ...combineStyle(rest),
    };

    return (
      <div
        ref={ref}
        style={combinedStyle}
        className={className}
        onClick={onClick}
      >
        {children}
      </div>
    );
  },
);
