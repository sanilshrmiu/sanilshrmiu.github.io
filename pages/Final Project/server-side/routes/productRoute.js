const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("/", (req, res) => {
  res.status(200).json(Product.findAll());
});

router.get("/:id", (req, res) => {
  res.status(200).json(Product.findById(req.params.id));
});

module.exports = router;
