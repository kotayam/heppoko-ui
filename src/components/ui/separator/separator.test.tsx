import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Separator } from "./separator";
import { horizontalVariants, verticalVariants } from "./separator.css";
import { opacityVariants } from "@/styles/shared/opacity.css";
import { marginVariants } from "@/styles/shared/margin.css";

describe("Separator", () => {
  afterEach(() => {
    cleanup();
  });

  it("default is horizontal", () => {
    const { container } = render(<Separator />);
    const div = container.firstChild;
    expect(div).toHaveClass(horizontalVariants["full"]);
    expect(div).toHaveClass(opacityVariants["translucent"]);
    expect(div).toHaveClass(marginVariants["1"]);
  });

  it("vertical separator has correctly style", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const div = container.firstChild;
    expect(div).toHaveClass(verticalVariants["full"]);
    expect(div).toHaveClass(opacityVariants["translucent"]);
    expect(div).toHaveClass(marginVariants["1"]);
  });
});
