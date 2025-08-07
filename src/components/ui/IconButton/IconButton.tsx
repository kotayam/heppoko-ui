import React, { CSSProperties } from "react";

import {
  ColorProps,
  combineStyle,
  CustomStyleProps,
  MarginProps,
  PaddingProps,
} from "../../common";
import { Icon } from "../Icon/Icon";
import { VisibilityProps } from "@/props/shared/visibility.props";
import { DimensionProps } from "@/props/shared/dimension.props";
import { BorderProps } from "@/props/shared/border.props";
import { ShadowProps } from "@/props/shared/shadow.props";

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
  shadow = "md",
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
