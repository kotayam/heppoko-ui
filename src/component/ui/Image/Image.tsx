import React from "react";

import {
  BorderProps,
  combineStyle,
  DimensionProps,
  ShadowProps,
} from "../../common";

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
