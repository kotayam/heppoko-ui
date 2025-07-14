import { defineConfig } from "tsup";

export default defineConfig({
    entry: [".github/scripts/pr-title-check/pr-title-check.ts"],
    tsconfig: ".github/scripts/tsconfig.json",
});
