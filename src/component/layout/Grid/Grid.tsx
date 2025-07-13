import { CSSProperties, forwardRef } from "react";
import {
  BorderProps,
  ColorProps,
  combineStyle,
  DimensionProps,
  MarginProps,
  PaddingProps,
  ShadowProps,
  WrapperProps,
} from "../../common";

type GridProps = {
  templateColumns?: CSSProperties["gridTemplateColumns"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  gapX?: CSSProperties["columnGap"];
  gapY?: CSSProperties["rowGap"];
} & WrapperProps &
  PaddingProps &
  MarginProps &
  DimensionProps &
  BorderProps &
  ColorProps &
  ShadowProps;

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      onClick,
      children,
      templateColumns,
      justify = "center",
      align = "center",
      gap,
      gapX,
      gapY,
      ...rest
    },
    ref,
  ) => {
    // give gap priority.
    const getGap = (): CSSProperties => {
      if (gap) return { gap: gap };
      return {
        columnGap: gapX,
        rowGap: gapY,
      };
    };
    const baseStyle: CSSProperties = {
      display: "grid",
      gridTemplateColumns: templateColumns,
      justifyContent: justify,
      alignItems: align,
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
