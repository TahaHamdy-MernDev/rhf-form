import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Optional: clean up after each test case (RTL does this automatically for most systems, but good to be explicit in Vitest)
afterEach(() => {
  cleanup();
});
