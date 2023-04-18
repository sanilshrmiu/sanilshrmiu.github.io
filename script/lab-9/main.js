"use strict";

const Person = require("./person");

const persons = [
  new Person("Ana Smith", new Date("1998-12-15")),
  new Person("Bob Jone", new Date("1945-11-16")),
  new Person("Carlos Slim Helu", new Date("1976-09-24")),
];

persons.forEach((person) => console.log(person.toString()));
