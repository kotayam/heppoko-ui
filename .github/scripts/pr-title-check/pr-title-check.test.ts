import { describe, expect, it } from "vitest";
import { validatePRTitle } from "../tools";

describe("pr title check", () => {
    it("wrong format", () => {
        const title = "add a button";
        expect(validatePRTitle(title)).toBeFalsy();
    });
});
