import React from "react";

import { combineStyle } from "../../common";
import { DimensionProps } from "@/props/shared/dimension.props";
import { BorderProps } from "@/props/shared/border.props";
import { ShadowProps } from "@/props/shared/shadow.props";

type ImageProps = {
  src: string;
  alt: string;
} & BorderProps &
  DimensionProps &
  ShadowProps;

export const Image: React.FC<ImageProps> = ({ src, alt, ...rest }) => {
  const combinedStyle = combineStyle(rest);
  return <img src={src} alt={alt} style={combinedStyle} />;
};
