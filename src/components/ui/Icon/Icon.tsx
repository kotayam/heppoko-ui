import React, { CSSProperties } from "react";

import {
  ColorProps,
  combineStyle,
  CustomStyleProps,
  PositionProps,
} from "../../common";

type IconProps = {
  icon: React.ElementType;
  size?: CSSProperties["fontSize"];
  strokeWidth?: CSSProperties["strokeWidth"];
  strokeLinejoin?: CSSProperties["strokeLinejoin"];
  strokeLinecap?: CSSProperties["strokeLinecap"];
} & CustomStyleProps &
  ColorProps &
  PositionProps;

export const Icon: React.FC<IconProps> = ({
  className,
  onClick,
  icon: Icon,
  size = "3rem",
  strokeWidth,
  strokeLinejoin = "round",
  strokeLinecap = "round",
  color = "white",
  ...rest
}) => {
  const baseStyle: CSSProperties = {
    fontSize: size,
    strokeWidth: strokeWidth,
    strokeLinejoin: strokeLinejoin,
    strokeLinecap: strokeLinecap,
  };
  const combinedStyle = {
    ...baseStyle,
    ...combineStyle({ color, ...rest }),
  };

  return <Icon style={combinedStyle} className={className} onClick={onClick} />;
};
