import {
    horizontalVariants,
    Size,
    verticalVariants,
} from "@/styles/components/ui/separator.css";
import { createConfig } from "@/styles/utils/resolveVariants";

type Orientation = "horizontal" | "vertical";

export type SeparatorProps = {
    orientation?: Orientation;
    size?: Size;
};

export const createSeparatorConfigs = (
    orientation: Orientation | undefined,
    size: Size | undefined,
) => {
    const o: Orientation = orientation ? orientation : "horizontal";
    const s: Size = size ? size : "full";
    if (o === "horizontal") {
        return [createConfig(horizontalVariants, s, undefined)];
    } else {
        return [createConfig(verticalVariants, s, undefined)];
    }
};
