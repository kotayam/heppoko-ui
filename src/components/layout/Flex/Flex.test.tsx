import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Flex } from "./Flex";
import {
  alignVariants,
  columnGapVariants,
  displayVariants,
  flexDirectionVariants,
  gapVariants,
  justifyVariants,
  rowGapVariants,
} from "@/style/component/flex.css";

describe("Flex", () => {
  afterEach(() => {
    cleanup();
  });

  it("default is centered horizontally", () => {
    render(<Flex>test</Flex>);
    const div = screen.getByText("test");
    expect(div).toHaveClass(displayVariants["flex"]);
    expect(div).toHaveClass(flexDirectionVariants["row"]);
    expect(div).toHaveClass(justifyVariants["center"]);
    expect(div).toHaveClass(alignVariants["center"]);
    expect(div).toHaveClass(columnGapVariants["md"]);
    expect(div).toHaveClass(rowGapVariants["md"]);
  });

  it("gap overwrites gapX and gapY", () => {
    render(
      <Flex gapX={"1rem"} gapY={"2rem"} gap={"md"}>
        test
      </Flex>,
    );
    const div = screen.getByText("test");
    expect(div).toHaveClass(displayVariants["flex"]);
    expect(div).not.toHaveStyle({ columnGap: "1rem" });
    expect(div).not.toHaveStyle({ rowGap: "2rem" });
    expect(div).toHaveClass(gapVariants["md"]);
  });
});
