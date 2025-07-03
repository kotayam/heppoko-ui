import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Image } from "./Image";

describe("Image", () => {
  afterEach(() => {
    cleanup();
  });

  const testSrc = "https://test.com/image.jpg";
  const testAlt = "test image";

  it("correct src and alt", () => {
    render(<Image src={testSrc} alt={testAlt} />);
    const image = screen.getByAltText(testAlt) as HTMLImageElement;
    expect(image.src).toBe(testSrc);
    expect(image.alt).toBe(testAlt);
  });
});
