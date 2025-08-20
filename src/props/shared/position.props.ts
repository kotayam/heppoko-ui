import {
  Bottom,
  bottomVariants,
  Inset,
  insetVariants,
  Left,
  leftVariants,
  Position,
  positionVariants,
  Right,
  rightVariants,
  Top,
  topVariants,
  ZIndex,
  zIndexVariants,
} from "@/styles/shared/position.css";
import { createConfig } from "@/helpers/resolve-variants";

export type PositionProps = {
  position?: Position;
  inset?: Inset;
  top?: Top;
  bottom?: Bottom;
  left?: Left;
  right?: Right;
  z?: ZIndex;
};

export const createPositionConfigs = (
  position: Position | undefined,
  inset: Inset | undefined,
  top: Top | undefined,
  bottom: Bottom | undefined,
  left: Left | undefined,
  right: Right | undefined,
  z: ZIndex | undefined,
) => {
  const configs = [
    createConfig(positionVariants, position, "position"),
    createConfig(insetVariants, inset, "inset"),
    createConfig(topVariants, top, "top"),
    createConfig(bottomVariants, bottom, "bottom"),
    createConfig(leftVariants, left, "left"),
    createConfig(rightVariants, right, "right"),
    createConfig(zIndexVariants, z, "zIndex"),
  ];
  return configs;
};
