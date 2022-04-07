require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

app.get("/user", (req, res) => {
  return res.status(200).send({data: {username:"holy", age:26, email:"safjsdoi@gmail.com"}})
});

server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
