import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { IconButton } from "./IconButton";
import { Icon } from "../Icon/Icon";
import { getColor } from "@/component/common";
import userEvent from "@testing-library/user-event";

describe("IconButton", () => {
  const Test = () => {
    return <div>test</div>;
  };

  const onClick = vi.fn(() => {});

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("default style", () => {
    render(<IconButton icon={<Icon icon={Test} />} />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ display: "flex" });
    expect(button).toHaveStyle({ justifyContent: "center" });
    expect(button).toHaveStyle({ alignItems: "center" });
    expect(button).toHaveStyle({ cursor: "pointer" });

    expect(button).toHaveStyle({ borderStyle: "solid" });
    expect(button).toHaveStyle({ borderRadius: "1rem" });
    expect(button).toHaveStyle({ borderWidth: "2px" });
    expect(button).toHaveStyle({ borderColor: getColor("green") });
    expect(button).toHaveStyle({ backgroundColor: getColor("black") });
    expect(button).toHaveStyle({ width: "5rem" });
    expect(button).toHaveStyle({ height: "5rem" });
    expect(button.style?.boxShadow).toBeDefined();
  });

  it("click triggers", async () => {
    render(<IconButton icon={<Icon icon={Test} />} onClick={onClick} />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
