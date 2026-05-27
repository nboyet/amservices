import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    alias: {
      "next/font/google": new URL(
        "./__mocks__/next/font/google.ts",
        import.meta.url,
      ).pathname,
    },
  },
});
