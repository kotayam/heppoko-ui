import { CSSProperties, forwardRef } from "react";
import { combineStyle, PaddingProps, WrapperProps } from "../../common";
import styles from "./ScrollArea.module.css";
import { DimensionProps } from "@/props/shared/dimension.props";
import { MarginProps } from "@/props/shared/margin.props";

type ScrollBarDirection = "horizontal" | "vertical" | "both";

type ScrollAreaProps = {
  scrollbar?: ScrollBarDirection;
  scrollbarGutter?: CSSProperties["scrollbarGutter"];
} & WrapperProps &
  DimensionProps &
  PaddingProps &
  MarginProps;

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      children,
      className,
      onClick,
      scrollbar = "both",
      scrollbarGutter = "stable",
      ...rest
    },
    ref,
  ) => {
    const getOverflowStyle = (): CSSProperties => {
      switch (scrollbar) {
        case "vertical":
          return { overflowX: "hidden", overflowY: "auto" };
        case "horizontal":
          return { overflowX: "auto", overflowY: "hidden" };
        case "both":
          return { overflow: "auto" };
      }
    };
    const baseStyle: CSSProperties = {
      ...getOverflowStyle(),
      scrollbarGutter: scrollbarGutter,
    };
    const combinedStyle: CSSProperties = {
      ...baseStyle,
      ...combineStyle(rest),
    };

    return (
      <div
        ref={ref}
        style={combinedStyle}
        className={`${styles.scrollArea} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  },
);
