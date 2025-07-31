import { cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  BorderProps,
  ColorProps,
  combineStyle,
  DimensionProps,
  getColor,
  MarginProps,
  OpacityProps,
  PaddingProps,
  PositionProps,
  ShadowProps,
  VisibilityProps,
} from "./common";

describe("Flex", () => {
  afterEach(() => {
    cleanup();
  });

  const dimension: DimensionProps = {
    width: "100%",
    height: "100%",
  };
  const border: BorderProps = {
    borderColor: "black",
  };

  const position: PositionProps = {
    z: 2,
  };

  const padding: PaddingProps = {
    p: "1rem",
    px: "2rem",
    py: "3rem",
  };

  const margin: MarginProps = {
    m: "1rem",
    mx: "2rem",
    my: "3rem",
  };

  const shadow: ShadowProps = {
    shadow: true,
  };

  const opacity: OpacityProps = {
    opacity: 0.75,
  };

  const visibility: VisibilityProps = {
    visibility: "hidden",
  };

  const color: ColorProps = {
    color: "red",
    bg: "blue",
    stroke: "green",
  };

  const styleInput = {
    ...dimension,
    ...border,
    ...position,
    ...padding,
    ...margin,
    ...shadow,
    ...opacity,
    ...visibility,
    ...color,
  };

  it("custom names are converted to css properties", () => {
    const style = combineStyle(styleInput);
    expect(style.zIndex).toBe(2);
    expect(style.padding).toBe("1rem");
    expect(style.paddingTop).toBeUndefined();
    expect(style.paddingBottom).toBeUndefined();
    expect(style.margin).toBe("1rem");
    expect(style.marginTop).toBeUndefined();
    expect(style.marginBottom).toBeUndefined();
    expect(style.boxShadow).toBeDefined();
    expect(style.borderColor).toBe(getColor("black"));
    expect(style.color).toBe(getColor("red"));
    expect(style.backgroundColor).toBe(getColor("blue"));
    expect(style.stroke).toBe(getColor("green"));
  });

  it("undefined values are filtered from output", () => {
    const style = combineStyle(styleInput);
    for (const value of Object.values(style)) {
      expect(value).toBeDefined();
    }
  });
});
