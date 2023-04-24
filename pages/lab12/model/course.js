class Course {
  constructor(id, code, name) {
    this.id = id;
    this.code = code;
    this.courseName = name;
  }

  save() {
    db.push(this);
    return this;
  }

  static getAll() {
    return db;
  }

  static findById(stuId) {
    const index = db.findIndex((stu) => stu.id == stuId);
    return db[index];
  }
}

const course1 = new Course(1, "CS 505", "Advanced Programming Languages");
const course2 = new Course(2, "CS 523", "Big Data Technologies (Data Science)");
const course3 = new Course(3, "CS 525", "Advanced Software Design");

let db = [course1, course2, course3];

module.exports = Course;
