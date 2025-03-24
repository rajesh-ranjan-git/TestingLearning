import { IncidentAssignment } from ".";
import { describe, expect, test } from "vitest";

describe("Testing Incidents", () => {
  const inc = new IncidentAssignment(
    [
      { name: "Kripanidhan", busy: false },
      { name: "Rahee", busy: false },
    ],
    [
      { name: "Rajesh", busy: false },
      { name: "Sayantanee", busy: false },
    ],
    ["INC1", "INC2", "INC3", "INC4", "INC5", "INC6", "INC7"]
  );

  test("First Incident Assignment", () => {
    expect(inc.assignIncidents()).toBe("INC1 is assigned to Kripanidhan!");
  });

  test("Second Incident Assignment", () => {
    expect(inc.assignIncidents()).toBe("INC2 is assigned to Rahee!");
  });

  test("Third Incident Assignment", () => {
    expect(inc.assignIncidents()).toBe("INC3 is assigned to Rajesh!");
  });

  test("Fourth Incident Assignment", () => {
    expect(inc.assignIncidents()).toBe("INC4 is assigned to Sayantanee!");
  });

  test("Fifth Incident Assignment", () => {
    expect(inc.assignIncidents()).toBe(
      "No personnel available to check incidents, please wait for available personnel!"
    );
  });

  test("Second Incident Resolved", () => {
    expect(inc.resolveIncidents("Rahee")).toBe("INC5 is assigned to Rahee!");
  });

  test("Third Incident Resolved", () => {
    expect(inc.resolveIncidents("Rajesh")).toBe("INC6 is assigned to Rajesh!");
  });

  test("Seventh Incident Assignment", () => {
    expect(inc.assignIncidents()).toBe(
      "No personnel available to check incidents, please wait for available personnel!"
    );
  });

  test("Fourth Incident Resolved", () => {
    expect(inc.resolveIncidents("Sayantanee")).toBe(
      "INC7 is assigned to Sayantanee!"
    );
  });

  test("First Incident Resolved", () => {
    expect(inc.resolveIncidents("Kripanidhan")).toBe(
      "Kripanidhan is available!"
    );
  });

  test("no available incident", () => {
    expect(inc.assignIncidents()).toBe("No pending incidents!");
  });
});
