const express = require("express");

const bookRouter = require("./router/booksRouter");

const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.use("/books", bookRouter);

app.listen(4000, () => console.log("listen on 4000"));
