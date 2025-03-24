export default function sum(...numbers: number[]): number {
  return numbers.reduce((total, number) => total + number, 0);
}

if (import.meta.vitest) {
  const { describe, expect, test } = import.meta.vitest;

  describe("sum", () => {
    test("returns 0 with no numbers", () => {
      expect(sum()).toBe(0);
    });

    test("returns same number with one number", () => {
      expect(sum(3)).toBe(3);
    });

    test("returns sum with multiple numbers", () => {
      expect(sum(1, 2, 5, 8)).toBe(16);
    });
  });
}
