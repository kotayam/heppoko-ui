import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  afterEach(() => {
    cleanup();
  });

  it("setting size changes font size", () => {
    render(<Text size="1rem">test</Text>);
    const elt = screen.getByText("test");
    expect(elt).toHaveStyle({ fontSize: "1rem" });
  });
});
