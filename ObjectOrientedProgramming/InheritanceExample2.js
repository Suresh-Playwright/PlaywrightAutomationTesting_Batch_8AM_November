"use strict";
class Employee {
    name;
    employeeId;
    constructor(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }
    displayDetails() {
        console.log(this.name);
        console.log(this.employeeId);
    }
}
class Developers extends Employee {
    technology;
    constructor(name, employeeId, technology) {
        super(name, employeeId);
        this.technology = technology;
    }
    writeCode() {
        console.log(`Working with ${this.technology}`);
    }
}
const developers = new Developers("Suresh", 101, "TypeScript");
developers.displayDetails();
developers.writeCode();
