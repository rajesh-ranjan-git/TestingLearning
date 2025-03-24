import { Pager } from "./pager.ts";
import { describe, expect, test } from "vitest";

describe("Testing Pager", () => {
  const paged = new Pager(
    [
      { name: "Kripanidhan", busy: false },
      { name: "Rahee", busy: false },
    ],
    [
      { name: "Rajesh", busy: false },
      { name: "Sayantanee", busy: false },
    ]
  );

  test("First Incident Assignment", () => {
    expect(paged.assignIncidents("Incident 1")).toBe(
      "Incident 1 is assigned to Kripanidhan!"
    );
  });

  test("Second Incident Assignment", () => {
    expect(paged.assignIncidents("Incident 2")).toBe(
      "Incident 2 is assigned to Rahee!"
    );
  });

  test("Third Incident Assignment", () => {
    expect(paged.assignIncidents("Incident 3")).toBe(
      "Incident 3 is assigned to Rajesh!"
    );
  });

  test("Fourth Incident Assignment", () => {
    expect(paged.assignIncidents("Incident 4")).toBe(
      "Incident 4 is assigned to Sayantanee!"
    );
  });

  test("Fifth Incident Assignment", () => {
    expect(paged.assignIncidents("Incident 5")).toBe(
      "No personnel available to check incidents, please wait for available personnel!"
    );
  });

  test("Second Incident Resolved", () => {
    expect(paged.resolveIncidents("Rahee")).toBe(
      "Incident 5 is assigned to Rahee!"
    );
  });

  test("Third Incident Resolved", () => {
    expect(paged.resolveIncidents("Rajesh")).toBe("Rajesh is available!");
  });
});
