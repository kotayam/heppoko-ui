import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { IconButton } from "./icon-button";
import { Icon } from "../icon/icon";
import userEvent from "@testing-library/user-event";
import { base } from "./icon-button.css";
import {
  borderStyleVariants,
  borderWidthVariants,
} from "@/styles/shared/border.css";
import { shadowVariants } from "@/styles/shared/shadow.css";

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
    render(
      <IconButton>
        <Icon icon={Test} />
      </IconButton>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass(base);
    expect(button).toHaveClass(borderStyleVariants["solid"]);
    expect(button).toHaveStyle({ borderRadius: "1rem" });
    expect(button).toHaveClass(borderWidthVariants["md"]);
    expect(button).toHaveStyle({ width: "5rem" });
    expect(button).toHaveStyle({ height: "5rem" });
    expect(button).toHaveClass(shadowVariants["md"]);
  });

  it("click triggers", async () => {
    render(
      <IconButton onClick={onClick}>
        <Icon icon={Test} />
      </IconButton>,
    );
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
