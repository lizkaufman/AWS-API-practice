const express = require("express");
const morgan = require("morgan");

const bookRouter = require("./routes/books.js");
const authorRouter = require("./routes/authors.js");

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/books", bookRouter);
app.use("/api/authors", authorRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
