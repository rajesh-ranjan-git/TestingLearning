type Engineers = {
  name: string;
  busy: boolean;
}[];

type Managers = {
  name: string;
  busy: boolean;
}[];

type PendingIncidents = string[];

export class Pager {
  private engineers: Engineers = [];
  private managers: Managers = [];
  private pendingIncidents: PendingIncidents = [];

  constructor(engineers: string[], managers: string[]) {
    for (const engineer of engineers) {
      this.engineers.push({ name: engineer, busy: false });
    }

    for (const manager of managers) {
      this.managers.push({ name: manager, busy: false });
    }

    this.pendingIncidents = [];
  }

  assignIncidents(incident: string): string {
    this.pendingIncidents.push(incident);

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

    const inc = this.pendingIncidents[0];
    return `${inc} is pending, No personnel available...`;
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

const paged = new Pager(["Kripanidhan", "Rahee"], ["Rajesh", "Sayantanee"]);

console.log(paged.assignIncidents("Incident 1"));
console.log(paged.assignIncidents("Incident 2"));
console.log(paged.assignIncidents("Incident 3"));
console.log(paged.assignIncidents("Incident 4"));
console.log(paged.assignIncidents("Incident 5"));
console.log(paged.assignIncidents("Incident 6"));
console.log(paged.assignIncidents("Incident 7"));
console.log(paged.resolveIncidents("Rahee"));
console.log(paged.resolveIncidents("Rajesh"));
console.log(paged.assignIncidents("Incident 8"));
console.log(paged.resolveIncidents("Sayantanee"));
console.log(paged.resolveIncidents("Kripanidhan"));
console.log(paged.resolveIncidents("Rajesh"));
