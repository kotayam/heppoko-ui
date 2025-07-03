import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ScrollArea } from "./ScrollArea";

describe("ScrollArea", () => {
  afterEach(() => {
    cleanup();
  });

  it("vertical has correct style", () => {
    render(<ScrollArea scrollbar="vertical">test</ScrollArea>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ overflowX: "hidden" });
    expect(div).toHaveStyle({ overflowY: "auto" });
  });

  it("horizontal has correct style", () => {
    render(<ScrollArea scrollbar="horizontal">test</ScrollArea>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ overflowX: "auto" });
    expect(div).toHaveStyle({ overflowY: "hidden" });
  });

  it("both has correct style", () => {
    render(<ScrollArea>test</ScrollArea>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ overflow: "auto" });
  });
});
