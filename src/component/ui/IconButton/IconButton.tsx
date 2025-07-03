import React, { CSSProperties } from "react";
import {
  CustomStyleProps,
  BorderProps,
  DimensionProps,
  MarginProps,
  PaddingProps,
  ColorProps,
  ShadowProps,
  combineStyle,
  VisibilityProps,
} from "../../common";
import { Icon } from "../Icon/Icon";

type IconButtonProps = {
  icon: React.ReactElement<typeof Icon>;
} & CustomStyleProps &
  DimensionProps &
  BorderProps &
  MarginProps &
  PaddingProps &
  ColorProps &
  ShadowProps &
  VisibilityProps;

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  onClick,
  icon,
  borderStyle = "solid",
  borderRadius = "1rem",
  borderWidth = "2px",
  borderColor = "green",
  bg = "black",
  width = "5rem",
  height = "5rem",
  shadow = true,
  ...rest
}) => {
  const baseStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };
  const combinedStyle = {
    ...baseStyle,
    ...combineStyle({ borderStyle, borderRadius, borderWidth, borderColor, bg, width, height, shadow, ...rest }),
  };

  return (
    <button style={combinedStyle} className={className} onClick={onClick}>
      {icon}
    </button>
  );
};
