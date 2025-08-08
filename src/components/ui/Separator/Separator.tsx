import React, { CSSProperties } from "react";

import { ColorProps, combineStyle, CustomStyleProps } from "../../common";
import { OpacityProps } from "@/props/shared/opacity.props";
import { MarginProps } from "@/props/shared/margin.props";

type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  length?: CSSProperties["height"] | CSSProperties["width"];
  thickness?: CSSProperties["height"] | CSSProperties["width"];
} & CustomStyleProps &
  MarginProps &
  ColorProps &
  OpacityProps;

export const Separator: React.FC<SeparatorProps> = ({
  className,
  orientation = "horizontal",
  length = "100%",
  thickness = "1px",
  bg = "white",
  opacity = 0.8,
  m = "0.5rem",
  ...rest
}) => {
  const getSeparatorStyle = (): CSSProperties => {
    if (orientation === "horizontal") {
      return {
        width: length,
        height: thickness,
      };
    } else {
      return { width: thickness, height: length };
    }
  };
  const baseStyle: CSSProperties = {
    ...getSeparatorStyle(),
  };
  const combinedStyle = {
    ...baseStyle,
    ...combineStyle({ bg, opacity, m, ...rest }),
  };

  return <div style={combinedStyle} className={className}></div>;
};
