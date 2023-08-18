const express = require("express");
require("./db/connection");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.static("upload"));
const port = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  try {
    res.send({ message: "hello !!!!!!!!!!!" });
  } catch (err) {
    res.send({ message: err.message });
  }
});

app.post("/", async (req, res) => {
  const { filename } = req.body;
  try {
    fs.mkdir("upload", (err) => {
      if (err) {
        console.log("error : ", err.message);
        return;
      }
    });
    fs.writeFile(
      `upload/${filename}.txt`,
      `This file is named as '${filename}'`,
      (err) => {
        if (err) {
          return res.send({ message: "something went wrong" });
        }
      }
    );
    res.send({ message: "file is created !!" });
  } catch (err) {
    res.send({ message: err.message });
  }
});

app.listen(port, () => {
  console.log("listening on port : ", port);
});
