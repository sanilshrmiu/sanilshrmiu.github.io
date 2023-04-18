"use strict";

class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getDateOfBirth() {
    return this.dateOfBirth;
  }

  setDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  toString() {
    return `{ Name: ${this.getName()}, DateOfBirth: ${this.getDateOfBirth()
      .toISOString()
      .slice(0, 10)} }`;
  }
}

module.exports = Person;
