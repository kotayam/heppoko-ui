import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults, defineConfig } from "vitest/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "HeppokoUI",
      fileName: (format) => `heppoko-ui.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    exclude: [...configDefaults.exclude, ".github"],
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json"],
      include: ["src/"],
      reportsDirectory: "coverage/report",
    },
    setupFiles: ["./vitest.setup.ts"],
  },
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
});
