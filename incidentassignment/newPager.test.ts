import { Pager } from "./newPager.ts";
import { beforeEach, describe, expect, test } from "vitest";

describe("Pager Duty", () => {
  let pager: Pager;

  beforeEach(() => {
    pager = new Pager(["Kripanidhan", "Rahee"], ["Rajesh", "Sayantanee"]);
  });

  test("Assign incidents to engineers first", () => {
    expect(pager.assignIncidents("Incident 1")).toBe(
      "Incident 1 is assigned to Kripanidhan!"
    );
    expect(pager.assignIncidents("Incident 2")).toBe(
      "Incident 2 is assigned to Rahee!"
    );
  });

  test("Assign incidents to managers if engineers are not available", () => {
    pager.assignIncidents("Incident 1");
    pager.assignIncidents("Incident 2");

    expect(pager.assignIncidents("Incident 3")).toBe(
      "Incident 3 is assigned to Rajesh!"
    );

    expect(pager.assignIncidents("Incident 4")).toBe(
      "Incident 4 is assigned to Sayantanee!"
    );
  });

  test("Keep incidents in pending queue if no personnel is available", () => {
    pager.assignIncidents("Incident 1");
    pager.assignIncidents("Incident 2");
    pager.assignIncidents("Incident 3");
    pager.assignIncidents("Incident 4");

    expect(pager.assignIncidents("Incident 5")).toBe(
      "Incident 5 is pending, No personnel available..."
    );
  });

  test("Assign incidents to engineers or mangers once they are available", () => {
    pager.assignIncidents("Incident 1");
    pager.assignIncidents("Incident 2");
    pager.assignIncidents("Incident 3");
    pager.assignIncidents("Incident 4");
    pager.assignIncidents("Incident 5");
    pager.assignIncidents("Incident 6");

    expect(pager.resolveIncidents("Sayantanee")).toBe(
      "Incident 5 is assigned to Sayantanee!"
    );

    expect(pager.resolveIncidents("Kripanidhan")).toBe(
      "Incident 6 is assigned to Kripanidhan!"
    );
  });

  test("Assign incidents to engineers or mangers once they are available", () => {
    pager.assignIncidents("Incident 1");
    pager.assignIncidents("Incident 2");
    pager.assignIncidents("Incident 3");
    pager.assignIncidents("Incident 4");
    pager.assignIncidents("Incident 5");
    pager.assignIncidents("Incident 6");
    pager.resolveIncidents("Sayantanee");
    pager.resolveIncidents("Kripanidhan");

    expect(pager.resolveIncidents("Rahee")).toBe("Rahee is available!");
  });
});
