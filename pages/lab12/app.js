const express = require("express");
const fs = require("fs");
const app = express();
const courseRouter = require("./routers/courseRouter");

app.use(express.json());

app.get("/image", (req, res) => {
  const path = __dirname + "/images/image.jpg";
  const image = fs.readFileSync(path);
  res.setHeader("Content-Type", `image/jpeg`);
  res.status(200).send(image);
});

app.use("/courses", courseRouter);

app.listen(3001, () => {
  console.log("Application started on port 3001");
});
