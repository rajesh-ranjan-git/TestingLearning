type Engineer = {
  name: string;
  busy: boolean;
};

type Manager = {
  name: string;
  busy: boolean;
};

type PendingIncidents = string[];

export class Pager {
  private engineers: Engineer[] = [];
  private managers: Manager[] = [];
  private pendingIncidents: PendingIncidents = [];

  constructor(engineers: string[], managers: string[]) {
    engineers.forEach((engineer) => {
      console.log(engineer);
      this.engineers.push({ name: engineer, busy: false });
    });
    managers.forEach((manager) =>
      this.managers.push({ name: manager, busy: false })
    );
  }

  assignIncidents(incident: string): string {
    // Add incident to pendingIncidents queue
    if (incident === "") {
      return "Invalid incident!";
    }

    this.pendingIncidents.push(incident);

    // If incident exists
    if (this.pendingIncidents.length > 0) {
      // Assign incidents to engineers first
      for (const engineer of this.engineers) {
        if (!engineer.busy) {
          engineer.busy = true;
          const inc = this.pendingIncidents.shift();
          return `${inc} is assigned to ${engineer.name}!`;
        }
      }

      // If engineers are not available, assign to managers
      for (const manager of this.managers) {
        if (!manager.busy) {
          manager.busy = true;
          const inc = this.pendingIncidents.shift();
          return `${inc} is assigned to ${manager.name}!`;
        }
      }
    }

    return `${this.pendingIncidents[0]} is in queue, no personnel available!`;
  }

  resolveIncidents(person: string): string {
    const assignedPerson =
      this.engineers.find((engineer) => engineer.name === person) ||
      this.managers.find((manager) => manager.name === person);

    if (!assignedPerson) {
      return "Invalid engineer/manager name!";
    }

    assignedPerson.busy = false;

    if (this.pendingIncidents.length > 0) {
      assignedPerson.busy = true;
      const inc = this.pendingIncidents.shift();
      return `${inc} is assigned to ${assignedPerson.name}!`;
    }

    return `${assignedPerson.name} is available!`;
  }
}

const pager = new Pager(["Rajesh", "Ranjan"], ["Sayantanee", "Mohanta"]);

console.log(pager.assignIncidents("INC1"));
console.log(pager.assignIncidents("INC2"));
console.log(pager.assignIncidents("INC3"));
console.log(pager.assignIncidents("INC4"));
console.log(pager.assignIncidents("INC5"));
console.log(pager.assignIncidents(""));
console.log(pager.resolveIncidents(""));
console.log(pager.resolveIncidents("Rajesh"));
console.log(pager.resolveIncidents("Ranjan"));
console.log(pager.assignIncidents("INC6"));
console.log(pager.resolveIncidents("Sayantanee"));
console.log(pager.resolveIncidents("Mohanta"));
console.log(pager.assignIncidents("INC7"));
