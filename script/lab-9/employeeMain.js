"use strict";

const Employee = require("./employee");

const jimHanson = new Employee(
  "Jim Hanson",
  new Date("1985-03-15"),
  245990.0,
  new Date()
);
jimHanson.doJob("Software Engineer");
