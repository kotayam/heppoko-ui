import React from "react";
import { ImageProps } from "./image.props";
import { resolveStyleInput } from "@/helpers/resolveStyleInput";

export const Image: React.FC<ImageProps> = ({ onClick, src, alt, ...rest }) => {
  const res = resolveStyleInput(rest, []);
  return (
    <img
      src={src}
      alt={alt}
      className={res.className}
      style={res.style}
      onClick={onClick}
    />
  );
};
