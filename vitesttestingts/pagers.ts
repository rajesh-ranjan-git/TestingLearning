export class Pagers {
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
    for (let i = 0; i < this.engineers.length; i++) {
      if (!this.engineers[i].busy) {
        this.engineers[i].busy = true;
        return `${this.engineers[i].name} is assigned to an incident.`;
      }
    }

    for (let i = 0; i < this.managers.length; i++) {
      if (!this.managers[i].busy) {
        this.managers[i].busy = true;
        return `${this.managers[i].name} is assigned to an incident.`;
      }
    }

    return "No one is available to assign the incident to.";
  }
}

const test = new Pagers(
  ["Rajesh", "Ranjan", "Rahee", "Kripanidhan"],
  ["Sayantanee", "Mohanta"]
);
console.log(test.assignIncidents());
console.log(test.assignIncidents());
console.log(test.assignIncidents());
console.log(test.assignIncidents());
console.log(test.assignIncidents());
console.log(test.assignIncidents());
console.log(test.assignIncidents());
console.log(test.assignIncidents());
console.log(test.assignIncidents());
