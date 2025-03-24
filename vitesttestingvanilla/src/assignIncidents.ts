class Pagers {
  private engineers: { name: string; busy: boolean }[] = [];
  private managers: { name: string; busy: boolean }[] = [];

  constructor(engineers: string[], managers: string[]) {
    this.engineers = engineers.map((engineer) => ({
      name: engineer,
      busy: false,
    }));
    this.managers = managers.map((manager) => ({ name: manager, busy: false }));
  }

  assignIncidents(): string {
    this.engineers.forEach((engineer) => {
      if (!engineer.busy) {
        engineer.busy = true;
        return `${engineer.name} is assigned to an incident.`;
      }
    });

    this.managers.forEach((manager) => {
      if (!manager.busy) {
        manager.busy = true;
        return `${manager.name} is assigned to an incident.`;
      }
    });

    return "No one is available to assign the incident to.";
  }
}

const testPager = new Pagers(["Alice", "Bob"], ["Charlie", "David"]);
console.log(testPager.assignIncidents());
console.log(testPager.assignIncidents());
console.log(testPager.assignIncidents());

if (import.meta.vitest) {
  const { describe, expect, test } = import.meta.vitest;

  describe("Pagers class", () => {
    test("should assign incidents to engineers first", () => {
      const pager = new Pagers(["Alice", "Bob"], ["Charlie", "David"]);

      expect(pager.assignIncidents()).toBe("Alice is assigned to an incident.");
      expect(pager.assignIncidents()).toBe("Bob is assigned to an incident.");
    });

    // test("should assign incidents to managers when all engineers are busy", () => {
    //   const pager = new Pagers(["Alice"], ["Charlie"]);

    //   expect(pager.assignIncidents()).toBe("Alice is assigned to an incident.");
    //   expect(pager.assignIncidents()).toBe(
    //     "Charlie is assigned to an incident."
    //   );
    // });

    // test("should return no available personnel when all are busy", () => {
    //   const pager = new Pagers(["Alice"], ["Charlie"]);

    //   pager.assignIncidents(); // Alice assigned
    //   pager.assignIncidents(); // Charlie assigned

    //   expect(pager.assignIncidents()).toBe(
    //     "No one is available to assign the incident to."
    //   );
    // });

    // test("should properly handle multiple engineers and managers", () => {
    //   const pager = new Pagers(["Alice", "Bob"], ["Charlie", "David"]);

    //   expect(pager.assignIncidents()).toBe("Alice is assigned to an incident.");
    //   expect(pager.assignIncidents()).toBe("Bob is assigned to an incident.");
    //   expect(pager.assignIncidents()).toBe(
    //     "Charlie is assigned to an incident."
    //   );
    //   expect(pager.assignIncidents()).toBe("David is assigned to an incident.");
    //   expect(pager.assignIncidents()).toBe(
    //     "No one is available to assign the incident to."
    //   );
    // });
  });
}
