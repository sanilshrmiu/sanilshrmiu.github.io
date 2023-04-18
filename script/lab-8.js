const student = {
  firstName: "John",
  lastName: "Doe",
  grades: [],

  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },

  computeAverageGrade: function () {
    const total = this.grades.reduce((acc, cur) => acc + cur, 0);
    return total / this.grades.length;
  },
};

const studentArray = [
  Object.create(student),
  Object.create(student),
  Object.create(student),
];

studentArray[0].inputNewGrade(80);
studentArray[0].inputNewGrade(90);
studentArray[0].inputNewGrade(95);

studentArray[1].inputNewGrade(70);
studentArray[1].inputNewGrade(85);
studentArray[1].inputNewGrade(90);

studentArray[2].inputNewGrade(60);
studentArray[2].inputNewGrade(75);
studentArray[2].inputNewGrade(80);

const totalGrades = studentArray.reduce(
  (acc, cur) => acc.concat(cur.grades),
  []
);
const averageGrade =
  totalGrades.reduce((acc, cur) => acc + cur, 0) / totalGrades.length;

console.log(averageGrade);
