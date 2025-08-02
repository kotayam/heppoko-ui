import React from "react";
import {
  BorderProps,
  ColorProps,
  combineStyle,
  MarginProps,
  PaddingProps,
  PositionProps,
  WrapperProps,
} from "../../common";
import { DimensionProps } from "@/props/shared/dimension.props";

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
