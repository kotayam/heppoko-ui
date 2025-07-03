import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Separator } from "./Separator";
import { getColor } from "@/component/common";

describe("Separator", () => {
  afterEach(() => {
    cleanup();
  });

  it("default is horizontal", () => {
    const { container } = render(<Separator />);
    const div = container.firstChild;
    expect(div).toHaveStyle({ width: "100%" });
    expect(div).toHaveStyle({ height: "1px" });
    expect(div).toHaveStyle({ background: getColor("white") });
    expect(div).toHaveStyle({ opacity: 0.8 });
    expect(div).toHaveStyle({ margin: "0.5rem" });
  });

  it("vertical separator has correctly style", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const div = container.firstChild;
    expect(div).toHaveStyle({ width: "1px" });
    expect(div).toHaveStyle({ height: "100%" });
    expect(div).toHaveStyle({ background: getColor("white") });
    expect(div).toHaveStyle({ opacity: 0.8 });
    expect(div).toHaveStyle({ margin: "0.5rem" });
  });
});
