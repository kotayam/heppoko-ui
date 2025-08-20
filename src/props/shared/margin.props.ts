import {
  Margin,
  MarginBottom,
  marginBottomVariants,
  MarginLeft,
  marginLeftVariants,
  MarginRight,
  marginRightVariants,
  MarginTop,
  marginTopVariants,
  marginVariants,
  MarginX,
  marginXVariants,
  MarginY,
  marginYVariants,
} from "@/styles/shared/margin.css";
import { createConfig } from "@/helpers/resolve-variants";

export type MarginProps = {
  m?: Margin;
  mx?: MarginX;
  my?: MarginY;
  ml?: MarginLeft;
  mr?: MarginRight;
  mt?: MarginTop;
  mb?: MarginBottom;
};

export const createMarginConfigs = (
  m: Margin | undefined,
  mx: MarginX | undefined,
  my: MarginY | undefined,
  ml: MarginLeft | undefined,
  mr: MarginRight | undefined,
  mt: MarginTop | undefined,
  mb: MarginBottom | undefined,
) => {
  if (m) {
    return [createConfig(marginVariants, m, "margin")];
  }
  let xConfigs = [
    createConfig(marginLeftVariants, ml, "marginLeft"),
    createConfig(marginRightVariants, mr, "marginRight"),
  ];
  if (mx) {
    xConfigs = [
      createConfig(marginXVariants, mx, {
        marginLeft: mx,
        marginRight: mx,
      }),
    ];
  }
  let yConfigs = [
    createConfig(marginTopVariants, mt, "marginTop"),
    createConfig(marginBottomVariants, mb, "marginBottom"),
  ];
  if (my) {
    yConfigs = [
      createConfig(marginYVariants, my, {
        marginTop: my,
        marginBottom: my,
      }),
    ];
  }
  return [...xConfigs, ...yConfigs];
};
