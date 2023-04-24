const express = require("express");
const Course = require("../model/course");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(Course.getAll());
});

router.get("/:courseId", (req, res) => {
  const course = Course.findById(req.params.courseId);
  if (course) {
    res.status(200).json(course);
  } else {
    res.status(500).send("Course not found");
  }
});

router.post("/", (req, res) => {
  if (!req.body.id || !req.body.code || !req.body.name) {
    res.status(400).send("Please enter valid details");
  } else if (Course.findById(req.body.id)) {
    res.status(500).send("Course with ID already exists");
  } else {
    const newCourse = new Course(
      req.body.id,
      req.body.code.trim(),
      req.body.name.trim()
    ).save();
    res.status(201).json(newCourse);
  }
});

module.exports = router;
