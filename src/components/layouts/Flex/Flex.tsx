import { createFlexConfigs, FlexProps } from "@/props/components/flex.props";
import { resolveStyleInput } from "@/props/main.props";
import { forwardRef } from "react";

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      onClick,
      children,
      direction = "row",
      justify = "center",
      align = "center",
      gap,
      gapX = "md",
      gapY = "md",
      wrap,
      ...rest
    },
    ref,
  ) => {
    const res = resolveStyleInput(
      rest,
      createFlexConfigs(direction, justify, align, wrap, gap, gapX, gapY),
    );
    return (
      <div
        ref={ref}
        className={res.className}
        style={res.style}
        onClick={onClick}
      >
        {children}
      </div>
    );
  },
);
