import React from "react";
import { IconButtonProps } from "./icon-button.props";
import { resolveStyleInput } from "@/helpers/resolve-style-input";
import { base } from "./icon-button.css";

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  borderStyle = "solid",
  borderRadius = "1rem",
  borderWidth = "md",
  width = "5rem",
  height = "5rem",
  shadow = "md",
  ...rest
}) => {
  const res = resolveStyleInput(
    {
      borderStyle: borderStyle,
      borderRadius: borderRadius,
      borderWidth: borderWidth,
      width: width,
      height: height,
      shadow: shadow,
      ...rest,
    },
    [],
  );

  return (
    <button
      className={[base, res.className].join(" ")}
      style={res.style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
