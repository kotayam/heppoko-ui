import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Flex } from "./Flex";

describe("Flex", () => {
  afterEach(() => {
    cleanup();
  });

  it("default is centered horizontally", () => {
    render(<Flex>test</Flex>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ display: "flex" });
    expect(div).toHaveStyle({ flexDirection: "row" });
    expect(div).toHaveStyle({ justifyContent: "center" });
    expect(div).toHaveStyle({ alignItems: "center" });
  });

  it("gap overwrites gapX and gapY", () => {
    render(
      <Flex gapX={"1rem"} gapY={"2rem"} gap={"1.5rem"}>
        test
      </Flex>,
    );
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ display: "flex" });
    expect(div).not.toHaveStyle({ columnGap: "1rem" });
    expect(div).not.toHaveStyle({ rowGap: "2rem" });
    expect(div).toHaveStyle({ gap: "1.5rem" });
  });
});
