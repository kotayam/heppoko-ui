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
  MarginY,
} from "@/styles/shared/margin.css";
import { createConfig } from "@/styles/utils/resolveVariants";

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
  const xConfigs = [
    createConfig(marginLeftVariants, ml, "marginLeft"),
    createConfig(marginRightVariants, mr, "marginRight"),
  ];
  if (mx) {
    xConfigs[0] = createConfig(marginLeftVariants, mx, "marginLeft");
    xConfigs[1] = createConfig(marginRightVariants, mx, "marginRight");
  }
  const yConfigs = [
    createConfig(marginTopVariants, mt, "marginTop"),
    createConfig(marginBottomVariants, mb, "marginBottom"),
  ];
  if (my) {
    yConfigs[0] = createConfig(marginTopVariants, my, "marginTop");
    yConfigs[1] = createConfig(marginBottomVariants, my, "marginBottom");
  }
};
