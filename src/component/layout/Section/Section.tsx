import { CSSProperties, forwardRef } from "react";
import { combineStyle, PositionProps, WrapperProps } from "../../common";

type SectionLocation = "tl" | "tm" | "tr" | "bl" | "bm" | "br" | "lm" | "rm";

type SectionProps = {
  location?: SectionLocation;
} & WrapperProps &
  PositionProps;

export const commonTop: CSSProperties["top"] = "max(0.5rem, env(safe-area-inset-top))";
export const commonBottom: CSSProperties["bottom"] = "max(0.5rem, env(safe-area-inset-bottom))";
export const commonLeft: CSSProperties["left"] = "max(0.5rem, env(safe-area-inset-left))";
export const commonRight: CSSProperties["right"] = "max(0.5rem, env(safe-area-inset-right))";
export const middle = "50%";
export const centerX: CSSProperties["transform"] = "translateX(-50%)";
export const centerY: CSSProperties["transform"] = "translateY(-50%)";

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, onClick, location, top, bottom, left, right, ...rest }, ref) => {
    const getSectionStyle = (): CSSProperties => {
      switch (location) {
        case "tl":
          return { top: commonTop, left: commonLeft };
        case "tm":
          return { top: commonTop, left: middle, transform: centerX };
        case "tr":
          return { top: commonTop, right: commonRight };
        case "bl":
          return { bottom: commonBottom, left: commonLeft };
        case "bm":
          return { bottom: commonBottom, left: middle, transform: centerX };
        case "br":
          return { bottom: commonBottom, right: commonRight };
        case "lm":
          return { left: commonLeft, top: middle, transform: centerY };
        case "rm":
          return { right: commonRight, top: middle, transform: centerY };
        default:
          return { top: top, bottom: bottom, left: left, right: right };
      }
    };
    const baseStyle: CSSProperties = {
      position: "absolute",
      ...getSectionStyle(),
    };
    const combinedStyle: CSSProperties = {
      ...baseStyle,
      ...combineStyle(rest),
    };

    return (
      <div ref={ref} style={combinedStyle} className={className} onClick={onClick}>
        {children}
      </div>
    );
  },
);
