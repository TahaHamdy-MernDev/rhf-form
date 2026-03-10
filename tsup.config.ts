import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "react-hook-form",
    "tailwindcss",
    "clsx",
    "date-fns",
    "lucide-react",
    "react-day-picker",
    "tailwind-merge",
    "zod",
  ],
  treeshake: true,
  sourcemap: true,
  minify: true,
  banner: {
    js: '"use client";',
  },
});
