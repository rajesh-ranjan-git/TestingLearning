import { Pager } from ".";
import { beforeEach, describe, expect, test } from "vitest";

describe("Pager Incidents", () => {
  let pager: Pager;

  beforeEach(() => {
    pager = new Pager(["Rajesh", "Ranjan"], ["Sayantanee", "Mohanta"]);
  });

  test("Invalid incidents", () => {
    expect(pager.assignIncidents("")).toBe("Invalid incident!");
  });

  test("Assign incidents to engineers first", () => {
    expect(pager.assignIncidents("INC1")).toBe("INC1 is assigned to Rajesh!");
  });

  test("Assign incidents to managers if engineers are busy", () => {
    pager.assignIncidents("INC1");
    pager.assignIncidents("INC2");
    expect(pager.assignIncidents("INC3")).toBe(
      "INC3 is assigned to Sayantanee!"
    );
  });

  test("Invalid engineer/manager name while resolving incident", () => {
    pager.assignIncidents("INC1");
    pager.assignIncidents("INC2");
    expect(pager.resolveIncidents("INC3")).toBe(
      "Invalid engineer/manager name!"
    );
  });

  test("Incident should be in queue if no personnel is available", () => {
    pager.assignIncidents("INC1");
    pager.assignIncidents("INC2");
    pager.assignIncidents("INC3");
    pager.assignIncidents("INC4");
    expect(pager.assignIncidents("INC5")).toBe(
      "INC5 is in queue, no personnel available!"
    );
  });

  test("Assign incident to available person if incident is in queue", () => {
    pager.assignIncidents("INC1");
    pager.assignIncidents("INC2");
    pager.assignIncidents("INC3");
    pager.assignIncidents("INC4");
    pager.assignIncidents("INC5");
    expect(pager.resolveIncidents("Rajesh")).toBe(
      "INC5 is assigned to Rajesh!"
    );
  });

  test("If no incident is in queue, show the available personnel", () => {
    pager.assignIncidents("INC1");
    pager.assignIncidents("INC2");
    pager.assignIncidents("INC3");
    pager.assignIncidents("INC4");
    pager.assignIncidents("INC5");
    pager.resolveIncidents("Rajesh");
    expect(pager.resolveIncidents("Sayantanee")).toBe(
      "Sayantanee is available!"
    );
  });
});
