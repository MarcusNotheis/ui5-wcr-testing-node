import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import ResizeObserverPolyfill from "resize-observer-polyfill";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

globalThis.ResizeObserver = ResizeObserverPolyfill;

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
