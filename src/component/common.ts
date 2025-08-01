import { DimensionProps } from "@/prop/shared/dimension.props";
import { VisibilityProps } from "@/prop/shared/visibility.props";
import React, { CSSProperties } from "react";

// accept inline styling and className to overriding and flexibility. Also make it clickable.
export type CustomStyleProps = {
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
};

// accept children.
export type WrapperProps = CustomStyleProps & {
  children: React.ReactNode;
};

// extract dimension props.
const getDimensionStyle = (props: StyleInputProps): CSSProperties => {
  const { width, height, minWidth, minHeight, maxWidth, maxHeight } = props;
  return { width, height, minWidth, minHeight, maxWidth, maxHeight };
};

// styling for borders.
export type BorderProps = {
  borderStyle?: CSSProperties["borderStyle"];
  borderWidth?: CSSProperties["borderWidth"];
  borderColor?: HeppokoColors | CSSProperties["borderColor"];
  borderRadius?: CSSProperties["borderRadius"];
};

// extract border props.
const getBorderStyle = (props: StyleInputProps): CSSProperties => {
  const { borderStyle, borderWidth, borderColor, borderRadius } = props;
  return {
    borderStyle,
    borderWidth,
    borderColor: getColor(borderColor),
    borderRadius,
  };
};

// styling for positioning.
export type PositionProps = {
  position?: CSSProperties["position"];
  inset?: CSSProperties["inset"];
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  z?: CSSProperties["zIndex"];
};

// extract position props.
const getPositionStyle = (props: StyleInputProps): CSSProperties => {
  const { position, inset, top, bottom, left, right, z } = props;
  return {
    position,
    inset,
    top,
    bottom,
    left,
    right,
    zIndex: z,
  };
};

// styling for paddings.
export type PaddingProps = {
  p?: CSSProperties["padding"];
  px?: string;
  py?: string;
  pt?: CSSProperties["paddingTop"];
  pb?: CSSProperties["paddingBottom"];
  pl?: CSSProperties["paddingLeft"];
  pr?: CSSProperties["paddingRight"];
};

// convert PaddingProps to CSSProperties with priority.
const getPaddingStyle = (props: StyleInputProps): CSSProperties => {
  const { p, px, py, pt, pb, pl, pr } = props;
  if (p) return { padding: p };
  const style: CSSProperties = {
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr,
  };
  if (py) {
    style.paddingTop = py;
    style.paddingBottom = py;
  }
  if (px) {
    style.paddingLeft = px;
    style.paddingRight = px;
  }
  return style;
};

// styling for margins.
export type MarginProps = {
  m?: CSSProperties["margin"];
  mx?: string;
  my?: string;
  mt?: CSSProperties["marginTop"];
  mb?: CSSProperties["marginBottom"];
  ml?: CSSProperties["marginLeft"];
  mr?: CSSProperties["marginRight"];
};

// convert MarginProps to CSSProperties with priority.
const getMarginStyle = (props: StyleInputProps): CSSProperties => {
  const { m, mx, my, mt, mb, ml, mr } = props;
  if (m) return { margin: m };
  const style: CSSProperties = {
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr,
  };
  if (my) {
    style.marginTop = my;
    style.marginBottom = my;
  }
  if (mx) {
    style.marginLeft = mx;
    style.marginRight = mx;
  }
  return style;
};

// styling for shadows.
export type ShadowProps = {
  shadow?: boolean;
};

// define box shadow style.
const shadowStyle: CSSProperties["boxShadow"] = `
0rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.6),
0rem 0.125rem 0.375rem rgba(0, 0, 0, 0.4),
0rem 0.25rem 0.75rem rgba(0, 0, 0, 0.3)
`;

// convert ShadowProps to CSSProperties.
const getShadowStyle = (props: StyleInputProps): CSSProperties => {
  const { shadow } = props;
  return {
    boxShadow: shadow ? shadowStyle : undefined,
  };
};

// styling for opacity.
export type OpacityProps = {
  opacity?: CSSProperties["opacity"];
};

// convert OpacityProps to css properties.
const getOpacityStyle = (props: StyleInputProps): CSSProperties => {
  const { opacity } = props;
  return {
    opacity,
  };
};

// convert VisibilityProps to css properties.
const getVisibilityStyle = (props: StyleInputProps): CSSProperties => {
  const { visibility } = props;
  return { visibility: visibility as CSSProperties["visibility"] };
};

// styling for colors.
export type ColorProps = {
  color?: HeppokoColors | CSSProperties["color"];
  bg?: HeppokoColors | CSSProperties["backgroundColor"];
  stroke?: HeppokoColors | CSSProperties["stroke"];
};

// define theme colors.
const heppokoColors = {
  black: "#171717",
  gray: "#757575",
  white: "#ffffff",
  red: "#eb2127",
  green: "#25cb55",
  yellow: "#ffbd0a",
  orange: "#ff8c00",
  blue: "#005aff",
  lightBlue: "#a3c4e0",
} as const;

// able to reference via color name.
type HeppokoColors = keyof typeof heppokoColors;

// try to use turing color, if not use css property.
export const getColor = (color: string | undefined) => {
  if (!color) return undefined;
  if (color in heppokoColors) {
    return heppokoColors[color as HeppokoColors];
  }
  return color;
};

// convert ColorProps to CSSProperties.
const getColorStyle = (props: StyleInputProps): CSSProperties => {
  const { color, bg, stroke } = props;
  return {
    color: getColor(color),
    backgroundColor: getColor(bg),
    stroke: getColor(stroke),
  };
};

// combine all style props.
type StyleInputProps = DimensionProps &
  BorderProps &
  PositionProps &
  PaddingProps &
  MarginProps &
  ShadowProps &
  ColorProps &
  OpacityProps &
  VisibilityProps & {
    style?: CSSProperties;
  };

// convert input props to css properties.
export const combineStyle = (props: StyleInputProps): CSSProperties => {
  const { style } = props;

  const combined = mergeStyles(
    getDimensionStyle(props),
    getBorderStyle(props),
    getPositionStyle(props),
    getPaddingStyle(props),
    getMarginStyle(props),
    getShadowStyle(props),
    getColorStyle(props),
    getOpacityStyle(props),
    getVisibilityStyle(props),
    style,
  );
  return combined;
};

const mergeStyles = (
  ...styles: Array<CSSProperties | undefined>
): CSSProperties => {
  return Object.assign(
    {},
    ...styles.map((style) =>
      Object.fromEntries(
        Object.entries(style || {}).filter(([, v]) => {
          return v !== undefined;
        }),
      ),
    ),
  );
};
