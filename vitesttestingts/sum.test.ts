import sum from "./sum.ts";
import { describe, expect, test } from "vitest";

describe("sum", () => {
  test("return 0 with no numbers", () => {
    expect(sum()).toBe(0);
  });
  test("return number with 1 number", () => {
    expect(sum(4)).toBe(4);
  });
  test("return sum with multiple numbers", () => {
    expect(sum(3, 5)).toBe(8);
  });
});
