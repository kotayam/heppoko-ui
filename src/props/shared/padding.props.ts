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
    PaddingY,
} from "@/styles/shared/padding.css";
import { createConfig } from "@/styles/utils/resolveVariants";

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
    const xConfigs = [
        createConfig(paddingLeftVariants, pl, "paddingLeft"),
        createConfig(paddingRightVariants, pr, "paddingRight"),
    ];
    if (px) {
        xConfigs[0] = createConfig(paddingLeftVariants, px, "paddingLeft");
        xConfigs[1] = createConfig(paddingRightVariants, px, "paddingRight");
    }
    const yConfigs = [
        createConfig(paddingTopVariants, pt, "paddingTop"),
        createConfig(paddingBottomVariants, pb, "PaddingBottom"),
    ];
    if (py) {
        yConfigs[0] = createConfig(paddingTopVariants, py, "paddingTop");
        yConfigs[1] = createConfig(paddingBottomVariants, py, "paddingBottom");
    }
    return [...xConfigs, ...yConfigs];
};
