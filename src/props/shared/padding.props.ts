import {
  Padding,
  PaddingBottom,
  paddingBottomVariants,
  PaddingLeft,
  paddingLeftVariants,
  PaddingRight,
  paddingRightVariants,
  PaddingTop,
  paddingTopVariants,
  paddingVariants,
  PaddingX,
  paddingXVariants,
  PaddingY,
  paddingYVariants,
} from "@/styles/shared/padding.css";
import { createConfig } from "@/helpers/resolveVariants";

export type PaddingProps = {
  p?: Padding;
  px?: PaddingX;
  py?: PaddingY;
  pl?: PaddingLeft;
  pr?: PaddingRight;
  pt?: PaddingTop;
  pb?: PaddingBottom;
};

export const createPaddingConfigs = (
  p: Padding | undefined,
  px: PaddingX | undefined,
  py: PaddingY | undefined,
  pl: PaddingLeft | undefined,
  pr: PaddingRight | undefined,
  pt: PaddingTop | undefined,
  pb: PaddingBottom | undefined,
) => {
  if (p) {
    return [createConfig(paddingVariants, p, "padding")];
  }
  let xConfigs = [
    createConfig(paddingLeftVariants, pl, "paddingLeft"),
    createConfig(paddingRightVariants, pr, "paddingRight"),
  ];
  if (px) {
    xConfigs = [
      createConfig(paddingXVariants, px, {
        paddingLeft: px,
        paddingRight: px,
      }),
    ];
  }
  let yConfigs = [
    createConfig(paddingTopVariants, pt, "paddingTop"),
    createConfig(paddingBottomVariants, pb, "PaddingBottom"),
  ];
  if (py) {
    yConfigs = [
      createConfig(paddingYVariants, py, {
        paddingTop: py,
        paddingBottom: py,
      }),
    ];
  }
  return [...xConfigs, ...yConfigs];
};
