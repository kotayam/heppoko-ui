import React from "react";
import {
  BorderProps,
  ColorProps,
  combineStyle,
  DimensionProps,
  MarginProps,
  PaddingProps,
  PositionProps,
  WrapperProps,
} from "../../common";

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
