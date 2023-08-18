const mongoose = require("mongoose");

const connectdb = () => {
  mongoose
    .connect("mongodb://mongodb:27017/demo")
    .then((res) => {
      console.log("Connected to DB !!");
    })
    .catch((err) => {
      console.log("error", err.message);
    });
};

connectdb();
