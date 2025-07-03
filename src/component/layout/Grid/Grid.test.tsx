import { cleanup, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { afterEach } from "vitest";
import { describe } from "vitest";
import { Grid } from "./Grid";

describe("Grid", () => {
  afterEach(() => {
    cleanup();
  });

  it("default is centered", () => {
    render(<Grid>test</Grid>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ display: "grid" });
    expect(div).toHaveStyle({ justifyContent: "center" });
    expect(div).toHaveStyle({ alignItems: "center" });
  });

  it("gap overwrites gapX and gapY", () => {
    render(
      <Grid gapX={"1rem"} gapY={"3rem"} gap={"2rem"}>
        test
      </Grid>,
    );
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ display: "grid" });
    expect(div).not.toHaveStyle({ columnGap: "1rem" });
    expect(div).not.toHaveStyle({ rowGap: "3rem" });
    expect(div).toHaveStyle({ gap: "2rem" });
  });
});
