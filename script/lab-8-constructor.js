function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];

  this.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
  };

  this.computeAverageGrade = function () {
    const total = this.grades.reduce((acc, cur) => acc + cur, 0);
    return total / this.grades.length;
  };
}

const studentArrayNew = [
  new Student("John", "Doe"),
  new Student("Jane", "Doe"),
  new Student("Bob", "Smith"),
];

studentArrayNew[0].inputNewGrade(80);
studentArrayNew[0].inputNewGrade(90);
studentArrayNew[0].inputNewGrade(95);

studentArrayNew[1].inputNewGrade(70);
studentArrayNew[1].inputNewGrade(85);
studentArrayNew[1].inputNewGrade(90);

studentArrayNew[2].inputNewGrade(60);
studentArrayNew[2].inputNewGrade(75);
studentArrayNew[2].inputNewGrade(80);

const totalGradesNew = studentArrayNew.reduce(
  (acc, cur) => acc.concat(cur.grades),
  []
);
const averageGradeNew =
  totalGradesNew.reduce((acc, cur) => acc + cur, 0) / totalGradesNew.length;

console.log(averageGradeNew);
