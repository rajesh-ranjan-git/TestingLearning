type Engineers = {
  name: string;
  busy: boolean;
}[];

type Managers = {
  name: string;
  busy: boolean;
}[];

type PendingIncidents = string[];

export class IncidentAssignment {
  private engineers: Engineers = [];
  private managers: Managers = [];
  private pendingIncidents: PendingIncidents = [];

  constructor(
    engineers: Engineers,
    managers: Managers,
    pendingIncidents: PendingIncidents
  ) {
    this.engineers = [...engineers];
    this.managers = [...managers];
    this.pendingIncidents = [...pendingIncidents];
  }

  assignIncidents(): string {
    if (this.pendingIncidents.length < 1) {
      return `No pending incidents!`;
    }

    for (const person of this.engineers) {
      if (!person.busy) {
        person.busy = true;
        const inc = this.pendingIncidents.shift();
        return `${inc} is assigned to ${person.name}!`;
      }
    }

    for (const person of this.managers) {
      if (!person.busy) {
        person.busy = true;
        const inc = this.pendingIncidents.shift();
        return `${inc} is assigned to ${person.name}!`;
      }
    }

    return "No personnel available to check incidents, please wait for available personnel!";
  }

  resolveIncidents(person: string) {
    const availablePerson =
      this.engineers.find((e) => e.name === person) ||
      this.managers.find((e) => e.name === person);

    if (availablePerson?.busy) {
      availablePerson.busy = false;

      if (this.pendingIncidents.length > 0) {
        availablePerson.busy = true;
        const inc = this.pendingIncidents.shift();
        return `${inc} is assigned to ${availablePerson.name}!`;
      }
    }

    return `${availablePerson?.name} is available!`;
  }
}

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

console.log(inc.assignIncidents());
console.log(inc.assignIncidents());
console.log(inc.assignIncidents());
console.log(inc.assignIncidents());
console.log(inc.assignIncidents());
console.log(inc.assignIncidents());
console.log(inc.resolveIncidents("Rahee"));
console.log(inc.resolveIncidents("Rajesh"));
console.log(inc.assignIncidents());
console.log(inc.resolveIncidents("Sayantanee"));
