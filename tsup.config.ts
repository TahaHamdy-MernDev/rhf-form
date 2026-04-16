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
    "zod",
    "clsx",
    "date-fns",
    "lucide-react",
    "react-day-picker",
    "tailwind-merge",
  ],
  treeshake: true,
  sourcemap: true,
  minify: true,
});
