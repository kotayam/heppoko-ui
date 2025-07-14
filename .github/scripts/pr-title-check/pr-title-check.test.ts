import { describe, expect, it } from "vitest";
import { validatePRTitle } from "../tools/tools";

describe("pr title check", () => {
  it("correct format", () => {
    const allowedTypes = ["feat", "test", "ci", "chore"];
    const title = ": add button [HEP-1234]";
    allowedTypes.forEach((type) => {
      expect(validatePRTitle(type + title)).toBeTruthy();
    });
  });

  it("missing type", () => {
    const title = "add button [HEP-1234]";
    expect(validatePRTitle(title)).toBeFalsy();
  });

  it("wrong type", () => {
    const title = "feature: add button [HEP-1234]";
    expect(validatePRTitle(title)).toBeFalsy();
  });

  it("missing description", () => {
    const title = "test: [HEP-1234]";
    expect(validatePRTitle(title)).toBeFalsy();
  });

  it("missing issue number", () => {
    const title = "chore: clean up";
    expect(validatePRTitle(title)).toBeFalsy();
  });

  it("wrong issue number format", () => {
    const wrongFormats = ["1234", ":1234", "HEP", "HEP:", "HEP1234"];
    wrongFormats.forEach((fmt) => {
      const title = `ci: add ci [${fmt}]`;
      expect(validatePRTitle(title)).toBeFalsy();
    });
  });
});
