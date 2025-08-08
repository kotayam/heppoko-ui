import React from "react";
import {
  ColorProps,
  combineStyle,
  PaddingProps,
  PositionProps,
  WrapperProps,
} from "../../common";
import { DimensionProps } from "@/props/shared/dimension.props";
import { BorderProps } from "@/props/shared/border.props";
import { MarginProps } from "@/props/shared/margin.props";

type ContainerProps = PositionProps &
  WrapperProps &
  DimensionProps &
  BorderProps &
  PaddingProps &
  MarginProps &
  ColorProps;

export const Container: React.FC<ContainerProps> = ({
  className,
  onClick,
  children,
  ...rest
}) => {
  const combinedStyle = combineStyle(rest);
  return (
    <div style={combinedStyle} className={className} onClick={onClick}>
      {children}
    </div>
  );
};
