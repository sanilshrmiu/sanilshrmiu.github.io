const express = require("express");
const router = express.Router();
const fs = require("fs");
const Product = require("../model/product");

router.get("/", (req, res) => {
  res.status(200).json(Product.findAll());
});

router.get("/:id", (req, res) => {
  res.status(200).json(Product.findById(req.params.id));
});

router.get("/image/:fileName", (req, res) => {
  const imagePath = __dirname + "/../uploads/" + req.params.fileName;
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    res.writeHead(200, {
      "Content-Type": "image/jpeg",
      "Content-Length": data.length,
    });
    res.end(data);
  });
});

module.exports = router;
