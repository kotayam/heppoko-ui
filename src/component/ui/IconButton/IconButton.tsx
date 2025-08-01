import React, { CSSProperties } from "react";

import {
  BorderProps,
  ColorProps,
  combineStyle,
  CustomStyleProps,
  DimensionProps,
  MarginProps,
  PaddingProps,
  ShadowProps,
} from "../../common";
import { Icon } from "../Icon/Icon";
import { VisibilityProps } from "@/prop/shared/visibility.props";

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
    ...combineStyle({
      borderStyle,
      borderRadius,
      borderWidth,
      borderColor,
      bg,
      width,
      height,
      shadow,
      ...rest,
    }),
  };

  return (
    <button style={combinedStyle} className={className} onClick={onClick}>
      {icon}
    </button>
  );
};
