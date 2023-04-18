"use strict";

const Person = require("./person");

class Employee extends Person {
  constructor(name, dateOfBirth, salary, hireDate) {
    super(name, dateOfBirth);
    this.salary = salary;
    this.hireDate = hireDate;
  }

  doJob(jobTitle) {
    console.log(
      `${this.getName()} is a ${jobTitle} who earns $${this.salary.toFixed(2)}.`
    );
  }
}

module.exports = Employee;
