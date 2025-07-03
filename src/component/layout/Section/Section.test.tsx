import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { describe } from "vitest";
import { centerX, centerY, commonBottom, commonLeft, commonRight, commonTop, middle, Section } from "./Section";

describe("Section", () => {
  afterEach(() => {
    cleanup();
  });

  it("no section location", () => {
    render(
      <Section top={0} bottom={0} left={0} right={0}>
        test
      </Section>,
    );
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ top: 0 });
    expect(div).toHaveStyle({ bottom: 0 });
    expect(div).toHaveStyle({ left: 0 });
    expect(div).toHaveStyle({ right: 0 });
  });

  it("top left", () => {
    render(<Section location="tl">test</Section>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ top: commonTop });
    expect(div).toHaveStyle({ left: commonLeft });
  });

  it("top middle", () => {
    render(<Section location="tm">test</Section>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ top: commonTop });
    expect(div).toHaveStyle({ left: middle });
    expect(div).toHaveStyle({ transform: centerX });
  });

  it("top right", () => {
    render(<Section location="tr">test</Section>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ top: commonTop });
    expect(div).toHaveStyle({ right: commonRight });
  });

  it("bottom left", () => {
    render(<Section location="bl">test</Section>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ bottom: commonBottom });
    expect(div).toHaveStyle({ left: commonLeft });
  });

  it("bottom middle", () => {
    render(<Section location="bm">test</Section>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ bottom: commonBottom });
    expect(div).toHaveStyle({ left: middle });
    expect(div).toHaveStyle({ transform: centerX });
  });

  it("bottom right", () => {
    render(<Section location="br">test</Section>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ bottom: commonBottom });
    expect(div).toHaveStyle({ right: commonRight });
  });

  it("left middle", () => {
    render(<Section location="lm">test</Section>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ left: commonLeft });
    expect(div).toHaveStyle({ top: middle });
    expect(div).toHaveStyle({ transform: centerY });
  });

  it("right middle", () => {
    render(<Section location="rm">test</Section>);
    const div = screen.getByText("test");
    expect(div).toHaveStyle({ right: commonRight });
    expect(div).toHaveStyle({ top: middle });
    expect(div).toHaveStyle({ transform: centerY });
  });
});
