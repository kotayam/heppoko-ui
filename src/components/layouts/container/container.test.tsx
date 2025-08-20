import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  afterEach(() => {
    cleanup();
  });

  it("apply width, height settings", () => {
    render(
      <Container width={"100%"} height={"100%"}>
        test
      </Container>,
    );
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ width: "100%" });
    expect(div).toHaveStyle({ height: "100%" });
  });
});
