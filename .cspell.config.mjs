import { defineConfig } from "cspell";

export default defineConfig({
    ignorePaths: ["node_modules", "dist", "coverage"],
    ignoreWords: ["heppoko", "Heppoko", "Behaviour"],
});
