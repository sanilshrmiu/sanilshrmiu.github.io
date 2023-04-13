"use strict";

console.log("Fix using wrapper");
function askPassword1(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: "John",

  loginok: () => {
    alert(`${user1.name} logged in`);
  },

  loginFail: () => {
    alert(`${user1.name} failed to log in`);
  },
};

askPassword1(user1.loginok, user1.loginFail);

console.log("Fix using bind");
function askPassword2(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: "John",

  loginok() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword2(user2.loginok.bind(user2), user2.loginFail.bind(user2));

console.log("Fix using apply");
function askPassword3(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok.apply(user3);
  else fail.apply(user3);
}

let user3 = {
  name: "John",

  loginok() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword3(user3.loginok, user3.loginFail);

console.log("Fix using call");
function askPassword4(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok.call(user4);
  else fail.call(user4);
}

let user4 = {
  name: "John",

  loginok() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword4(user4.loginok, user4.loginFail);

console.log("Question Number 2");
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};

group.showList();
