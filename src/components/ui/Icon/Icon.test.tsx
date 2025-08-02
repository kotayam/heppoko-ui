import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";

import { getColor } from "@/components/common";

import { Icon } from "./Icon";

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
    expect(icon).toHaveStyle({ fontSize: "3rem" });
    expect(icon).toHaveStyle({ strokeLinejoin: "round" });
    expect(icon).toHaveStyle({ strokeLinecap: "round" });
    expect(icon).toHaveStyle({ color: getColor("white") });
  });
});
