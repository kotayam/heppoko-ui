import React, { CSSProperties } from "react";
import { ColorProps, combineStyle, WrapperProps } from "../../common";

type TextProps = {
  size?: CSSProperties["fontSize"];
  weight?: CSSProperties["fontWeight"];
  align?: CSSProperties["textAlign"];
} & WrapperProps &
  ColorProps;

export const Text: React.FC<TextProps> = ({
  className,
  onClick,
  children,
  size,
  weight,
  align,
  ...rest
}) => {
  const baseStyle: CSSProperties = {
    fontSize: size,
    fontWeight: weight,
    textAlign: align,
  };
  const combinedStyle = {
    ...baseStyle,
    ...combineStyle(rest),
  };

  return (
    <span style={combinedStyle} className={className} onClick={onClick}>
      {children}
    </span>
  );
};
