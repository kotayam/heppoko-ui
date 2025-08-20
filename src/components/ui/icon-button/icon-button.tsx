import React, { CSSProperties } from "react";

import { ColorProps, combineStyle, CustomStyleProps } from "../../common";
import { Icon } from "../icon/icon";
import { VisibilityProps } from "@/props/shared/visibility.props";
import { DimensionProps } from "@/props/shared/dimension.props";
import { BorderProps } from "@/props/shared/border.props";
import { ShadowProps } from "@/props/shared/shadow.props";
import { MarginProps } from "@/props/shared/margin.props";
import { PaddingProps } from "@/props/shared/padding.props";

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
