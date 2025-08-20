import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { Icon } from "./icon";
import {
  fontSizeVariants,
  strokeLineVariants,
  strokeWidthVariants,
} from "./icon.css";

const Test = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >
      test
    </div>
  );
};

describe("Icon", () => {
  afterEach(() => {
    cleanup();
  });

  it("default style", () => {
    render(<Icon icon={Test} />);
    const icon = screen.getByText("test");
    expect(icon).toHaveClass(fontSizeVariants["md"]);
    expect(icon).toHaveClass(strokeLineVariants["round"]);
  });

  it("custom style", () => {
    render(<Icon icon={Test} size={"1rem"} strokeWidth="md" />);
    const icon = screen.getByText("test");
    expect(icon).toHaveStyle({ fontSize: "1rem" });
    expect(icon).toHaveClass(strokeWidthVariants["md"]);
  });
});
