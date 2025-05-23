import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
