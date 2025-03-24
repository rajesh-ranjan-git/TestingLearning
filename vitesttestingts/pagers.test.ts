import { describe, expect, test } from "vitest";
import { Pagers } from "./Pagers"; // Adjust path based on your file structure

describe("Pagers class", () => {
  test("should assign incidents to engineers first", () => {
    const pager = new Pagers(["Alice", "Bob"], ["Charlie", "David"]);

    expect(pager.assignIncidents()).toBe("Alice is assigned to an incident.");
    expect(pager.assignIncidents()).toBe("Bob is assigned to an incident.");
  });

  test("should assign incidents to managers when all engineers are busy", () => {
    const pager = new Pagers(["Alice"], ["Charlie"]);

    expect(pager.assignIncidents()).toBe("Alice is assigned to an incident.");
    expect(pager.assignIncidents()).toBe("Charlie is assigned to an incident.");
  });

  test("should return no available personnel when all are busy", () => {
    const pager = new Pagers(["Alice"], ["Charlie"]);

    pager.assignIncidents(); // Alice assigned
    pager.assignIncidents(); // Charlie assigned

    expect(pager.assignIncidents()).toBe(
      "No one is available to assign the incident to."
    );
  });

  test("should properly handle multiple engineers and managers", () => {
    const pager = new Pagers(["Alice", "Bob"], ["Charlie", "David"]);

    expect(pager.assignIncidents()).toBe("Alice is assigned to an incident.");
    expect(pager.assignIncidents()).toBe("Bob is assigned to an incident.");
    expect(pager.assignIncidents()).toBe("Charlie is assigned to an incident.");
    expect(pager.assignIncidents()).toBe("David is assigned to an incident.");
    expect(pager.assignIncidents()).toBe(
      "No one is available to assign the incident to."
    );
  });
});
