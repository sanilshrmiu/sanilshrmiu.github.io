const express = require("express");
const router = express.Router();
const Book = require("../model/book");

router.post("/", (req, res) => {
  const addedBook = new Book(
    null,
    req.body.title,
    req.body.description,
    req.body.price
  ).save();
  res.status(201).json(addedBook);
});

router.get("/", (req, res) => {
  res.status(200).json(Book.getAll());
});

router.put("/:id", (req, res) => {
  const editedBook = new Book(
    req.params.id,
    req.body.title,
    req.body.description,
    req.body.price
  ).edit();
  res.json(editedBook);
});

router.delete("/:id", (req, res) => {
  res.json(Book.deleteById(req.params.id));
});

module.exports = router;
